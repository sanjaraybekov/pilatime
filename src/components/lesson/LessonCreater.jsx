import React from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import TimeSelector from "./TimeSelector";
import { FormInputDropdown } from "../../form-components/FormInputDropdown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MySearchIcon from "../MySearchIcon";
import { useForm } from "react-hook-form";
import { FormInputText } from "../../form-components/FormInputText";
import CustomDatePicker from "../CustomDatePicker";
import CalendarIcon from "../CalendarIcon";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { dateConverter } from "../../utils/methods";
import { FormInputTextArea } from "../../form-components/FormInputTextArea";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "606px",
  height: "890px",
  bgcolor: "#fff",
  borderRadius: "10px",
  border: "none",
};

const classRooms = [
  {
    label: "강의실 A",
    value: "강의실 A",
  },
  {
    label: "강의실 B",
    value: "강의실 B",
  },
];

export default function LessonCreater({
  type,
  opens,
  setOpens,
  active,
  setActive,
  handleDateSelect,
  setLessonData,
  lessonData,
}) {
  const methods = useForm();
  const { handleSubmit, control, setValue } = methods;

  const handleClose = () => {
    setOpens({ ...opens, open: false });
  };

  const submit = async (values) => {
    console.log({...lessonData, ...values});
    // await updateUserById(props.id, values).then((res) => {
    //   console.log(res);
    // });
  };

  return (
    <div>
      <Modal open={opens.open} onClose={handleClose}>
        <Box sx={{ ...style }}>
          <Box
            sx={{
              backgroundColor: "#111",
              height: "52px",
              display: "flex",
              justifyContent: "space-between",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
              p: "17px 20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                color: "#fff",
              }}
            >
              수업 등록
            </Typography>
            <CloseIcon
              onClick={handleClose}
              sx={{ color: "#fff", cursor: "pointer" }}
            />
          </Box>
          <Box sx={{ p: "20px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", pt: "10px" }}>
                <Typography sx={{ ml: "10px", mr: "20px" }}>
                  등록 지점
                </Typography>
                <Typography sx={{ mr: "14px", fontWeight: "bold" }}>
                  센트리얼 필라테스 강남구청점
                </Typography>
                <div
                  style={{
                    width: "1px",
                    height: "17px",
                    background: "#ddd",
                  }}
                ></div>
                <Typography sx={{ ml: "40px", mr: "20px" }}>
                  일정 유형
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>개인 레슨</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: "25px" }}>
              <Typography sx={{ ml: "10px", mr: "20px" }}>클래스 명</Typography>
              <FormInputText
                color="info"
                control={control}
                sx={{ width: "470px" }}
                name="title"
                placeholder="클래스 명을 입력하여 주세요."
              />
            </Box>
            <Box sx={{ display: "flex", pt: 2 }}>
              <Typography sx={{ ml: "10px", mr: "37px" }}>강의실</Typography>
              <FormControl color="info" sx={{ width: "470px" }} size="small">
                <FormInputDropdown
                  name="classRoom"
                  control={control}
                  options={classRooms}
                  sx={{ background: "#fff" }}
                  disabledItem={<MenuItem disabled>강의실 선택</MenuItem>}
                />
              </FormControl>
            </Box>
            <hr style={{ border: "1px solid #e1e1e1", marginTop: "20px" }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ ml: "10px", mr: "20px" }}>등록 기간</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "320px",
                  justifyContent: "space-between",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    inputFormat="YYYY/MM/DD"
                    value={lessonData.startDate}
                    onChange={(newValue) => {
                      setLessonData({
                        ...lessonData,
                        startDate: dateConverter(newValue.$d),
                      });
                    }}
                    components={{
                      OpenPickerIcon: CalendarIcon,
                    }}
                    renderInput={(params) => (
                      <TextField
                        color="info"
                        sx={{
                          "& .css-i4bv87-MuiSvgIcon-root": {
                            fill: "#914beb !important",
                          },
                          width: "150px",
                        }}
                        size="small"
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
                <p>&nbsp;-&nbsp;</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    inputFormat="YYYY/MM/DD"
                    value={lessonData.endDate}
                    onChange={(newValue) => {
                      setLessonData({
                        ...lessonData,
                        endDate: dateConverter(newValue.$d),
                      });
                    }}
                    // disabled={ticketData.fullTime || !ticketData.startDate}
                    minDate={new Date(lessonData.startDate)}
                    components={{
                      OpenPickerIcon: CalendarIcon,
                    }}
                    renderInput={(params) => (
                      <TextField
                        color="info"
                        sx={{
                          "& .css-i4bv87-MuiSvgIcon-root": {
                            fill: "#914beb !important",
                          },
                          width: "150px",
                        }}
                        size="small"
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={{ mt: "20px", display: "flex", alignItems: "center" }}>
              <Typography sx={{ ml: "10px", mr: "20px" }}>반복 요일</Typography>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Button
                  activeButton="1"
                  onClick={(e) => {
                    setActive(e.target.attributes[3].nodeValue);
                  }}
                  sx={{
                    minHeight: "36px",
                    minWidth: "51px",
                    fontSize: "12px",
                    background: active === "1" ? "#ae84ea" : "#c5c5c5",
                    color: active === "1" ? "#fff" : "#fff",
                    borderRadius: "12px",
                    "&:hover": {
                      background: active === "1" ? "#ae84ea" : "#c5c5c5",
                    },
                  }}
                >
                  월
                </Button>
                <Button
                  activeButton="2"
                  onClick={(e) => {
                    setActive(e.target.attributes[3].nodeValue);
                  }}
                  sx={{
                    minHeight: "36px",
                    minWidth: "51px",
                    fontSize: "12px",
                    background: active === "2" ? "#ae84ea" : "#c5c5c5",
                    color: active === "2" ? "#fff" : "#fff",
                    borderRadius: "12px",
                    "&:hover": {
                      background: active === "2" ? "#ae84ea" : "#c5c5c5",
                    },
                  }}
                >
                  화
                </Button>
                <Button
                  activeButton="3"
                  onClick={(e) => {
                    setActive(e.target.attributes[3].nodeValue);
                  }}
                  sx={{
                    minHeight: "36px",
                    minWidth: "51px",
                    fontSize: "12px",
                    background: active === "3" ? "#ae84ea" : "#c5c5c5",
                    color: active === "3" ? "#fff" : "#fff",
                    borderRadius: "12px",
                    "&:hover": {
                      background: active === "3" ? "#ae84ea" : "#c5c5c5",
                    },
                  }}
                >
                  수
                </Button>
                <Button
                  activeButton="4"
                  onClick={(e) => {
                    setActive(e.target.attributes[3].nodeValue);
                  }}
                  sx={{
                    minHeight: "36px",
                    minWidth: "51px",
                    fontSize: "12px",
                    background: active === "4" ? "#ae84ea" : "#c5c5c5",
                    color: active === "4" ? "#fff" : "#fff",
                    borderRadius: "12px",
                    "&:hover": {
                      background: active === "4" ? "#ae84ea" : "#c5c5c5",
                    },
                  }}
                >
                  목
                </Button>
                <Button
                  activeButton="5"
                  onClick={(e) => {
                    setActive(e.target.attributes[3].nodeValue);
                  }}
                  sx={{
                    minHeight: "36px",
                    minWidth: "51px",
                    fontSize: "12px",
                    background: active === "5" ? "#ae84ea" : "#c5c5c5",
                    color: active === "5" ? "#fff" : "#fff",
                    borderRadius: "12px",
                    "&:hover": {
                      background: active === "5" ? "#ae84ea" : "#c5c5c5",
                    },
                  }}
                >
                  금
                </Button>
                <Button
                  activeButton="6"
                  onClick={(e) => {
                    setActive(e.target.attributes[3].nodeValue);
                  }}
                  sx={{
                    minHeight: "36px",
                    minWidth: "51px",
                    fontSize: "12px",
                    background: active === "6" ? "#ae84ea" : "#c5c5c5",
                    color: active === "6" ? "#fff" : "#fff",
                    borderRadius: "12px",
                    "&:hover": {
                      background: active === "6" ? "#ae84ea" : "#c5c5c5",
                    },
                  }}
                >
                  토
                </Button>
                <Button
                  activeButton="7"
                  onClick={(e) => {
                    setActive(e.target.attributes[3].nodeValue);
                  }}
                  sx={{
                    minHeight: "36px",
                    minWidth: "51px",
                    fontSize: "12px",
                    background: active === "7" ? "#ae84ea" : "#c5c5c5",
                    color: active === "7" ? "#fff" : "#fff",
                    borderRadius: "12px",
                    "&:hover": {
                      background: active === "7" ? "#ae84ea" : "#c5c5c5",
                    },
                  }}
                >
                  일
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: "20px" }}>
              <Typography sx={{ ml: "10px", mr: "20px" }}>수업 시간</Typography>
              <TimeSelector name="reg" setValue={setValue} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: "10px" }}>
              <Typography sx={{ ml: "10px", mr: "80px" }}></Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: "#914beb" },
                  cursor: "pointer",
                }}
              >
                <AddCircleOutlineIcon />
                <Typography sx={{ ml: "5px" }}>수업 시간 추가</Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: "11px",
                display: "flex",
                justifyContent: "end",
              }}
            >
              * 수업 종료 시간은 시작 시간 기준 50분 이후로 자동 설정 됩니다.
            </Typography>
            <hr style={{ border: "1px solid #e1e1e1" }} />
            <Box sx={{ display: "flex", alignItems: "center", pt: "20px" }}>
              <Typography sx={{ ml: "10px", mr: "20px" }}>담당 강사</Typography>
              <Typography sx={{ fontWeight: "bold" }}>정우성</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: "20px" }}>
              <Typography sx={{ ml: "10px", mr: "20px" }}>회원 선택</Typography>
              <FormControl
                color="info"
                size="small"
                sx={{ width: "470px" }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder="회원명을 입력하여 주세요."
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <MySearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: "15px" }}>
              <Typography sx={{ ml: "6px", mr: "13px" }}>
                수강권 선택
              </Typography>
              <FormControl
                color="info"
                sx={{ width: "470px", backgroundColor: "#F1F4F6" }}
                size="small"
              >
                <FormInputDropdown
                  name="ticked"
                  control={control}
                  options={classRooms}
                  disabledItem={<MenuItem disabled>강의실 선택</MenuItem>}
                />
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "15px",
                mb: "20px",
              }}
            >
              <Typography sx={{ ml: "10px", mr: "48px" }}>메모</Typography>
              <FormInputTextArea
                control={control}
                minRows={8}
                style={{
                  width: "470px",
                  padding: "15px",
                  borderRadius: "4px",
                  height: "110px",
                }}
                name="description"
                placeholder="일정 메모를 입력하여 주세요. "
              />
            </Box>

            <hr style={{ border: "1px solid #e1e1e1" }} />
            <Box sx={{ ml: "230px", mt: "20px" }}>
              <Button
                onClick={() => {
                  handleDateSelect();
                  handleClose();
                }}
                sx={{
                  height: "36px",
                  background: "#c5c5c5",
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "#C5C5C5" },
                }}
                variant="contained"
              >
                취소
              </Button>
              <Button
                sx={{
                  height: "36px",
                  width: "65px",
                  ml: 2,
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "#914BEB" },
                }}
                variant="contained"
                onClick={handleSubmit(submit)}
              >
                저장
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
