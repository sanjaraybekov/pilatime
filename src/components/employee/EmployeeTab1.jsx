import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Link } from "react-router-dom";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarIcon from "../CalendarIcon";
import CustomCheckbox from "../CustomCheckbox";
import { days } from "../data";
import CustomDatePicker from "../CustomDatePicker";

// function createData(name, calories) {
//   return { name, calories };
// }

// const rows1 = [
//   createData("수강권 잔여 수", "9999"),
//   createData("수강 만료일", "9999.99.99"),
//   createData("락커 만료일", " 9999.99.9"),
// ];

// const rows2 = [
//   createData("누적 방문 수", "9999"),
//   createData("첫 결제일", "9999.99.99"),
//   createData("최근 방문일", " 9999.99.9"),
// ];

function EmployeeTab1() {
  const [previewImage, setPreviewImage] = React.useState("");
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [birthDate, setBirthDate] = React.useState(null);
  const [age, setAge] = React.useState(null);
  const date = new Date();
  const currentYear = date.getFullYear();

  const handleAge = React.useRef(()=>{});
  
  handleAge.current = (birthYear) => {
    const result = currentYear - birthYear;
    setAge(result);
  };

  const handleUploadImage = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setPreviewImage(url);
  };

  React.useEffect(() => {
    if (birthDate) {
      handleAge.current(birthDate.$y);
    }
  }, [birthDate, age]);

  return (
    <Box style={{ background: "white", borderRadius: "5px" }}>
      <Typography sx={{ fontSize: "16px", fontWeight: 500, mb: "12px" }}>
        기본 정보{" "}
        <span style={{ fontSize: "11px", color: "#EF0C23", mb: "11px" }}>
          ( * ) 표시가 있는 항목은 반드시 입력해야 합니다. 관리자권한을 이용해서
          이름,휴대폰 번호,이메일등을 중복확인없이 변경할 수 있습니다.
        </span>
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1.3fr 3fr 3fr" },
          rowGap: "30px",
          background: "#fafbfc",
          height: "540px",
        }}
      >
        <Box>
          {previewImage ? (
            <img
              src={previewImage}
              alt="uploaded"
              width="116px"
              height="116px"
              style={{ marginLeft: "40px", marginTop: "75px", borderRadius:'50%' }}
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
                    marginLeft: "40px",
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
                    alt="user default"
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
                    left: "125px",
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
        </Box>

        <Box
          className="form1"
          sx={{
            display: "grid",
            padding: "40px 10px 0px 20px",
          }}
        >
          <Typography sx={{ color: "#914BEB" }}>이름*</Typography>
          <TextField
            color="info"
            size="small"
            sx={{
              width: "370px",
              background: "#FFF",
              borderRadius: "4px",
            }}
            placeholder="이름을 입력해주세요."
          ></TextField>
          <Typography sx={{ color: "#914BEB", mt: "20px" }}>아이디*</Typography>
          <TextField
            color="info"
            sx={{
              background: "#fff",
              width: "370px",
              borderRadius: "4px",
              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
                fontSize: "15px",
                fontWeight: "bold",
              },
            }}
            size="small"
            placeholder="아이디를 입력하세요."
          ></TextField>
          <Typography sx={{ color: "#914BEB", mt: "20px" }}>
            비밀번호*
          </Typography>
          <TextField
            color="info"
            sx={{
              background: "#fff",
              width: "370px",
              borderRadius: "4px",
            }}
            size="small"
            placeholder="영문 대소문자/숫자/특수 문자 중 2가지 이상 조합"
          ></TextField>
          <Typography sx={{ color: "#914BEB", mt: "20px" }}>
            생년월일
          </Typography>

          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            dateFormats={{monthAndYear: 'YYYY. MM'}}
          >
            <DatePicker
              inputFormat="YYYY/MM/DD"
              value={birthDate}
              onChange={(newValue) => {
                setBirthDate(newValue);
              }}
              components={{
                OpenPickerIcon: CalendarIcon,
              }}
              componentsProps={{actionBar: {actions: ["today"]}}}
              dayOfWeekFormatter={(e) => (
                <span
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0px",
                    color: "#C6C6C6",
                  }}
                >
                  {days[e]}
                </span>
              )}
              showDaysOutsideCurrentMonth={true}
              renderInput={(params) =>
                age === null ? (
                  <TextField
                    color="info"
                    size="small"
                    {...params}
                    sx={{
                      background: "#fff",
                      "& .css-i4bv87-MuiSvgIcon-root": {
                        fill: "#914beb !important",
                      },
                    }}
                  />
                ) : (
                  <>
                    <TextField
                      color="info"
                      onFocus={(e) => {
                        setAge(null);
                        setBirthDate(null);
                      }}
                      id="ageInput"
                      size="small"
                      {...params}
                      sx={{
                        background: "#fff",
                        "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                          {
                            fontWeight: "bold",
                            fontSize: "15px",
                          },
                        "& .css-i4bv87-MuiSvgIcon-root": {
                          display: "none",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: "relative",
                        width: "40px",
                        top: "-30px",
                        right: "-310px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#914beb",
                      }}
                    >
                      {age} 세
                    </Box>
                  </>
                )
              }
            />
          </LocalizationProvider>
        </Box>

        <Box
          className="form1"
          sx={{
            display: "grid",
            padding: "40px 30px 0px 20px",
          }}
        >
          <Typography sx={{ color: "#914BEB" }}>소속 지점*</Typography>
          <TextField
            color="info"
            sx={{
              backgroundColor: "#F1F4F6",
              color: "#9A9A9A",
              width: "370px",
              borderRadius: "4px",
              height: "40px",
            }}
            required
            variant="outlined"
            size="small"
            fullWidth
            placeholder="센트리얼 필라테스 강남구청점"
          ></TextField>
          <Typography sx={{ color: "#914BEB", mt: "20px" }}>
            휴대폰 번호*
          </Typography>
          <TextField
            color="info"
            sx={{
              background: "#fff",
              borderRadius: "4px",
              width: "370px",
              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
                fontSize: "15px",
                fontWeight: "bold",
              },
            }}
            required
            variant="outlined"
            size="small"
            placeholder="휴대폰 번호를 입력하세요."
          ></TextField>
          <Typography sx={{ color: "#914BEB", mt: "20px" }}>
            비밀번호 확인{" "}
          </Typography>
          <TextField
            color="info"
            sx={{ color: "#9A9A9A", background: "#fff" }}
            required
            variant="outlined"
            size="small"
            placeholder="비밀번호를 다시 한번 입력해주세요."
          ></TextField>

          <Typography sx={{ color: "#914BEB", mt: "20px" }}>이메일*</Typography>
          <TextField
            color="info"
            sx={{
              background: "#fff",
              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
                fontSize: "15px",
                fontWeight: "bold",
              },
            }}
            type="email"
            variant="outlined"
            size="small"
            placeholder="이메일 주소를 입력해주세요."
          ></TextField>
        </Box>

        <Box>{/*pustoy*/}</Box>
        <Box sx={{ ml: "20px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ color: "#914BEB" }}>성별</Typography>
            <RadioGroup sx={{ ml: "84px" }} row>
              <FormControlLabel
                value="남자"
                control={<Radio />}
                label="남자"
                sx={{ mr: "52px" }}
              />
              <FormControlLabel value="여자" control={<Radio />} label="여자" />
            </RadioGroup>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            rowGap: 1,
            pr: "30px",
            pb: "30px",
            pl: "20px",
          }}
        >
          <Typography sx={{ color: "#914BEB" }}>강사 소개</Typography>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={8}
            style={{
              borderRadius: "4px",
              width: "370px",
              height: "110px",
              color: "#3A3A3A",
              padding: "12px 13px 10px 11px",
              fontSize: "13px",
              fontWeight: "500",
              border: "1px solid #e1e1e1",
            }}
            placeholder=" 강사소개가 노출되는 영역입니다. 강사소개가 노출되는 영역입니다. 강사소개가 노출되는 영역입니다. 강사소개가 노출되는 영역입니다. 강사소개가 노출되는 영역입니다. 강사소개가 노출되는 영역입니다. 강사소개가 노출되는 영역입니다."
          />
        </Box>
      </Box>

      <hr
        style={{ border: "1px solid #e1e1e1", margin: "30.5px 0px 20.5px 0px" }}
      />

      <Box>
        <Typography
          className="title"
          sx={{ fontSize: "16px", fontWeight: 500 }}
        >
          인사 정보
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: "27px" }}>
          <Typography className="title" sx={{ width: "81px" }}>
            담당 직무
          </Typography>
          <FormControl>
            <RadioGroup row>
              <FormControlLabel
                control={<CustomCheckbox />}
                label="개인 레슨"
              />
              <FormControlLabel
                control={<CustomCheckbox />}
                label="그룹 레슨"
              />
              <FormControlLabel
                control={<CustomCheckbox />}
                label="온라인 레슨"
              />
              <FormControlLabel
                control={<CustomCheckbox />}
                label="고객 관리"
              />
              <FormControlLabel
                control={<CustomCheckbox />}
                label="매장 관리"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "32px" }}>
          <Typography>재직 구분</Typography>
          <RadioGroup row>
            <FormControlLabel value="남자" control={<Radio />} label="재직중" />
            <FormControlLabel value="여자" control={<Radio />} label="퇴사" />
          </RadioGroup>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: "34px" }}>생년월일</Typography>

          <CustomDatePicker  value={startDate} onChange={n=> setStartDate(n)}/>
          <Typography sx={{ mr: "34px", ml: "85px" }}>생년월일</Typography>
            <CustomDatePicker value={endDate} onChange={n => setEndDate(n)}/>
        </Box>
      </Box>

      <hr
        style={{ border: "1px solid #e1e1e1", margin: "30.5px 0px 12.5px 0px" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          mb: "60px",
        }}
      >
        <Box>
          <Button
            sx={{
              borderRadius: "12px",
              width: "100px",
              height: "36px",
              pl: "35px",
              pr: "35px",
              mr: "6px",
              background: "#f7f7f7",
              color: "#9a9a9a",
              border: "none",
              "&:hover": { background: "#ddd" },
            }}
          >
            취소
          </Button>
          <Link to="/employeeSetting" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                width: "137px",
                height: "36px",
                borderRadius: "12px",
                pl: "50px",
                pr: "50px",
                background: "#faf7fe",
                "&:hover": { background: "#914beb", color: "#fff" },
              }}
            >
              저장
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default EmployeeTab1;
