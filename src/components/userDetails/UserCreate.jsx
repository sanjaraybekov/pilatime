import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import { useDaumPostcodePopup } from "react-daum-postcode";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MySearchIcon from "../MySearchIcon";
import { useToast } from "use-toast-mui";
import { useForm } from "react-hook-form";
import { createUser } from "../../api/user";
import { FormInputText } from "../../form-components/FormInputText";
import { FormInputDate } from "../../form-components/FormInputDate";
import { FormInputRadio } from "../../form-components/FormInputRadio";
import { gender, scriptUrl, smsAgreement } from "../../constants/constants";
import { dateConverter } from "../../utils/methods";
import { FormInputDropdown } from "../../form-components/FormInputDropdown";
import { FormInputTextArea } from "../../form-components/FormInputTextArea";

const options = [
  {
    label: "Dropdown Option 1",
    value: "20",
  },
  {
    label: "Dropdown Option 2",
    value: "30",
  },
];
const UserCreate = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit, control, setError } = methods;
  const toast = useToast();
  const [previewImage, setPreviewImage] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [age, setAge] = useState(null);
  const date = new Date();
  const currentYear = date.getFullYear();
  const handleAge = useRef(() => {});
  handleAge.current = (birthYear) => {
    const result = currentYear - birthYear;
    setAge(result);
  };


  const open = useDaumPostcodePopup(scriptUrl);
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(fullAddress, "address data"); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const submit = async (values) => {
    if (values.dateOfBirth?.$d) {
      values.dateOfBirth = dateConverter(values.dateOfBirth.$d);
    }
    if (values.regisDate?.$d) {
      values.regisDate = dateConverter(values.regisDate.$d);
    }
    if (values.password !== values.verifyPassword) {
      return setError("verifyPassword", {
        type: "custom",
        message: "very error",
      });
    }
    const { verifyPassword, ...filteredValues } = values;
    await createUser({ filteredValues }).then((res) => {
      console.log(res);
      toast.success("User created successfully!");
      navigate("/member");
    });
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleUploadImage = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setPreviewImage(url);
  };
  useEffect(() => {
    if (birthDate) {
      handleAge.current(birthDate.$y);
    }
  }, [birthDate, age]);
  return (
    <div
      style={{
        background: "white",
        borderRadius: "5px",
        padding: "40px",
        width: "1080px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/member"
          style={{ textDecoration: "none", color: "#3a3a3a", display: "flex" }}
        >
          <svg
            id="뒤로가기"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="Path_6534"
              data-name="Path 6534"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <circle
              id="Ellipse_96"
              data-name="Ellipse 96"
              cx="11"
              cy="11"
              r="11"
              transform="translate(1 1)"
              fill="#3a3a3a"
            />
            <path
              id="Path_6535"
              data-name="Path 6535"
              d="M6.393,8.579H14V9.865H6.393l3.352,3.448-.884.909L4,9.222l4.861-5,.884.909Z"
              transform="translate(3 2.778)"
              fill="#fff"
            />
          </svg>

          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "22px",
              ml: "8px",
              fontWeight: "550",
            }}
          >
            회원 등록
          </Typography>
        </Link>

        <Link
          style={{
            color: "#7832dc",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 550,
          }}
          to="/member"
        >
          목록으로
        </Link>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1", margin: "24px 0" }} />

      <Typography sx={{ fontSize: "16px", fontWeight: 500, mb: "12px" }}>
        기본 정보{" "}
        <span style={{ fontSize: "11px", color: "red", marginLeft: "10px" }}>
          ( * ) 표시가 있는 항목은 반드시 입력해야 합니다. 관리자권한을 이용해서
          이름,휴대폰 번호,이메일등을 중복확인없이 변경할 수 있습니다.
        </span>
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1.3fr 3fr 3fr" },
          gap: 1,
          // height: "520px",
          background: "#fafbfc",
        }}
        className="form1"
      >
        <Box>
          {previewImage ? (
            <img
              src={previewImage}
              alt="uploaded"
              width="116px "
              height="116px"
              style={{
                marginLeft: "50px",
                marginTop: "75px",
                borderRadius: "50%",
              }}
            />
          ) : (
            <label htmlFor="imageupload">
              <Box
                position="relative"
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "45px",
                    marginTop: "60px",
                  }}
                >
                  <img
                    style={{
                      fontSize: "110px",
                      color: "#fff",
                      width: "116px",
                      height: "116px",
                    }}
                    src="./images/profile@2x.png"
                    alt="avatar"
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#ae84ea",
                    color: "#fff",
                    width: "36px",
                    height: "36px",
                    bottom: "3px",
                    left: "125px",
                    borderRadius: "50%",
                  }}
                >
                  <PhotoCameraIcon sx={{ fontSize: "20px", color: "#fff" }} />
                </div>
              </Box>
              <input
                type="file"
                id="imageupload"
                style={{ display: "none" }}
                onChange={handleUploadImage}
              />
            </label>
          )}
          {/* <Button
            variant="contained"
            sx={{
              width: "100px",
              height: "40px",
              p: "9px 20px",
              borderRadius: "20px",
              fontSize: "12px",
              background: "#935be3",
              color: "white",
              ml: "42%",
              mt: 4,
            }}
          >
            유효회원
          </Button> */}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "30px",
          }}
        >
          <Typography
            sx={{ color: "#6229B3", fontSize: "12px", fontWeight: 500 }}
          >
            이름*
          </Typography>
          <FormInputText
            color="info"
            control={control}
            sx={{
              mb: "20px",
              ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                fontSize: "16px",
              },
            }}
            size="small"
            fullWidth
            variant="outlined"
            name="fullname"
            placeholder="회원 이름을 입력해주세요."
          />

          <Typography
            sx={{ color: "#6229B3", fontSize: "12px", fontWeight: 500 }}
          >
            회원번호
          </Typography>
          <FormInputText
            color="info"
            control={control}
            sx={{
              mb: "20px",
              ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                fontSize: "16px",
              },
            }}
            size="small"
            fullWidth
            type="number"
            variant="outlined"
            name="id"
            placeholder="9999"
          />
          <Typography
            sx={{ color: "#6229B3", fontSize: "12px", fontWeight: 500 }}
          >
            비밀번호{" "}
          </Typography>
          <FormInputText
            color="info"
            control={control}
            type="password"
            sx={{
              mb: "20px",
              ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                fontSize: "16px",
              },
            }}
            size="small"
            fullWidth
            variant="outlined"
            name="password"
            placeholder="영문 대소문자/숫자/특수 문자 중 2가지 이상 조합"
          />
          <Typography
            sx={{ color: "#6229B3", fontSize: "12px", fontWeight: 500 }}
          >
            생년월일
          </Typography>
          <FormInputDate
            name="dateOfBirth"
            color="info"
            control={control}
            placeholder="YYYY/MM/DD"
            sx={{
              mb: "20px",
              ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                fontSize: "16px",
              },
            }}
            size="small"
            variant="outlined"
            renderInput={(params) => (
              <TextField
                color="info"
                size="small"
                variant="outlined"
                {...params}
                sx={{
                  background: "#fff",
                  "& .css-i4bv87-MuiSvgIcon-root": {
                    fill: "#914beb !important",
                  },
                }}
              />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "30px ",
          }}
        >
          <Typography
            sx={{ color: "#6229B3", fontSize: "12px", fontWeight: 500 }}
          >
            아이디*
          </Typography>
          <FormInputText
            color="info"
            control={control}
            sx={{
              mb: "20px",
              ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                fontSize: "16px",
              },
            }}
            size="small"
            fullWidth
            variant="outlined"
            name="username"
            placeholder="아이디를 입력해주세요."
          />
          <Typography
            sx={{ color: "#6229B3", fontSize: "12px", fontWeight: 500 }}
          >
            휴대폰 번호*
          </Typography>
          <FormInputText
            color="info"
            control={control}
            sx={{
              mb: "20px",
              ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                fontSize: "16px",
              },
            }}
            size="small"
            fullWidth
            variant="outlined"
            name="phoneNumber"
            placeholder="휴대폰 번호를 입력하세요."
          />
          <Typography
            sx={{ color: "#6229B3", fontSize: "12px", fontWeight: 500 }}
          >
            비밀번호 확인{" "}
          </Typography>
          <FormInputText
            color="info"
            control={control}
            sx={{
              mb: "20px",
              ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                fontSize: "16px",
              },
            }}
            size="small"
            fullWidth
            variant="outlined"
            name="verifyPassword"
            placeholder="비밀번호를 다시 한번 입력해주세요."
          />

          <Typography
            sx={{ color: "#6229B3", fontSize: "12px", fontWeight: 500 }}
          >
            이메일*
          </Typography>
          <FormInputText
            color="info"
            control={control}
            type="email"
            sx={{
              mb: "20px",
              ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                fontSize: "16px",
              },
            }}
            size="small"
            fullWidth
            variant="outlined"
            name="email"
            placeholder="이메일 주소를 입력해주세요."
          />
        </Box>

        <Box />
        <Box sx={{ ml: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                width: "22.5%",
                color: "#6229B3",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              성별
            </Typography>
            <FormInputRadio
              name="gender"
              control={control}
              options={gender}
              sx={{ ml: "24px" }}
              row
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                width: "22.5%",
                color: "#6229B3",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              SMS 수신 동의
            </Typography>
            <FormInputRadio
              name="smsYesNot"
              control={control}
              options={smsAgreement}
              sx={{ ml: "24px" }}
              row
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            rowGap: 1,
            pl: "30px",
            pr: "30px",
            pb: "30px",
          }}
        >
          <Typography
            sx={{ color: "#6229B3", fontSize: "12px", fontWeight: 500 }}
          >
            주소
          </Typography>
          {/* <FormInputText
            color="info"
            control={control}
            name="jibunAddress"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            onMouseOver={(e) => (e.target.style.cursor = "pointer")}
            placeholder="주소*"
            sx={{
              mb: "20px",
              ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                fontSize: "16px",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {!address && (
                    <p
                      style={{
                        color: "#A1A1A1",
                        margin: "0 14px 0 0",
                        fontSize: "10px",
                      }}
                    >
                      도로명, 지번, 건물명 검색
                    </p>
                  )}
                  <MySearchIcon onClick={handleClick} />
                </InputAdornment>
              ),
            }}
            size="small"
            fullWidth
            variant="outlined"
          /> */}
          <FormInputText
            control={control}
            onMouseOver={(e) => (e.target.style.cursor = "pointer")}
            color="info"
            sx={{ background: "#fff" }}
            name="jibunAddress"
            value={address}
            placeholder="주소*"
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <p
                    style={{
                      color: "#A1A1A1",
                      margin: "0 14px 0 0",
                      fontSize: "10px",
                    }}
                  >
                    도로명, 지번, 건물명 검색
                  </p>
                  <MySearchIcon onClick={handleClick} />
                </InputAdornment>
              ),
            }}
          />
          <FormInputText
            color="info"
            control={control}
            type="roadAddress"
            sx={{
              mb: "20px",
              ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                fontSize: "16px",
              },
            }}
            size="small"
            fullWidth
            variant="outlined"
            name="roadAddress"
            placeholder="나머지 주소 입력*"
          />
        </Box>
      </Box>

      <hr style={{ border: "1px solid #e1e1e1" }} />
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography
          className="title"
          sx={{ fontSize: "16px", fontWeight: 550 }}
        >
          추가 정보
        </Typography>
        <Box sx={{ display: "flex", columnGap: "30px", mt: 3 }}>
          <Box sx={{ width: "35%" }}>
            <Box
              className="form1"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Typography sx={{ width: "135px", mb: 1 }}>등록일</Typography>
              <FormInputDate
                name="regisDate"
                color="info"
                control={control}
                placeholder="YYYY/MM/DD"
                sx={{
                  mb: "20px",
                  ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                    fontSize: "16px",
                  },
                }}
                size="small"
                variant="outlined"
                renderInput={(params) => (
                  <TextField
                    color="info"
                    size="small"
                    variant="outlined"
                    {...params}
                    sx={{
                      background: "#fff",
                      "& .css-i4bv87-MuiSvgIcon-root": {
                        fill: "#914beb !important",
                      },
                    }}
                  />
                )}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Typography sx={{ width: "135px", mb: 1 }}>관리 지점</Typography>
              <FormInputText
                color="info"
                control={control}
                type="text"
                sx={{
                  mb: "20px",
                  ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                    fontSize: "16px",
                  },
                }}
                size="small"
                fullWidth
                variant="outlined"
                name="poinId"
                placeholder="센트리얼 필라테스 강남구청점"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Typography sx={{ width: "135px", mb: 1 }}>담당 강사</Typography>
              <FormInputDropdown
                name="trainerId"
                control={control}
                options={options}
                sx={{
                  ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                    fontSize: "16px",
                  },
                }}
              />
              {/* <FormControl color="info" fullWidth>

                <Select
                  color="info"
                  sx={{ height: "40px" }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  size="small"
                >
                  <MenuItem disabled>담당자를 선택해주세요.</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl> */}
            </Box>
          </Box>
          <Box sx={{ width: "60%" }}>
            <FormInputTextArea
              color="info"
              control={control}
              minRows={12}
              style={{
                width: "596px",
                maxHeight: "249px",
                borderRadius: "5px",
                borderColor: "#e1e1e1",
                padding: "8.5px 14px",
              }}
              sx={{
                mb: "20px",
                ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                  fontSize: "16px",
                },
              }}
              name="description"
              placeholder="센트리얼 필라테스 강남구청점"
            />
          </Box>
        </Box>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 3,
          mb: 3,
        }}
      >
        <Button
          sx={{
            borderRadius: "12px",
            pl: "35px",
            pr: "35px",
            mr: "6px",
            height: "36px",
            background: "#f7f7f7",
            color: "#9a9a9a",
            border: "none",
            "&:hover": { background: "#ddd", cursor: "default" },
          }}
        >
          취소
        </Button>
        <Button
          onClick={handleSubmit(submit)}
          sx={{
            borderRadius: "12px",
            pl: "50px",
            pr: "50px",
            height: "36px",
            background: "#faf7fe",
            "&:hover": {
              background: "#914beb",
              color: "#fff",
              cursor: "default",
            },
          }}
        >
          저장
        </Button>
      </Box>
    </div>
  );
};

export default UserCreate;
