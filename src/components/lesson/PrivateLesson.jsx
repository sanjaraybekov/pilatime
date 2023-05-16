import React from "react";
// import TimeSelector from "./TimeSelector";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { createEventId, INITIAL_EVENTS } from "./event-utils";
import "./style.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TimeSelector from "../storeTabs/TimeSelector";
import AnimationPage from "../../pages/AnimationPage";
import CustomCheckbox from "../CustomCheckbox";
import CustomDatePicker from "../CustomDatePicker";
import MySearchIcon from "../MySearchIcon";
import { useState } from "react";
import LessonCreater from "./LessonCreater";

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

function createData(checkbox, name, calories, fat, carbs) {
  return { checkbox, name, calories, fat, carbs };
}

const rows = [
  createData(
    <CustomCheckbox />,
    "홍길동",
    "01097791122",
    "2022.11.15(목) 오전 11:05",
    "예약"
  ),
  createData(
    <CustomCheckbox />,
    "홍길동",
    "01097791122",
    "2022.11.15(목) 오전 11:05",
    "예약"
  ),
  createData(
    <CustomCheckbox />,
    "홍길동",
    "01097791122",
    "2022.11.15(목) 오전 11:05",
    "예약"
  ),
  createData(
    <CustomCheckbox />,
    "홍길동",
    "01097791122",
    "2022.11.15(목) 오전 11:05",
    "예약"
  ),
  createData(
    <CustomCheckbox />,
    "홍길동",
    "01097791122",
    "2022.11.15(목) 오전 11:05",
    "예약"
  ),
  createData(
    <CustomCheckbox />,
    "홍길동",
    "01097791122",
    "2022.11.15(목) 오전 11:05",
    "예약"
  ),
  createData(
    <CustomCheckbox />,
    "홍길동",
    "01097791122",
    "2022.11.15(목) 오전 11:05",
    "예약"
  ),
];

const headerContent = (e) => {
  const day = e.text.slice(e.text.indexOf(" ") + 1, e.text.lastIndexOf("."));
  const week = e.text.slice(e.text.indexOf("(") + 1, e.text.indexOf(")"));
  return (
    <div className="custom-date">
      <h2>{week}</h2>
      <h1>{day}</h1>
    </div>
  );
};

