import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import MySearchIcon from "../../components/MySearchIcon";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDaumPostcodePopup } from "react-daum-postcode";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormInputText } from "../../form-components/FormInputText";
import { FormInputDate } from "../../form-components/FormInputDate";
import { FormInputRadio } from "../../form-components/FormInputRadio";
import {
  deleteUserById,
  getUserById,
  getUserTicketsById,
  updateUserById,
} from "../../api/user";
import { gender, smsAgreement } from "../../constants/constants";
import { dateConverter } from "../../utils/methods";
import { FormInputTextArea } from "../../form-components/FormInputTextArea";
import { FormInputDropdown } from "../../form-components/FormInputDropdown";

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
function createData(name, calories, fat, sugar) {
  return { name, calories, fat, sugar };
}

const rows1 = [
  createData("수강권 잔여 수", "9999"),
  createData("수강 만료일", "9999.99.99"),
  createData("락커 만료일", " 9999.99.9"),
];

const rows2 = [
  createData("누적 방문 수", "9999"),
  createData("첫 결제일", "9999.99.99"),
  createData("최근 방문일", " 9999.99.9"),
];

const rows3 = [
  createData(
    "9999.99.99 (월) 오전 99:99",
    "9999.99.99 (월) 오전 99:99",
    "클래스명이 노출되는 영역입니다",
    "강사명강사명"
  ),
  createData(
    "2022.11.12 (수) 오후 06:00",
    "2022.11.11 (화) 오전 09:00",
    "그룹 레슨 A반",
    "정우성"
  ),
  createData(
    "2022.11.12 (수) 오후 06:00",
    "2022.11.11 (화) 오전 09:00",
    "개인 레슨 A반",
    "이정재"
  ),
];

const rows4 = [
  createData(
    "온라인 레슨",
    "수강권명수강권명수강권명수강권명수강권명수강권명",
    "9999.99.99",
    "9999"
  ),
  createData(
    "개인 레슨",
    "체형 관리 집중 개인 레슨 5개월 32회",
    "2011.11.31",
    "15"
  ),
  createData(
    "그룹 레슨",
    "필라테스 그룹 레슨 100회 12개월",
    "2023.02.11",
    "51"
  ),
];

