import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Modal,
  Pagination,
  Paper,
  RadioGroup,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextareaAutosize,
  TextField,
  Typography,
  Menu,
} from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import AnimationPage from "../../pages/AnimationPage";
import CustomCheckbox from "../CustomCheckbox";
import CustomDatePicker from "../CustomDatePicker";
import { getAge } from "../../utils/methods";
import { getUsersList } from "../../api/member-management";
import { useSelector } from "react-redux";

var qs = require("qs");
const initialQuery = {
  page: 1,
  size: 10,
};

const MemberManagment = () => {
  const user = useSelector((state) => state.user.user);
  const [query, setQuery] = useState(initialQuery);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startDate1, setStartDate1] = useState(null);
  const [endDate1, setEndDate1] = useState(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [selectedValue, setSelectedValue] = useState("20");
  const [anchorEl, setAnchorEl] = useState(null);
  const [users, setUsers] = useState();
  const [checkedMember, setCheckedMember] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [checkedAge, setCheckedAge] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleCheckedMember = (event, index) => {
    switch (index) {
      case 0:
        setCheckedMember([
          event.target.checked,
          checkedMember[1],
          checkedMember[2],
          checkedMember[3],
        ]);
        break;
      case 1:
        setCheckedMember([
          checkedMember[0],
          event.target.checked,
          checkedMember[2],
          checkedMember[3],
        ]);
        break;
      case 2:
        setCheckedMember([
          checkedMember[0],
          checkedMember[1],
          event.target.checked,
          checkedMember[3],
        ]);
        break;
      case 3:
        setCheckedMember([
          checkedMember[0],
          checkedMember[1],
          checkedMember[2],
          event.target.checked,
        ]);
        break;
      default:
        return "";
    }
  };

  const handleCheckedAge = (event, index) => {
    switch (index) {
      case 0:
        setCheckedAge([
          event.target.checked,
          checkedAge[1],
          checkedAge[2],
          checkedAge[3],
          checkedAge[4],
        ]);
        break;
      case 1:
        setCheckedAge([
          checkedAge[0],
          event.target.checked,
          checkedAge[2],
          checkedAge[3],
          checkedAge[4],
        ]);
        break;
      case 2:
        setCheckedAge([
          checkedAge[0],
          checkedAge[1],
          event.target.checked,
          checkedAge[3],
          checkedAge[4],
        ]);
        break;
      case 3:
        setCheckedAge([
          checkedAge[0],
          checkedAge[1],
          checkedAge[2],
          event.target.checked,
          checkedAge[4],
        ]);
        break;
      case 4:
        setCheckedAge([
          checkedAge[0],
          checkedAge[1],
          checkedAge[2],
          checkedAge[3],
          event.target.checked,
        ]);
        break;
      default:
        return "";
    }
  };

  const handleCheckedBulk = (event, type) => {
    return type
      ? setCheckedMember([
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
        ])
      : setCheckedAge([
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
        ]);
  };

  const openMenu = Boolean(anchorEl);
  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectedValue = (e) => {
    setSelectedValue(e.target.attributes[4].nodeValue);
  };

  const handleChangeDate = (daysDecrease) => {
    const today = new Date();
    const date = new Date().setDate(new Date().getDate() + daysDecrease);
    setStartDate(today);
    setEndDate(date);
  };

  const handleChangeMonth = () => {
    const today = new Date();
    var lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    // const date = new Date().setMonth(new Date().getMonth())
    setStartDate(today);
    setEndDate(lastDay);
  };

  const handleNextMonth = () => {
    const today = new Date();
    const startMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const endMonth = new Date(
      startMonth.getFullYear(),
      startMonth.getMonth() + 1,
      0
    );
    setStartDate(startMonth);
    setEndDate(endMonth);
  };

  const handleChangePage = (event, value) => {
    setQuery({ ...query, page: value });
  };
  const handleChangePerPage = (event) => {
    setQuery({ ...query, size: event.target.value });
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    var tempUser = {};
    if (name === "allSelect") {
      tempUser = users.content.map((user) => {
        return { ...user, isChecked: checked };
      });
    } else {
      tempUser = users.content.map((user) =>
        user.username + user.id === name
          ? { ...user, isChecked: checked }
          : user
      );
    }
    setUsers({ ...users, content: tempUser });
  };
  async function userList(token, query) {
    return await getUsersList(token, query).then((data) => {
      if (!data.empty) {
        setUsers(data);
      }
    });
  }
  useEffect(() => {
    const queryString = qs.stringify(query);
    if (user && user.userRole === "ROLE_SUPERADMIN") {
      userList(user.token, queryString);
    }
  }, [user, query]);

  return (
    users &&
    !users.empty && (
      <AnimationPage>
        <div>
          <Box
            className="disable-fieldset"
            sx={{
              width: "1340px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#e1e1e1",
              height: "60px",
              borderRadius: "10px",
              mb: "10px",
              pl: "40px",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>지점 선택</Typography>
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
            elavation={2}
            sx={{
              background: "#fff",
              borderRadius: "10px",
              padding: "40px",
              width: "1340px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography className="title" sx={{ width: "81px" }}>
                  검색
                </Typography>

                <Menu
                  sx={{ borderRadius: "4px" }}
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  PaperProps={{
                    sx: {
                      borderRadius: "4px",
                      width: "370px",
                      height: "auto",
                      boxShadow: "0 0 20px #33333326",
                    },
                  }}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                    sx: { color: "#707070" },
                  }}
                >
                  <MenuItem
                    sx={{
                      "&:hover": {
                        background: "transparent",
                      },
                    }}
                    onClick={handleClose}
                  >
                    홍길동
                  </MenuItem>
                </Menu>
                <TextField
                  onMouseOver={handleHover}
                  color="info"
                  sx={{ width: "370px", borderRadius: "4px" }}
                  size="small"
                  placeholder="회원명, 아이디, 전화번호를 검색해 보세요."
                  id="outlined-search"
                  type="search"
                />
                <Button
                  sx={{
                    ml: "4px",
                    background: "#707070",
                    color: "white",
                    borderRadius: "4px",
                    width: "62px",
                    height: "35px",
                  }}
                  variant="contained"
                >
                  검색
                </Button>
              </Box>
              <Link to="/userCreate" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    fontSize: "13px",
                    width: "96px",
                    height: "36px",
                    borderRadius: "12px",
                    pl: "21px",
                    pr: "21px",
                    "&:hover": { background: "#914beb", color: "#fff" },
                  }}
                  variant="outlined"
                >
                  회원 등록
                </Button>
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: "27px" }}>
              <Typography className="title" sx={{ width: "81px" }}>
                회원 구분
              </Typography>
              <FormControl>
                <RadioGroup row>
                  <FormControlLabel
                    control={
                      <CustomCheckbox
                        checked={checkedMember.every((e) => e === true)}
                        onChange={(e) => handleCheckedBulk(e, true)}
                      />
                    }
                    label="전체"
                  />
                  <Box sx={{ background: "#fafbfc", borderRadius: "4px" }}>
                    <FormControlLabel
                      control={
                        <CustomCheckbox
                          checked={!!checkedMember[0]}
                          onChange={(e) => handleCheckedMember(e, 0)}
                        />
                      }
                      label="유효 회원"
                    />
                    <FormControlLabel
                      control={
                        <CustomCheckbox
                          checked={!!checkedMember[1]}
                          onChange={(e) => handleCheckedMember(e, 1)}
                        />
                      }
                      label="중지 회원"
                    />
                    <FormControlLabel
                      control={
                        <CustomCheckbox
                          checked={!!checkedMember[2]}
                          onChange={(e) => handleCheckedMember(e, 2)}
                        />
                      }
                      label="만료 회원"
                    />
                    <FormControlLabel
                      control={
                        <CustomCheckbox
                          checked={!!checkedMember[3]}
                          onChange={(e) => handleCheckedMember(e, 3)}
                        />
                      }
                      label="탈퇴 회원"
                    />
                  </Box>
                  <div
                    style={{
                      width: "2px",
                      height: "20px",
                      background: "#ddd",
                      marginTop: "10px",
                      marginRight: "20px",
                      marginLeft: "20px",
                    }}
                  ></div>
                  <FormControlLabel
                    control={<CustomCheckbox />}
                    label="미수금 회원"
                    sx={{ color: "#c5c5c5" }}
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: "27px" }}>
              <Typography className="title" sx={{ width: "81px" }}>
                클래스 유형
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
                  <div
                    style={{
                      width: "2px",
                      height: "20px",
                      background: "#ddd",
                      marginTop: "10px",
                    }}
                  ></div>
                </RadioGroup>
              </FormControl>
              <Typography sx={{ ml: "20px" }}>수강권 상세</Typography>
              <FormControl
                color="info"
                size="small"
                sx={{
                  width: "320px",
                  ml: "18px",
                }}
              >
                <Select
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  size="small"
                  defaultValue={0}
                >
                  <MenuItem value={0}>전체</MenuItem>
                  <MenuItem value={2}>수강권명1</MenuItem>
                  <MenuItem value={3}>수강권명2</MenuItem>
                  <MenuItem value={4}>수강권명3</MenuItem>
                  <MenuItem value={5}>수강권명4</MenuItem>
                </Select>
              </FormControl>
              <Typography sx={{ ml: "20px" }}>담당 강사</Typography>
              <FormControl
                color="info"
                size="small"
                sx={{ width: "320px", ml: "18px" }}
              >
                <Select
                  size="small"
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  defaultValue={0}
                >
                  <MenuItem value={0}>전체</MenuItem>
                  <MenuItem value={1}>담당 강사1</MenuItem>
                  <MenuItem value={2}>담당 강사2</MenuItem>
                  <MenuItem value={3}>담당 강사3</MenuItem>
                  <MenuItem value={4}>담당 강사4</MenuItem>
                  <MenuItem value={5}>담당 강사5</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: "1rem" }}>
              <Typography className="title" sx={{ width: "81px" }}>
                성별
              </Typography>
              <FormControl>
                <RadioGroup row>
                  <FormControlLabel control={<CustomCheckbox />} label="남성" />
                  <FormControlLabel control={<CustomCheckbox />} label="여성" />

                  <div
                    style={{
                      width: "2px",
                      height: "20px",
                      background: "#ddd",
                      marginTop: "10px",
                    }}
                  ></div>

                  <Typography sx={{ ml: "20px", mt: "9px", mr: 4 }}>
                    연령대
                  </Typography>
                  <FormControlLabel
                    control={
                      <CustomCheckbox
                        checked={checkedAge.every((e) => e === true)}
                        onChange={(e) => handleCheckedBulk(e, false)}
                      />
                    }
                    label="전체"
                  />
                  <Box
                    sx={{
                      background: "#fafbfc",
                      paddingLeft: "20px",
                      borderRadius: "4px",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <CustomCheckbox
                          checked={!!checkedAge[0]}
                          onChange={(e) => handleCheckedAge(e, 0)}
                        />
                      }
                      label="20대 이하"
                    />
                    <FormControlLabel
                      control={
                        <CustomCheckbox
                          checked={!!checkedAge[1]}
                          onChange={(e) => handleCheckedAge(e, 1)}
                        />
                      }
                      label="30대"
                    />
                    <FormControlLabel
                      control={
                        <CustomCheckbox
                          checked={!!checkedAge[2]}
                          onChange={(e) => handleCheckedAge(e, 2)}
                        />
                      }
                      label="40대"
                    />
                    <FormControlLabel
                      control={
                        <CustomCheckbox
                          checked={!!checkedAge[3]}
                          onChange={(e) => handleCheckedAge(e, 3)}
                        />
                      }
                      label="50대"
                    />
                    <FormControlLabel
                      control={
                        <CustomCheckbox
                          checked={!!checkedAge[4]}
                          onChange={(e) => handleCheckedAge(e, 4)}
                        />
                      }
                      label="60대 이상"
                    />
                  </Box>
                  <div
                    style={{
                      width: "2px",
                      height: "20px",
                      background: "#ddd",
                      marginTop: "10px",
                      marginLeft: "20px",
                    }}
                  ></div>
                  <Typography sx={{ ml: "20px", mt: "10px", mr: 4 }}>
                    SMS수신
                  </Typography>
                  <FormControlLabel control={<CustomCheckbox />} label="동의" />
                  <FormControlLabel
                    control={<CustomCheckbox />}
                    label="미동의"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <hr
              style={{
                marginTop: "31px",
                marginBottom: "11px",
                border: "1px solid #e1e1e1",
              }}
            />
            <Typography sx={{ width: "81px" }}>추가옵션</Typography>
            <Box sx={{ ml: "81px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                }}
              >
                <Typography sx={{ width: "90px" }}>잔여 횟수</Typography>
                <FormControl>
                  <RadioGroup row>
                    <FormControlLabel
                      control={<CustomCheckbox />}
                      label="3회 이하"
                    />
                    <FormControlLabel
                      control={<CustomCheckbox />}
                      label="5회 이하"
                    />
                    <FormControlLabel
                      control={<CustomCheckbox />}
                      label="10회 이하"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  marginTop: "20px",
                }}
              >
                <Typography sx={{ width: "90px" }}>만료일</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "20px",
                  }}
                >
                  <CustomDatePicker
                    value={startDate}
                    onChange={(n) => setStartDate(n)}
                  />
                  <p style={{ fontSize: "12px" }}> - </p>
                  <CustomDatePicker
                    value={endDate}
                    onChange={(n) => setEndDate(n)}
                  />
                  <div style={{ display: "flex", columnGap: "10px" }}>
                    <Button
                      className="inq-buttons"
                      activeButton="1"
                      onClick={(e) => {
                        handleChangeDate(5);
                        setActive(e.target.attributes[3].nodeValue);
                      }}
                      sx={{
                        width: "79px",
                        height: "36px",
                        fontSize: "12px",
                        background: active === "1" ? "#ae84ea" : "#f1f4f6",
                        color: active === "1" ? "#fff" : "#707070",
                        borderRadius: "12px",
                        "&:hover": {
                          background: active === "1" ? "#ae84ea" : "#f1f4f6",
                        },
                      }}
                    >
                      5일 이내
                    </Button>
                    <Button
                      className="inq-buttons"
                      activeButton="2"
                      onClick={(e) => {
                        handleChangeDate(15);
                        setActive(e.target.attributes[3].nodeValue);
                      }}
                      sx={{
                        width: "79px",
                        height: "36px",
                        fontSize: "12px",
                        background: active === "2" ? "#ae84ea" : "#f1f4f6",
                        color: active === "2" ? "#fff" : "#707070",
                        borderRadius: "12px",
                        "&:hover": {
                          background: active === "2" ? "#ae84ea" : "#f1f4f6",
                        },
                      }}
                    >
                      15일 이내
                    </Button>

                    <Button
                      className="inq-buttons"
                      activeButton="3"
                      onClick={(e) => {
                        handleChangeMonth();
                        setActive(e.target.attributes[3].nodeValue);
                      }}
                      sx={{
                        width: "85px",
                        height: "36px",
                        fontSize: "12px",
                        background: active === "3" ? "#ae84ea" : "#f1f4f6",
                        color: active === "3" ? "#fff" : "#707070",
                        borderRadius: "12px",
                        "&:hover": {
                          background: active === "3" ? "#ae84ea" : "#f1f4f6",
                        },
                      }}
                    >
                      이번달 이내
                    </Button>

                    <Button
                      className="inq-buttons"
                      activeButton="4"
                      onClick={(e) => {
                        handleNextMonth();
                        setActive(e.target.attributes[3].nodeValue);
                      }}
                      sx={{
                        width: "85px",
                        height: "36px",
                        fontSize: "12px",
                        background: active === "4" ? "#ae84ea" : "#f1f4f6",
                        color: active === "4" ? "#fff" : "#707070",
                        borderRadius: "12px",
                        "&:hover": {
                          background: active === "4" ? "#ae84ea" : "#f1f4f6",
                        },
                      }}
                    >
                      다음달 이내
                    </Button>
                  </div>
                </Box>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  marginTop: "20px",
                }}
              >
                <Typography sx={{ width: "90px" }}>락커 만료일</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "20px",
                  }}
                >
                  <CustomDatePicker
                    value={startDate1}
                    onChange={(n) => setStartDate1(n)}
                  />
                  <p style={{ fontSize: "12px" }}>-</p>
                  <CustomDatePicker
                    value={endDate1}
                    onChange={(n) => setEndDate1(n)}
                  />
                </Box>
              </div>
            </Box>
            <hr
              style={{
                marginTop: "16px",
                marginBottom: "16px",
                border: "1px solid #e1e1e1",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "center",
                mb: "24px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "#ae84ea",
                  borderRadius: "12px",
                  "&:hover": {
                    background: "#ae84ea",
                    color: "#fff",
                    cursor: "default",
                  },
                }}
              >
                설정한 조건으로 검색
              </Button>
              <Button
                variant="text"
                sx={{
                  color: "#707070",
                  textDecoration: "underline",
                  "&:hover": {
                    cursor: "default",
                    background: "none",
                  },
                }}
              >
                검색조건 초기화
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  className="inq-buttons"
                  onClick={() => setOpen(true)}
                  variant="contained"
                  sx={{
                    borderRadius: "12px",
                    background: "#707070",
                    mr: "4px",
                    "&:hover": {
                      background: "#707070",
                    },
                  }}
                >
                  SMS
                </Button>
                <Button
                  className="inq-buttons"
                  variant="contained"
                  sx={{
                    borderRadius: "12px",
                    background: "#707070",
                    "&:hover": {
                      background: "#707070",
                      cursor: "default",
                    },
                  }}
                >
                  엑셀 다운로드
                </Button>
                <CustomCheckbox />
                <Typography>
                  현재 해당되는 모든회원( {users.totalElements}명) 선택
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 3,
                  mb: 1,
                }}
              >
                <Typography sx={{ mr: "16px" }}>
                  전체: {users.totalElements} 명
                </Typography>
                <FormControl>
                  <Select
                    // value={defaultValue}
                    defaultValue="10"
                    color="info"
                    size="small"
                    onChange={handleChangePerPage}
                  >
                    <MenuItem
                      onClick={(e) => handleSelectedValue(e)}
                      value="10"
                      sx={{
                        display: selectedValue === "10" ? "none" : "block",
                      }}
                    >
                      10개씩 보기
                    </MenuItem>
                    {/* <MenuItem
                    onClick={(e) => handleSelectedValue(e)}
                    value="30"
                    sx={{ display: selectedValue === "30" ? "none" : "block" }}
                  >
                    30개씩 보기
                  </MenuItem> */}
                    <MenuItem
                      onClick={(e) => handleSelectedValue(e)}
                      value="50"
                      sx={{
                        display: selectedValue === "50" ? "none" : "block",
                      }}
                    >
                      50개씩 보기
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => handleSelectedValue(e)}
                      value="100"
                      sx={{
                        display: selectedValue === "100" ? "none" : "block",
                      }}
                    >
                      100개씩 보기
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            {/* modal starts */}
            <Modal
              open={open}
              // onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  width: "606px",
                  height: "580px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#fff",
                    background: "#202020",
                    height: "52px",
                    borderRadius: "10px 10px 0 0",
                    p: "0px 20px 0px 28px",
                  }}
                >
                  <Typography className="title" sx={{ fontSize: "16px" }}>
                    메시지 전송{" "}
                  </Typography>
                  <CloseIcon onClick={() => setOpen(false)} />
                </Box>
                <Box sx={{ p: "20px 28px" }}>
                  <Box
                    sx={{
                      transform: "translateX(-10px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      // width: "606px",
                    }}
                  >
                    <CustomCheckbox />
                    <Typography>SMS 수신 비동의 회원 제외</Typography>
                  </Box>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={17}
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      borderRadius: "4px",
                      padding: "15px",
                      border: "1px solid #e1e1e1",
                    }}
                    placeholder="내용을 입력해주세요"
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                    marginRight: "20px",
                    columnGap: "8px",
                  }}
                >
                  <Button
                    sx={{
                      borderRadius: "10px",
                      border: "none",
                      background: "#c5c5c5",
                      color: "#fff",
                      "&:hover": { border: "none", background: "#c5c5c5" },
                    }}
                    variant="outlined"
                    onClick={() => setOpen(false)}
                  >
                    취소
                  </Button>
                  <Button
                    sx={{ borderRadius: "10px" }}
                    variant="contained"
                    onClick={() => setOpen(false)}
                  >
                    보내기
                  </Button>
                </Box>
              </div>
            </Modal>
            {/* modal ends */}

            <Box sx={{ width: "100%" }}>
              <TableContainer
                className="table"
                sx={{
                  mt: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
              >
                <Table
                  sx={{
                    ".css-fqxdab-MuiTableCell-root": { padding: "1px" },
                    ".css-bcg4bp-MuiTableCell-root": { padding: "1px" },
                  }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead sx={{ background: "#fafbfc" }}>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          whiteSpace:"nowrap",
                          fontSize: "12px",
                          fontWeight: 500,
                          textAlign: "center",
                        }}
                        align="center"
                      >
                        <CustomCheckbox
                          color="primary"
                          name="allSelect"
                          checked={
                            !users.content?.some(
                              (user) => user.isChecked !== true
                            )
                          }
                          onChange={handleChange}
                        />
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          padding:"10px",
                          whiteSpace:"nowrap",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        이름
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          padding:"10px",
                          whiteSpace:"nowrap",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        성별
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          padding:"10px",
                          whiteSpace:"nowrap",
                          fontSize: "12px",
                          fontWeight: 500,
                          
                        }}
                        align="center"
                      >
                        나이
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          padding:"10px",
                          whiteSpace:"nowrap",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        전화번호
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          padding:"10px",
                          whiteSpace:"nowrap",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        사용 수강권
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          padding:"10px",
                          whiteSpace:"nowrap",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        담당강사
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          padding:"10px",
                          whiteSpace:"nowrap",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        잔여 수
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          padding:"10px",
                          whiteSpace:"nowrap",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        만료일
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          padding:"10px",
                          whiteSpace:"nowrap",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        누적 방문수
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          padding:"10px",
                          whiteSpace:"nowrap",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        첫 결제일
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          padding:"10px",
                          whiteSpace:"nowrap",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        최근 방문
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          padding:"10px",
                          whiteSpace:"nowrap",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        락커 만료
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: "12px",
                          fontWeight: 500,