const PrivateLesson = () => {
  const [calenderObj, setCalendarObj] = useState(null);
  const [clickInfo, setClickInfo] = useState(null);
  const [allEvents, setAllEvents] = useState(INITIAL_EVENTS);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const openMenu1 = Boolean(anchorEl1);
  const [active, setActive] = useState();
  const [opens, setOpens] = useState({
    open: false,
    open1: false,
    open2: false,
    open3: false,
    open4: false,
  });
  const [lessonData, setLessonData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    allDay: false,
    type: "private",
  });

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickMenu1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleCloseMenu1 = () => {
    setAnchorEl1(null);
    setAnchorEl(null);
  };

  const handleOpen = (e) => {
    setCalendarObj(e);
    setOpens({ ...opens, open: true });
  };
  const handleClose = () => {
    setOpens({ ...opens, open: false });
  };

  const handleOpen1 = (e) => {
    setClickInfo(e);
    setOpens({ ...opens, open1: true });
  };
  const handleClose1 = () => {
    setOpens({ ...opens, open1: false });
  };

  const handleDateSelect = () => {
    let calendarApi = calenderObj.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (lessonData.title) {
      calendarApi.addEvent({
        id: createEventId(),
        title: lessonData.title,
        start: calenderObj.startStr,
        end: calenderObj.endStr,
        allDay: calenderObj.allDay,
        backgroundColor: "#AE84EA",
      });
    }
  };

  const handleEventClick = () => {
    clickInfo.event.remove();
    setOpens({ ...opens, open1: false });
  };

  const handleEvents = (events) => {
    console.log(events);
  };
  const renderEventContent = (eventInfo) => {
    return (
      <Box
        sx={{ borderRadius: "10px", p: "10px" }}
        id="demo-positioned-button"
        aria-controls={openMenu ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <b>{eventInfo.timeText}</b>
        </Box>
        <br />
        <br />
        <i>{eventInfo.event.title}</i>
      </Box>
    );
  };

  return (
    <AnimationPage>
      <Box
        className="disable-fieldset"
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#e1e1e1",
          mb: 2,
          height: "60px",
          borderRadius: "10px",
          width: "1340px",
        }}
      >
        <Typography sx={{ ml: "40px", fontSize: "18px" }}>지점 선택</Typography>
        <FormControl
          color="info"
          size="small"
          sx={{ ml: "19px", width: "360px" }}
        >
          <Select
            defaultValue="0"
            variant="outlined"
            sx={{ background: "#fff" }}
          >
            <MenuItem disabled value="0">
              조회하실 지점을 선택해주세요.
            </MenuItem>
            <MenuItem value="1">Market.</MenuItem>
            <MenuItem value="2">Market1</MenuItem>
            <MenuItem value="3">Market2</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        component={Paper}
        elevation={2}
        style={{
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          borderRadius: "10px",
          padding: " 21px 40px",
          width: "1340px",
          boxShadow: "0px 0px 7px #0000000D",
        }}
      >
        <FormControl color="info" size="small" sx={{ width: "250px" }}>
          <InputLabel sx={{ fontSize: "14px", color: "#3a3a3a" }}>
            강의실을 선택해 주세요.
          </InputLabel>
          <Select
            variant="outlined"
            label="강의실을 선택해 주세요."
            sx={{ background: "#fff" }}
          >
            <MenuItem value="1">강사 1</MenuItem>
            <MenuItem value="2">강사 2</MenuItem>
            <MenuItem value="3">강사 3</MenuItem>
            <MenuItem value="4">강사 4</MenuItem>
            <MenuItem value="5">강사 5</MenuItem>
            <MenuItem value="6">강사 6</MenuItem>
            <MenuItem value="7">강사 7</MenuItem>
            <MenuItem value="8">강사 8</MenuItem>
          </Select>
        </FormControl>
        <Button
          size="large"
          sx={{
            ml: "70%",
            background: "#f1f4f6",
            color: "#707070",
            "&:hover": { background: "#f1f4f6" },
            borderRadius: "12px",
            pl: "15px",
            pr: "10px",
            width: "128px",
            height: "36px",
          }}
        >
          주간 일정 복사
          <ContentCopyOutlinedIcon
            sx={{ ml: "5px", width: "20px", height: "16px" }}
          />
        </Button>

        <Box
          sx={{
            zIndex: 2,
            mt: -4,
            display: "grid",
            gridTemplateColumns: "auto auto",
          }}
        >
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: `prev`,
              center: `title`,
              right: "next today",
            }}
            allDaySlot={false}
            initialView="timeGridWeek"
            editable={true}
            locale="ko"
            dayHeaderContent={(e) => headerContent(e)}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            nowIndicator={true}
            eventColor="#a1a1a1"
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={handleOpen}
            eventContent={renderEventContent} // custom render function
            eventClick={(e)=>setAnchorEl(e.currentTarget)}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
      eventAdd={function(){}}
      eventChange={function(){}}
      eventRemove={function(){}}
      */
          />
          <div className="custom-col"></div>
          <div className="custom-row"></div>
        </Box>
      </Box>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={openMenu}
        className="calendar-modal1"
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ ml: 2, mt: -1, borderRadius: "12px" }}
      >
        <Box sx={{ width: "240px", p: "16px", gap: "1" }}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", mb: "5px" }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                color: "#3a3a3a",
                letterSpacing: "-0.38px",
              }}
            >
              클래스 명
            </Typography>
            <MoreVertIcon
              id="demo-positioned-button1"
              aria-controls={openMenu1 ? "demo-positioned-menu1" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu1 ? "true" : undefined}
              onMouseOver={handleClickMenu1}
              sx={{
                color: "#c9adf1",
                "&:hover": {
                  bgcolor: "#ddd",
                  borderRadius: "50%",
                  cursor: "pointer",
                },
              }}
            />
          </Box>
          <Typography>오전 8:00</Typography>
          <hr style={{ border: "1px solid #e1e1e1" }} />
          <Typography sx={{ mb: "5px" }}>강사:</Typography>
          <Typography sx={{ mb: "5px" }}>수강인원:</Typography>
          <Typography>강의실:</Typography>
        </Box>
      </Menu>

      <Menu
        id="demo-positioned-menu1"
        aria-labelledby="demo-positioned-button1"
        anchorEl={anchorEl1}
        className="calendar-modal2"
        open={openMenu1}
        onClose={handleCloseMenu1}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ transform: "translateX(10px)", ml: 2, mt: -1, padding: "18px 0" }}
      >
        <MenuItem
          onClick={() => {
            handleOpen1();
            handleCloseMenu1();
          }}
        >
          참석 관리
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpens({ ...opens, open4: true });
            handleCloseMenu1();
          }}
        >
          수업 수정
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpens({ ...opens, open2: true });
            handleCloseMenu1();
          }}
        >
          수업 취소
        </MenuItem>
      </Menu>
      {/*first created modal*/}
      <LessonCreater
        type={"private"}
        opens={opens}
        setOpens={setOpens}
        active={active}
        setActive={setActive}
        handleDateSelect={handleDateSelect}
        lessonData={lessonData}
        setLessonData={setLessonData}
      />
      <Modal open={opens.open1} onClose={handleClose1}>
        <Box sx={{ ...style }}>
          <Box
            sx={{
              backgroundColor: "#111",
              display: "flex",
              justifyContent: "space-between",
              height: "52px",
              p: "15px 20px",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                backgroundColor: "#111",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              참석관리
            </Typography>
            <CloseIcon
              onClick={handleClose1}
              sx={{ color: "#fff", cursor: "pointer" }}
            />
          </Box>
          <Box sx={{ p: "30px 28px 50px 28px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              2022년 12월 20일 (금) 오후 7:00~ 오후 8:30
            </Typography>

            <Box sx={{ display: "flex", pt: "30px" }}>
              <Typography sx={{ mr: "28px", fontWeight: 500 }}>
                회원 검색
              </Typography>
              <TextField
                color="info"
                sx={{ width: "370px" }}
                required
                variant="outlined"
                size="small"
                placeholder="회원명, 아이디, 전화번호를 검색해보세요.."
              ></TextField>
              <Button
                sx={{
                  ml: "4px",
                  background: "#707070",
                  "&:hover": { backgroundColor: "#707070" },
                }}
                variant="contained"
              >
                검색
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: "16px" }}>
              <Typography sx={{ mr: "18px", fontWeight: 500 }}>
                수강권 선택
              </Typography>
              <FormControl color="info" size="small" sx={{ width: "370px" }}>
                <Select
                  defaultValue="0"
                  variant="outlined"
                  sx={{ background: "#fff" }}
                >
                  <MenuItem disabled value="0">
                    수강권을 선택해주세요.
                  </MenuItem>
                  <MenuItem selected value="1">
                    필라테스 그룹레슨 12개월 100회
                  </MenuItem>
                  <MenuItem selected value="2">
                    {" "}
                    필라테스 그룹레슨 6개월 50회
                  </MenuItem>
                  <MenuItem selected value="3">
                    필라테스 그룹레슨 12개월 100회
                  </MenuItem>
                </Select>
              </FormControl>

              {/* <TextField color="info"
                sx={{ width: "370px" }}
                required
                variant="outlined"
                size="small"
                placeholder="수강권을 선택해주세요."
              ></TextField> */}
            </Box>
            <hr style={{ border: "1px solid #e1e1e1" }} />

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                size="small"
                sx={{
                  fontSize: "13px",
                  height: "36px",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#707070" },
                  background: "#707070",
                  p: "5px 20px",
                  borderRadius: "10px",
                }}
              >
                초기화
              </Button>
              <Button
                size="small"
                sx={{
                  "&:hover": { backgroundColor: "#707070" },
                  p: "5px 20px",
                  fontSize: "13px",
                  height: "36px",
                  color: "#fff",
                  background: "#707070",
                  borderRadius: "10px",
                  ml: 1,
                }}
              >
                회원 추가
              </Button>
            </Box>
            <Typography sx={{ mt: "10px", fontWeight: 500 }}>
              참석 현황
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                background: "#F1F4F6",
                borderRadius: "4px",
                p: 1,
                mt: "12px",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  height: "36px",
                  width: "130px",
                  background: "#fff",
                  "&:hover": { backgroundColor: "#fff" },
                  borderRadius: "18px",
                  border: "1.5px solid #914beb",
                  color: "#914beb",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                예약 : 8명
              </Button>
              <Button
                variant="contained"
                sx={{
                  height: "36px",
                  width: "130px",
                  "&:hover": { backgroundColor: "#914BEB" },
                  borderRadius: "18px",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                출석: 0명{" "}
              </Button>
              <Button
                variant="contained"
                color="info"
                sx={{
                  height: "36px",
                  width: "130px",
                  "&:hover": { backgroundColor: "#9A9A9A" },
                  borderRadius: "18px",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                결석: 0명
              </Button>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", pt: "6px" }}>
              <TableContainer
                sx={{ height: '550px, width:"360px', borderRadius: "4px" }}
                checkboxSelection
              >
                <Table
                  aria-label="simple table"
                  sx={{
                    borderRadius: "5px",
                    border: "1px solid #ebebeb",

                    ".css-1krcoiz-MuiTableCell-root": { padding: "1px" },
                    ".css-am7boh-MuiTableCell-root": { padding: "1px" },
                    ".css-7tokan-MuiTableCell-root": { padding: "1px" },
                  }}
                >
                  <TableHead sx={{ background: "#FAFBFC" }}>
                    <TableRow sx={{ height: "40px" }}>
                      <TableCell
                        align="center"
                        sx={{ width: "10px", borderRight: "1px solid #ddd" }}
                      >
                        <CustomCheckbox />
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          borderRight: "1px solid #ddd",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                      >
                        회원명
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          borderRight: "1px solid #ddd",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                      >
                        전화번호
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          borderRight: "1px solid #ddd",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                      >
                        예약 일시
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 500, fontSize: "12px" }}
                        align="center"
                      >
                        상태
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": {
                            borderBottom: 0,
                          },
                        }}
                      >
                        <TableCell
                          align="center"
                          sx={{ borderRight: "1px solid #ddd" }}
                        >
                          {row.checkbox}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ borderRight: "1px solid #ddd" }}
                          component="th"
                          scope="row"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ borderRight: "1px solid #ddd" }}
                        >
                          {row.calories}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ borderRight: "1px solid #ddd" }}
                        >
                          {row.fat}
                        </TableCell>
                        <TableCell align="center">{row.carbs}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                mt: "20px",
              }}
            >
              <Button
                size="small"
                sx={{
                  width: "88px",
                  height: "36px",
                  color: "#fff",
                  font: "normal normal normal 13px/15px Pretendard",
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "#707070" },
                  background: "#707070",
                }}
              >
                내역 삭제
              </Button>
              <Button
                size="small"
                onClick={handleEventClick}
                sx={{
                  width: "88px",
                  height: "36px",
                  color: "#fff",
                  font: "normal normal normal 13px/15px Pretendard",
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "#9a9a9a" },
                  background: "#9a9a9a",
                }}
              >
                결석 처리
              </Button>
              <Button
                size="small"
                sx={{
                  backgroundColor: "#914BEB",
                  color: "#fff",
                  font: "normal normal normal 13px/15px Pretendard",
                  width: "88px",
                  height: "36px",
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "#914BEB" },
                }}
              >
                출석 처리
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      <Modal open={opens.open2}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "440px",
            height: "331px",
            bgcolor: "#fff",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box sx={{ p: "20px" }}>
            <CloseIcon
              sx={{ float: "right" }}
              onClick={() => {
                setOpens({ ...opens, open2: false });
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  mt: "80px",
                  ml: "117px",
                  fontWeight: 600,
                }}
              >
                수업을 취소하시겠습니까?
              </Typography>
              <Typography sx={{ mt: "23px", ml: "110px" }}>
                *수업 취소 전 반드시 회원 및 강사에게
              </Typography>
              <Typography sx={{ ml: "125px" }}>
                취소 사유를 알려주시기 바랍니다.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#c5c5c5",
                  "&:hover": { backgroundColor: "#c5c5c5" },
                  mt: "53px",
                  borderRadius: "10px",
                  ml: "100px",
                }}
              >
                돌아가기
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "10px", mt: "53px", ml: "10px" }}
                onClick={() => {
                  setOpens({ ...opens, open3: true });
                  setOpens({ ...opens, open2: false });
                }}
              >
                수업 취소하기
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      <Modal open={opens.open3}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "440px",
            height: "227px",
            bgcolor: "#fff",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "18px", mt: "80px", ml: "117px" }}>
              예약 취소를 완료하였습니다.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: "10px",
                mt: "52px",
                ml: "189px",
                pl: "20px",
                pr: "15px",
              }}
              onClick={() => {
                setOpens({ ...opens, open3: false });
              }}
            >
              확인
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={opens.open4}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "606px",
            height: "744px",
            bgcolor: "#fff",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#111",
              display: "flex",
              justifyContent: "space-between",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
              p: "10px 20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                color: "#fff",
              }}
            >
              수업 수정
            </Typography>
            <CloseIcon
              onClick={() => {
                setOpens({ ...opens, open4: false });
              }}
              sx={{ color: "#fff", cursor: "pointer" }}
            />
          </Box>
          <Box sx={{ p: "20px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    ml: "10px",
                    mr: "20px",
                    fontWeight: 500,
                    fontSize: "12px",
                  }}
                >
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
                <Typography
                  sx={{
                    ml: "40px",
                    mr: "20px",
                    fontWeight: 500,
                    fontSize: "12px",
                  }}
                >
                  일정 유형
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>개인 레슨</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: "25px" }}>
              <Typography
                sx={{
                  ml: "10px",
                  mr: "20px",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                클래스 명
              </Typography>
              <TextField
                color="info"
                // onChange={(e) =>
                //   setLessonData({ ...lessonData, title: e.target.value })
                // }
                sx={{ width: "470px", backgroundColor: "#F1F4F6" }}
                required
                variant="outlined"
                size="small"
                placeholder="홍길동 개인레슨."
              ></TextField>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: 2 }}>
              <Typography
                sx={{
                  ml: "10px",
                  mr: "37px",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                강의실
              </Typography>
              <FormControl color="info" size="small" sx={{ width: "470px" }}>
                <Select
                  defaultValue="0"
                  variant="outlined"
                  sx={{ background: "#fff" }}
                >
                  <MenuItem
                    sx={{ font: "14px", color: "#3a3a3a", fontWeight: 500 }}
                    disabled
                    value="0"
                  >
                    강의실 선택.
                  </MenuItem>
                  <MenuItem value="1">강의실</MenuItem>
                  <MenuItem value="2">강의실1</MenuItem>
                  <MenuItem value="3">강의실2</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <hr style={{ border: "1px solid #e1e1e1", marginTop: "20px" }} />

            <Box sx={{ display: "flex", alignItems: "center", pt: "5px" }}>
              <Typography
                sx={{
                  ml: "10px",
                  mr: "20px",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                수업 시간
              </Typography>
              <TimeSelector />
            </Box>

            <Typography
              sx={{
                fontSize: "11px",
                ml: "85px",
                mt: "18px",
                mb: "30px",
              }}
            >
              * 수업 종료 시간은 시작 시간 기준 50분 이후로 자동 설정 됩니다.
            </Typography>
            <hr style={{ border: "1px solid #e1e1e1" }} />
            <Box sx={{ display: "flex", alignItems: "center", mt: "20px" }}>
              <Typography
                sx={{
                  ml: "10px",
                  mr: "20px",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                담당 강사
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>정우성</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: "25px" }}>
              <Typography
                sx={{
                  ml: "10px",
                  mr: "20px",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                회원 선택
              </Typography>
              <TextField
                color="info"
                // onChange={(e) =>
                //   setLessonData({ ...lessonData, title: e.target.value })
                // }
                sx={{ width: "470px", backgroundColor: "#F1F4F6" }}
                required
                variant="outlined"
                size="small"
                placeholder="홍길동"
              ></TextField>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: "6px" }}>
              <Typography
                sx={{
                  ml: "10px",
                  mr: "9px",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                수강권 선택
              </Typography>
              <FormControl color="info" size="small" sx={{ width: "470px" }}>
                <Select
                  defaultValue="0"
                  variant="outlined"
                  sx={{ background: "#fff" }}
                >
                  <MenuItem
                    sx={{ font: "14px", color: "#3a3a3a", fontWeight: 500 }}
                    disabled
                    value="0"
                  >
                    수강권을 선택해주세요.
                  </MenuItem>
                  <MenuItem value="1">필라테스 개인레슨 12개월 100회</MenuItem>
                  <MenuItem value="2">필라테스 개인레슨 6개월 50회</MenuItem>
                  <MenuItem value="3">필라테스 개인레슨 6개월 50회</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: "8px" }}>
              <Typography
                sx={{
                  ml: "10px",
                  mr: "44px",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                메모
              </Typography>
              <TextareaAutosize
                style={{
                  width: "470px",
                  borderRadius: "5px",
                  border: "1px solid #e1e1e1",
                  padding: "15px",
                  height: "110px",
                }}
                aria-label="minimum height"
                minRows={6}
                placeholder="일정 메모를 입력하여 주세요."
              />
            </Box>

            <hr style={{ border: "1px solid #e1e1e1", marginTop: "25px" }} />
            <Box sx={{ ml: "230px", mt: "25px" }}>
              <Button
                size="large"
                sx={{
                  "&:hover": { backgroundColor: "#C5C5C5" },
                  background: "#c5c5c5",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              >
                취소
              </Button>
              <Button
                size="large"
                sx={{
                  "&:hover": { backgroundColor: "#914BEB" },
                  width: "65px",
                  ml: 2,
                  pl: "15px",
                  backgroundColor: "#914BEB",
                  color: "#fff",
                  pr: "15px",
                  borderRadius: "10px",
                }}
                onClick={() => {
                  handleDateSelect();
                  handleClose();
                }}
              >
                저장
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </AnimationPage>
  );
};

export default PrivateLesson;
