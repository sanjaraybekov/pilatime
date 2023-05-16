import React from "react";
import { Box, Button, Divider, FormLabel, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useDaumPostcodePopup } from "react-daum-postcode";
import MySearchIcon from "../MySearchIcon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormInputText } from "../../form-components/FormInputText";
import { FormInputRadio } from "../../form-components/FormInputRadio";
import { createPoint } from "../../api/point";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../actions/user";
const options = [
  {
    label: "개인",
    value: "usha tayp1",
  },
  {
    label: "법인",
    value: "usha tayp2",
  },
];
function StoreTab1({ setSelectedTab }) {
  const user = useSelector((state) => state.user.user);
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const methods = useForm();
  const { handleSubmit, control, setError } = methods;
  const scriptUrl =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(scriptUrl);
  
  const submit = async (values) => {
    if (values.password !== values.verifyPassword) {
      return setError("verifyPassword", {
        type: "custom",
        message: "very error",
      });
    }

    const { verifyPassword, ...filteredValues } = values;
    await createPoint({ ...filteredValues, orgId: 1 }, user.token)
      .then(({ data }) => {
        setSelectedTab(2);
        dispatch(setUserData({ ...user, storeCreateUserId: data })); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  return (
    <Box>
      <Box style={{ display: "flex", columnGap: "50px" }}>
        <Box sx={{ width: "49%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "30px",
              mb: "22px",
            }}
          >
            <Typography
              sx={{ width: "30%", fontSize: "16px", fontWeight: 500 }}
            >
              기본 정보
            </Typography>
            <Typography sx={{ color: "red", fontSize: "11px" }}>
              ( * ) 표시가 있는 항목은 반드시 입력해야 합니다. 관리자권한을
              이용해서 이름,휴대폰 번호,이메일등을 중복확인없이 변경할 수
              있습니다.
            </Typography>
          </Box>
          <Box className="form1">
            <Typography className="header1" sx={{ mb: "10px" }}>
              사업자 명*
            </Typography>
            <FormInputText
              color="info"
              control={control}
              sx={{
                ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                  fontSize: "16px",
                },
                width: "370px",
              }}
              size="small"
              fullWidth
              variant="outlined"
              name="businessName"
              placeholder="지점명지점명지점명지점명지점명"
            />
            <Typography className="header1" sx={{ mb: "10px", mt: "20px" }}>
              사업자 번호*
            </Typography>
            <FormInputText
              color="info"
              control={control}
              sx={{
                ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                  fontSize: "16px",
                },
                width: "370px",
              }}
              size="small"
              fullWidth
              variant="outlined"
              name="businessNumber"
              placeholder="사업자 번호를 입력하세요."
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "40px",
              mt: "25px",
            }}
          >
            <FormLabel
              name="controlled-radio-buttons-group"
              sx={{ color: "#6229b3", fontWeight: 500 }}
            >
              사업자 구분*
            </FormLabel>
            <FormInputRadio
              name="businessClass"
              control={control}
              options={options}
              row
            />
          </Box>
          <Box className="form1">
            <Typography sx={{ color: "#6229b3", mb: "10px", mt: "20px" }}>
              업태/종목
            </Typography>
            <FormInputText
              color="info"
              control={control}
              sx={{
                ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                  fontSize: "16px",
                },
                width: "370px",
              }}
              size="small"
              fullWidth
              variant="outlined"
              name="businessType"
              placeholder="업태/종목을 입력하여 주세요."
            />

            <Typography sx={{ color: "#6229b3", mb: "10px", mt: "20px" }}>
              전화번호*
            </Typography>
            <FormInputText
              color="info"
              control={control}
              sx={{
                ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                  fontSize: "16px",
                },
                width: "370px",
              }}
              size="small"
              fullWidth
              variant="outlined"
              name="orgNumber"
              placeholder="전화번호를 입력하세요."
            />

            <Typography sx={{ color: "#6229b3", mb: "10px", mt: "20px" }}>
              대표 이메일*
            </Typography>
            <FormInputText
              color="info"
              control={control}
              sx={{
                ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                  fontSize: "16px",
                },
                width: "370px",
              }}
              size="small"
              fullWidth
              type="email"
              variant="outlined"
              name="email_1"
              placeholder="이메일 주소를 입력해주세요."
            />
            <Typography sx={{ color: "#6229b3", mb: "10px", mt: "20px" }}>
              주소*
            </Typography>
            <FormInputText
              color="info"
              control={control}
              name="jibunAddress"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              onMouseOver={(e) => (e.target.style.cursor = "pointer")}
              placeholder="주소*"
              sx={{
                width: "370px",
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
            />
            <FormInputText
              color="info"
              control={control}
              sx={{
                width: "370px",
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
            <Typography sx={{ color: "#6229b3", mb: "10px", mt: "20px" }}>
              홈페이지 주소
            </Typography>
            <FormInputText
              color="info"
              control={control}
              sx={{
                width: "370px",
                mb: "20px",
                ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                  fontSize: "16px",
                },
              }}
              size="small"
              fullWidth
              variant="outlined"
              name="webSite"
              placeholder="홈페이지 주소를 입력해주세요."
            />
          </Box>
        </Box>
        <div
          style={{
            width: "1px",
            height: "730px",
            background: "#ddd",
            marginTop: "30px",
          }}
        ></div>
        <Box className="form1">
          <Box sx={{ mt: "30px", mb: "30px" }}>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {" "}
              대표자 정보{" "}
            </Typography>
          </Box>
          <Typography sx={{ color: "#6229b3", mb: "10px" }}>이름*</Typography>
          <FormInputText
            color="info"
            control={control}
            sx={{
              ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                fontSize: "16px",
              },
            }}
            size="small"
            fullWidth
            variant="outlined"
            name="name"
            placeholder="이름을 입력하세요."
          />
          <Typography sx={{ color: "#6229b3", mb: 2, mt: 2 }}>
            아이디*
          </Typography>
          <FormInputText
            color="info"
            control={control}
            sx={{
              width: "370px",
              ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                fontSize: "16px",
              },
            }}
            size="small"
            fullWidth
            variant="outlined"
            name="username"
            placeholder="아이디를 입력하세요."
          />
          <Typography sx={{ color: "#6229b3", mb: "10px", mt: "20px" }}>
            비밀번호
          </Typography>
          <FormInputText
            color="info"
            control={control}
            type="password"
            sx={{
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
          <Typography sx={{ color: "#6229b3", mb: "10px", mt: "20px" }}>
            비밀번호 확인
          </Typography>
          <FormInputText
            color="info"
            control={control}
            sx={{
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

          <Typography sx={{ color: "#6229b3", mb: "10px", mt: "20px" }}>
            전화번호*
          </Typography>
          <FormInputText
            color="info"
            control={control}
            sx={{
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
          <Typography sx={{ color: "#6229b3", mb: "10px", mt: "20px" }}>
            이메일*
          </Typography>
          <FormInputText
            color="info"
            control={control}
            sx={{
              ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                fontSize: "16px",
              },
            }}
            size="small"
            fullWidth
            type="email"
            variant="outlined"
            name="email"
            placeholder="이메일 주소를 입력해주세요."
          />
        </Box>
      </Box>
      <Divider sx={{ mb: "12px", mt: "30px", color: "#e1e1e1" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          columnGap: "5px",
          pb: "60px",
        }}
      >
        <Button
          sx={{
            width: "100px",
            height: "36px",
            background: "#f7f7f7",
            color: "#9a9a9a",
            borderRadius: "15px",
            p: "12px 37px 11px 37px",
            "&:hover": { background: "#ddd" },
            fontSize: "13px",
          }}
        >
          취소
        </Button>
        <Button
          onClick={handleSubmit(submit)}
          type="submit"
          sx={{
            width: "137px",
            height: "36px",
            background: "#faf7fe",
            borderRadius: "15px",
            p: "12px 56px 11px 56px",
            "&:hover": { background: "#914BEB", color: "#fff" },
          }}
        >
          저장
        </Button>
      </Box>
    </Box>
  );
}

export default StoreTab1;