function UserTab1(props) {
  const token = useSelector((state) => state.user.user.token);
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit, control, reset } = methods;
  const [user, setUser] = useState();
  const [previewImage, setPreviewImage] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [address, setAddress] = useState("");
  const [modals, setModals] = useState({
    open1: false,
    open2: false,
    open3: false,
  });

  console.log(user);

  useEffect(() => {
    if (props.id) {
      getUserById(props.id, token).then(({ data }) => {
        setUser(data);
        reset(data);
      });
      getUserTicketsById(props.id, token).then(({ data }) => {
        setUser({ ...user, tickets: data });
      });
    }
  }, [props.id]);

  const scriptUrl =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
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

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleUploadImage = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setPreviewImage(url);
  };

  const submit = async (values) => {
    if (values.dateOfBirth?.$d) {
      values.dateOfBirth = dateConverter(values.dateOfBirth.$d);
    }
    if (values.regisDate?.$d) {
      values.regisDate = dateConverter(values.regisDate.$d);
    }
    await updateUserById(props.id, values).then((res) => {
      console.log(res);
    });
  };

  function deleteUser() {
    deleteUserById(props.id, token)
      .then((res) => {
        setModals({ ...modals, open2: false, open3: true });
        navigate("/member");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div style={{ background: "white", borderRadius: "5px" }}>
      <Typography sx={{ fontSize: "16px", fontWeight: 500, mb: "12px" }}>
        기본 정보{" "}
        <span style={{ fontSize: "11px", color: "red", mb: "11px" }}>
          ( * ) 표시가 있는 항목은 반드시 입력해야 합니다. 관리자권한을 이용해서
          이름,휴대폰 번호,이메일등을 중복확인없이 변경할 수 있습니다.
        </span>
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1.3fr 3fr 3fr" },
          background: "#fafbfc",
        }}
        className="form1"
      >
        <Box>
          {previewImage ? (
            <img
              src={previewImage}
              alt="uploaded"
              width="116px"
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
                    alt="profile"
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
                    bottom: "5px",
                    left: "130px",
                    borderRadius: "50%",
                  }}
                >
                  <PhotoCameraIcon sx={{ fontSize: "21px", color: "#fff" }} />
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
          <Button
            variant="contained"
            sx={{
              width: "85px",
              height: "30px",
              borderRadius: "15px",
              fontSize: "12px",
              background: "#935be3",
              "&:hover": { backgroundColor: "935be3" },
              color: "white",
              ml: "65px",
              mt: "18px",
            }}
          >
            유효회원
          </Button>
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
            회원번호 {console.log(user)}
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
          <FormInputText
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

      <hr style={{ border: "1px solid #e1e1e1", marginTop: "30px" }} />
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography
          className="title"
          sx={{ fontSize: "16px", fontWeight: "bold" }}
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
      <Box sx={{ mt: 3, mb: 3 }}>
        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
          이용 정보
        </Typography>
        <Box sx={{ display: "flex", columnGap: 2 }}>
          <Box sx={{ width: "30%", mt: 2 }}>
            <Typography sx={{ mb: 1 }}>잔여 활동 정보</Typography>
            <TableContainer
              component={Paper}
              sx={{ border: "1px solid #ddd" }}
              elevation={0}
            >
              <Table size="small" sx={{ height: "132px" }}>
                <TableBody>
                  {rows1.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell
                        align="center"
                        component="th"
                        scope="column"
                        sx={{
                          background: "#FAFBFC",
                          // border: "1px solid #ebebeb",
                          borderRight: "none",
                          fontSize: "12px",
                          fontWeight: 550,
                          color: "#3a3a3a",
                        }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="start"
                        sx={{
                          borderBottom: "1px solid #ebebeb",
                          fontSize: "14px",
                        }}
                      >
                        {" "}
                        {row.calories}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <div
            style={{ width: "2px", height: "auto", backgroundColor: "#f7f7f7" }}
          ></div>
          <Box sx={{ mt: 2 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ mb: 1 }}>최근 수업 예약 내역</Typography>
              <Typography
                onClick={() => props.setSelectedTab("three")}
                sx={{
                  cursor: "default",
                  textDecoration: "underline",
                  color: "#a1a1a1",
                  fontSize: "12px",
                  fontWeight: 400,
                  "&:hover": {
                    color: "#914beb",
                  },
                }}
              >
                자세히 보기
              </Typography>
            </div>
            <TableContainer
              sx={{ border: "1px solid  #ebebeb", borderRadius: "4px" }}
            >
              <Table
                sx={{ width: "670px", height: "160px" }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead sx={{ background: "#FAFBFC" }}>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid  #ebebeb",
                        fontSize: "12px",
                        fontWeight: 550,
                      }}
                    >
                      수업 일시
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid  #ebebeb",
                        fontSize: "12px",
                        fontWeight: 550,
                      }}
                    >
                      예약 일시
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid  #ebebeb",
                        fontSize: "12px",
                        fontWeight: 550,
                      }}
                    >
                      클래스명
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontSize: "12px", fontWeight: 550 }}
                    >
                      담당 강사
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows3.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { borderBottom: 0 },
                      }}
                    >
                      <TableCell
                        align="center"
                        component="th"
                        scope="row"
                        sx={{ borderRight: "1px solid  #ebebeb" }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderRight: "1px solid  #ebebeb" }}
                      >
                        {row.calories}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderRight: "1px solid  #ebebeb" }}
                      >
                        {row.fat}
                      </TableCell>
                      <TableCell align="center">{row.sugar}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
      {/* ikkichi table  */}
      <Box sx={{ mt: 3, mb: 3 }}>
        <Box sx={{ display: "flex", columnGap: 2 }}>
          <Box sx={{ width: "30%" }}>
            <Typography sx={{ mb: 1 }}>센터 이용 정보</Typography>
            <TableContainer
              component={Paper}
              sx={{ border: "1px solid #ddd" }}
              elevation={0}
            >
              <Table size="small" sx={{ height: "132px" }}>
                <TableBody>
                  {rows2.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell
                        align="center"
                        component="th"
                        scope="column"
                        sx={{
                          background: "#FAFBFC",
                          border: "1px solid #ebebeb",
                          borderRight: "none",
                          fontSize: "12px",
                          fontWeight: 550,
                          color: "#3a3a3a",
                        }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="start"
                        sx={{
                          borderBottom: "1px solid #ebebeb",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        {" "}
                        {row.calories}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <div
            style={{
              width: "2px",
              height: "auto",
              backgroundColor: "#f7f7f7",
              marginTop: "-14%",
            }}
          ></div>
          <Box sx={{ mt: 2 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ mb: 1 }}>사용 중인 수강권</Typography>
              {/* <Link to="/user-details" target="_blank"></Link> */}
              <Typography
                sx={{
                  cursor: "default",
                  textDecoration: "underline",
                  color: "#a1a1a1",
                  fontSize: "12px",
                  fontWeight: 400,
                  "&:hover": {
                    color: "#914beb",
                  },
                }}
                onClick={() => props.setSelectedTab("three")}
              >
                자세히 보기
              </Typography>
            </div>
            <TableContainer
              sx={{ border: "1px solid  #ebebeb", borderRadius: "4px" }}
            >
              <Table
                sx={{ width: "670px", height: "160px" }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead sx={{ background: "#FAFBFC" }}>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{
                        width: "15%",
                        borderRight: "1px solid #ebebeb",
                        fontSize: "12px",
                        fontWeight: 550,
                      }}
                    >
                      구분
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        width: "42%",
                        borderRight: "1px solid #ebebeb",
                        fontSize: "12px",
                        fontWeight: 550,
                      }}
                    >
                      수강권 명
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ebebeb",
                        fontSize: "12px",
                        fontWeight: 550,
                      }}
                    >
                      만료일
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontSize: "12px", fontWeight: 550 }}
                    >
                      잔여횟수
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows4.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { borderBottom: 0 },
                      }}
                    >
                      <TableCell
                        align="center"
                        component="th"
                        scope="row"
                        sx={{
                          borderRight: "1px solid #ebebeb",
                          fontSize: "12px",
                        }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderRight: "1px solid #ebebeb" }}
                      >
                        {row.calories}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderRight: "1px solid #ebebeb" }}
                      >
                        {row.fat}
                      </TableCell>
                      <TableCell align="center">{row.sugar}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
          mb: 3,
        }}
      >
        <Button
          onClick={() => setModals({ ...modals, open2: true })}
          sx={{
            borderRadius: "12px",
            pl: "35px",
            pr: "35px",
            height: "36px",
            background: "#f7f7f7",
            color: "red",
            border: "none",
            "&:hover": {
              border: "none",
              background: "#ef0c23",
              color: "#fff",
              cursor: "default",
            },
          }}
          variant="outlined"
        >
          회원 삭제
        </Button>
        <Box>
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
      </Box>
      <Modal open={modals.open2}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "420px",
            height: "300px",
            bgcolor: "#fff",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box sx={{ p: "20px" }}>
            <CloseIcon
              sx={{ float: "right" }}
              onClick={() => {
                setModals({ ...modals, open2: false });
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  mt: "70px",
                  ml: "80px",
                }}
              >
                회원 정보를 모두 삭제하시겠습니까?
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  mt: "10px",
                  ml: "115px",
                  fontWeight: 600,
                }}
              >
                수업을 취소하시겠습니까?
              </Typography>

              <Button
                size="large"
                sx={{
                  background: "#935BE3",
                  color: "#fff",
                  borderRadius: "10px",
                  mt: "53px",
                  ml: "35%",
                  height: "40px",
                  width: "120px",
                  fontSize: "14px",
                  ":hover": { background: "#935BE3", color: "#fff" },
                }}
                onClick={deleteUser}
              >
                수업 취소하기
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      <Modal open={modals.open3}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "380px",
            height: "200px",
            bgcolor: "#fff",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "18px", mt: "50px", ml: "130px" }}>
              삭제 되었습니다.
            </Typography>
            <Button
              size="large"
              sx={{
                background: "#935BE3",
                color: "#fff",
                fontSize: "14px",
                borderRadius: "10px",
                mt: "40px",
                ml: "135px",
                pl: "40px",
                pr: "40px",
                ":hover": { background: "#935BE3", color: "#fff" },
              }}
              onClick={() => {
                setModals({ ...modals, open3: false });
              }}
            >
              확인
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={modals.open1}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "380px",
            height: "200px",
            bgcolor: "#fff",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "18px", mt: "50px", ml: "130px" }}>
              저장 되었습니다.
            </Typography>
            <Button
              size="large"
              sx={{
                background: "#935BE3",
                color: "#fff",
                fontSize: "14px",
                borderRadius: "10px",
                mt: "40px",
                ml: "135px",
                pl: "40px",
                pr: "40px",
                ":hover": { background: "#935BE3", color: "#fff" },
              }}
              onClick={() => {
                setModals({ ...modals, open1: false });
              }}
            >
              확인
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default UserTab1;