whiteSpace:"nowrap",
                        }}
                      >
                        수신 동의
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  {/* <TableBody>
                  {users
                    .filter(
                      (_, id) =>
                        id >= (page - 1) * perPage && id <= page * perPage
                    )
                    .map((row, index) => (
                     
                     <></>
                    ))}
                </TableBody> */}
                  <TableBody>
                    {users && !users.empty
                      ? users.content.map((user, index) => {
                          const labelId = `enhanced-table-checkbox-${index}`;
                          return (
                            <TableRow
                              role="checkbox"
                              key={index}
                              sx={{
                                "&:hover": { color: "#5a5a5a !important" },
                                ".css-1d46hnn-MuiTableCell-root": {
                                  padding: "1px",
                                },
                                textDecoration: "none",
                                height: "40px",
                              }}
                            >
                              <TableCell
                                padding="checkbox"
                                sx={{
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                  fontSize: "12px",
                                  fontWeight: 500,
                                }}
                                align="center"
                              >
                                <CustomCheckbox
                                  name={user.username + user.id}
                                  checked={user?.isChecked || false}
                                  onChange={handleChange}
                                />
                              </TableCell>
                              <TableCell
                                component={Link}
                                id={labelId}
                                scope="row"
                                padding="none"
                                to={`/user-details/${user.id}`}
                                sx={{
                                  textDecoration: "none",
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                }}
                                align="center"
                              >
                                {user.username}
                              </TableCell>
                              <TableCell
                                component={Link}
                                id={labelId}
                                scope="row"
                                padding="none"
                                to={`/user-details/${user.id}`}
                                sx={{
                                  textDecoration: "none",
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                }}
                                align="center"
                              >
                                {user.gender}
                              </TableCell>
                              <TableCell
                                component={Link}
                                id={labelId}
                                scope="row"
                                padding="none"
                                to={`/user-details/${user.id}`}
                                sx={{
                                  textDecoration: "none",
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                }}
                                align="center"
                              >
                                {user.dateOfBirth
                                  ? getAge(user.dateOfBirth)
                                  : ""}
                              </TableCell>
                              <TableCell
                                component={Link}
                                id={labelId}
                                scope="row"
                                padding="none"
                                to={`/user-details/${user.id}`}
                                sx={{
                                  textDecoration: "none",
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                }}
                                align="center"
                              >
                                {user.phoneNumber}
                              </TableCell>
                              <TableCell
                                component={Link}
                                id={labelId}
                                scope="row"
                                padding="none"
                                to={`/user-details/${user.id}`}
                                sx={{
                                  textDecoration: "none",
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                }}
                                align="center"
                              >
                                {user.phoneNumber}
                              </TableCell>
                              <TableCell
                                component={Link}
                                id={labelId}
                                scope="row"
                                padding="none"
                                to={`/user-details/${user.id}`}
                                sx={{
                                  textDecoration: "none",
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                }}
                                align="center"
                              >
                                {user.phoneNumber}
                              </TableCell>
                              <TableCell
                                component={Link}
                                id={labelId}
                                scope="row"
                                padding="none"
                                to={`/user-details/${user.id}`}
                                sx={{
                                  textDecoration: "none",
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                }}
                                align="center"
                              >
                                {user.phoneNumber}
                              </TableCell>
                              <TableCell
                                component={Link}
                                id={labelId}
                                scope="row"
                                padding="none"
                                to={`/user-details/${user.id}`}
                                sx={{
                                  textDecoration: "none",
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                }}
                                align="center"
                              >
                                {user.phoneNumber}
                              </TableCell>
                              <TableCell
                                component={Link}
                                id={labelId}
                                scope="row"
                                padding="none"
                                to={`/user-details/${user.id}`}
                                sx={{
                                  textDecoration: "none",
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                }}
                                align="center"
                              >
                                {user.phoneNumber}
                              </TableCell>
                              <TableCell
                                component={Link}
                                id={labelId}
                                scope="row"
                                padding="none"
                                to={`/user-details/${user.id}`}
                                sx={{
                                  textDecoration: "none",
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                }}
                                align="center"
                              >
                                {user.phoneNumber}
                              </TableCell>
                              <TableCell
                                component={Link}
                                id={labelId}
                                scope="row"
                                padding="none"
                                to={`/user-details/${user.id}`}
                                sx={{
                                  textDecoration: "none",
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                }}
                                align="center"
                              >
                                {user.phoneNumber}
                              </TableCell>
                              <TableCell
                                component={Link}
                                id={labelId}
                                scope="row"
                                padding="none"
                                to={`/user-details/${user.id}`}
                                sx={{
                                  textDecoration: "none",
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                }}
                                align="center"
                              >
                                {user.phoneNumber}
                              </TableCell>
                              <TableCell
                                component={Link}
                                id={labelId}
                                scope="row"
                                padding="none"
                                to={`/user-details/${user.id}`}
                                sx={{
                                  textDecoration: "none",
                                  borderRight: "1px solid #ddd",
                                  padding:"10px",

                                }}
                                align="center"
                              >
                                {user.phoneNumber}
                              </TableCell>
                            </TableRow>
                          );
                        })
                      : null}
                  </TableBody>
                </Table>
              </TableContainer>
              <Stack spacing={1} sx={{ mt: "20px", ml: "40%" }}>
                <Pagination
                  count={Math.ceil(users.totalElements / query.size)}
                  onChange={handleChangePage}
                  page={query.page}
                  color="primary"
                  variant="outlined"
                  shape="rounded"
                  sx={{
                    "& .css-1k2i9p6-MuiButtonBase-root-MuiPaginationItem-root":
                      {
                        background: "#E1E1E1",
                        // color:'#fff',
                        border: "none",
                        height: "24px",
                        minWidth: "24px",
                      },
                    "& .css-1k2i9p6-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
                      {
                        background: "#ae84ea",
                        color: "#fff",
                      },
                    ".css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon": {
                      color: "#fff",
                    },
                  }}
                />
              </Stack>
            </Box>
          </Box>
        </div>
      </AnimationPage>
    )
  );
};

export default MemberManagment;
