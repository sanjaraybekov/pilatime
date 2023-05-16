import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import {Link} from "react-router-dom";
// import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
// import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
// import {DatePicker} from "@mui/x-date-pickers/DatePicker";
// import CalendarIcon from "../CalendarIcon";
import CustomCheckbox from "../CustomCheckbox";
// import {days} from "../data";
import CustomDatePicker from "../CustomDatePicker";

function createData(name, calories, fat, carbs, protein) {
  return {name, calories, fat, carbs, protein};
}

const rows1 = [
  createData(
    "문의구분항목1",
    "그룹레슨 수강권 구매 관련 문의 드립니다",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목2",
    "예약을 했는데 취소는 언제 까지 가능한가요?",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목3",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목4",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목5",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목6",
    "예약을 했는데 취소는 언제 까지 가능한가요?",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목7",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목8",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목9",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목10",
    "예약을 했는데 취소는 언제 까지 가능한가요?",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목11",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목12",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목13",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목14",
    "예약을 했는데 취소는 언제 까지 가능한가요?",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목15",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목16",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목17",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목18",
    "예약을 했는데 취소는 언제 까지 가능한가요?",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목19",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목20",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목21",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목22",
    "예약을 했는데 취소는 언제 까지 가능한가요?",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목23",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목24",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
  createData(
    "문의구분항목25",
    "개인레슨 강사 선생님 배정 문의.",
    "회원명",
    "2022.10.27",
    "답변 대기"
  ),
];

const InquiryTab1 = () => {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [active, setActive] = React.useState(null);

  const [selectedValue, setSelectedValue] = React.useState("20");
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(20);

  const handleChangePage = (event, value) => {
    setPage(value);
  };
  const handleChangePerPage = (event) => {
    setPerPage(event.target.value);
  };
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    setUsers(rows1);
  }, []);

  React.useEffect(() => {
    setPage(1);
  }, [perPage]);

  const handleSelectedValue = (e) => {
    setSelectedValue(e.target.attributes[4].nodeValue);
  };

  const handleChangeDate = (daysDecrease) => {
    const today = new Date();
    const date = new Date().setDate(new Date().getDate() + daysDecrease);
    setStartDate(today);
    setEndDate(date);
  };

  const handleClear = () => {
    setStartDate();
    setEndDate();
  };

  const handleChange = (e) => {
    const {name, checked} = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return {...user, isChecked: checked};
      });
      console.log("all", tempUser);
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? {...user, isChecked: checked} : user
      );
      console.log("single", tempUser);
      setUsers(tempUser);
    }
  };

  return (
    <div>
      <Box sx={{display: "flex", alignItems: "center"}}>
        <Typography className="title" sx={{width: "8%"}}>
          검색
        </Typography>

        <TextField
          color="info"
          sx={{width: "370px", height: "40px"}}
          size="small"
          placeholder="회원명, 아이디, 전화번호를 검색해 보세요."
          id="outlined-search"
          type="search"
        />
        <Button
          sx={{
            height: "36px",
            mb: "3px",
            ml: 1,
            background: "#707070",
            "&:hover": {backgroundColor: "#707070"},
          }}
          variant="contained"
        >
          검색
        </Button>
      </Box>
      <Box sx={{display: "flex", alignItems: "center", mt: "15px"}}>
        <Typography className="title" sx={{width: "8%"}}>
          날짜
        </Typography>
        <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
          <CustomDatePicker
            value={startDate}
            onChange={(n) => setStartDate(n)}
          />
          <Typography sx={{fontSize: "18px"}}>~</Typography>
          <CustomDatePicker value={endDate} onChange={(n) => setEndDate(n)} />
        </Box>
        <Box sx={{display: "flex", ml: 2, gap: 1}}>
          <Button
            className="inq-buttons"
            activeButton="1"
            sx={{
              background: active === "1" ? "#ae84ea" : "#f1f4f6",
              color: active === "1" ? "#fff" : "#707070",
              borderRadius: "12px",
              "&:hover": {
                background: active === "1" ? "#ae84ea" : "#f1f4f6",
              },
              height: "36px",
              minWidth: "46px",
            }}
            variant="contained"
            onClick={(e) => {
              handleChangeDate(0);
              setActive(e.target.attributes[3].nodeValue);
            }}
          >
            {" "}
            오늘{" "}
          </Button>
          <Button
            className="inq-buttons"
            activeButton="2"
            sx={{
              background: active === "2" ? "#ae84ea" : "#f1f4f6",
              color: active === "2" ? "#fff" : "#707070",
              borderRadius: "12px",
              "&:hover": {
                background: active === "2" ? "#ae84ea" : "#f1f4f6",
              },
              height: "36px",
              minWidth: "46px",
            }}
            variant="contained"
            onClick={(e) => {
              handleChangeDate(7);
              setActive(e.target.attributes[3].nodeValue);
            }}
          >
            {" "}
            일주{" "}
          </Button>
          <Button
            className="inq-buttons"
            activeButton="3"
            sx={{
              background: active === "3" ? "#ae84ea" : "#f1f4f6",
              color: active === "3" ? "#fff" : "#707070",
              borderRadius: "12px",
              "&:hover": {
                background: active === "3" ? "#ae84ea" : "#f1f4f6",
              },
              height: "36px",
              minWidth: "46px",
            }}
            variant="contained"
            onClick={(e) => {
              handleChangeDate(30);
              setActive(e.target.attributes[3].nodeValue);
            }}
          >
            {" "}
            한달{" "}
          </Button>
          <Button
            className="inq-buttons"
            activeButton="4"
            sx={{
              background: active === "4" ? "#ae84ea" : "#f1f4f6",
              color: active === "4" ? "#fff" : "#707070",
              borderRadius: "12px",
              "&:hover": {
                background: active === "4" ? "#ae84ea" : "#f1f4f6",
              },
              height: "36px",
              minWidth: "46px",
            }}
            variant="contained"
            onClick={(e) => {
              handleChangeDate(90);
              setActive(e.target.attributes[3].nodeValue);
            }}
          >
            {" "}
            3개월{" "}
          </Button>
          <Button
            className="inq-buttons"
            activeButton="5"
            sx={{
              background: active === "5" ? "#ae84ea" : "#f1f4f6",
              color: active === "5" ? "#fff" : "#707070",
              borderRadius: "12px",
              "&:hover": {
                background: active === "5" ? "#ae84ea" : "#f1f4f6",
              },
              height: "36px",
              minWidth: "46px",
            }}
            variant="contained"
            onClick={(e) => {
              handleClear();
              setActive(e.target.attributes[3].nodeValue);
            }}
          >
            {" "}
            전체{" "}
          </Button>
        </Box>
      </Box>
      <Box sx={{display: "flex", alignItems: "center", mt: "15px", gap: 1}}>
        <Typography className="title" sx={{width: "8%"}}>
          처리현황
        </Typography>
        <FormControlLabel control={<CustomCheckbox />} label="개인 레슨" />
        <FormControlLabel control={<CustomCheckbox />} label="그룹 레슨" />
        <FormControlLabel control={<CustomCheckbox />} label="온라인 레슨" />
        <FormControlLabel control={<CustomCheckbox />} label="고객 관리" />
        <FormControlLabel control={<CustomCheckbox />} label="매장 관리" />
      </Box>
      <Box sx={{display: "flex", alignItems: "center", mt: "15px", mb: 2}}>
        <Typography className="title" sx={{width: "8%"}}>
          문의 구분
        </Typography>
        <FormControl size="small" color="info" sx={{width: "25%"}}>
          <Select defaultValue="0" inputProps={{"aria-label": "Without label"}}>
            <MenuItem value="0">전체</MenuItem>
            <MenuItem value="1">전체1</MenuItem>
          </Select>
        </FormControl>
        <Button
          sx={{
            background: "#ae84ea",
            "&:hover": {backgroundColor: "#AE84EA"},
            height: "36px",
            ml: 2,
            borderRadius: "10px",
          }}
          variant="contained"
        >
          설정한 조건으로 검색
        </Button>
        <Link style={{marginLeft: "15px", color: "#707070"}} variant="text">
          검색조건 초기화
        </Link>
      </Box>

      <hr style={{border: "1px solid #e1e1e1"}} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "15px",
          mb: "10px",
        }}
      >
        <Typography>121 개 (1/6페이지)</Typography>
        <FormControl color="info">
          <Select onChange={handleChangePerPage} defaultValue="20" size="small">
            <MenuItem
              onClick={(e) => handleSelectedValue(e)}
              value="20"
              sx={{display: selectedValue === "20" ? "none" : "block"}}
            >
              20개씩 보기
            </MenuItem>
            {/* <MenuItem
              onClick={(e) => handleSelectedValue(e)}
              value="30"
              sx={{display: selectedValue === "30" ? "none" : "block"}}
            >
              30개씩 보기
            </MenuItem> */}
            <MenuItem
              onClick={(e) => handleSelectedValue(e)}
              value="50"
              sx={{display: selectedValue === "50" ? "none" : "block"}}
            >
              50개씩 보기
            </MenuItem>
            <MenuItem
              onClick={(e) => handleSelectedValue(e)}
              value="100"
              sx={{display: selectedValue === "100" ? "none" : "block"}}
            >
              100개씩 보기
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TableContainer
       className="table"
        sx={{mt: 1, border: "1px solid #ddd", borderRadius: "5px"}}
      >
        <Table size="small" aria-label="a dense table">
          <TableHead sx={{background: "#fafbfc"}}>
            <TableRow
              sx={{".css-3ac063-MuiTableCell-root": {padding: "1px 5px"}}}
            >
              <TableCell sx={{borderRight: "1px solid #ddd"}}>
                <CustomCheckbox
                  color="primary"
                  name="allSelect"
                  checked={!users.some((user) => user?.isChecked !== true)}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 500,
                  fontSize: "12px",
                  borderRight: "1px solid #ddd",
                }}
              >
                문의 구분
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 500,
                  fontSize: "12px",
                  borderRight: "1px solid #ddd",
                }}
              >
                문의 제목
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  fontWeight: 500,
                  fontSize: "12px",
                  borderRight: "1px solid #ddd",
                }}
              >
                작성자
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 500,
                  fontSize: "12px",
                  borderRight: "1px solid #ddd",
                }}
              >
                작성일
              </TableCell>
              <TableCell
                align="center"
                sx={{fontWeight: 500, fontSize: "12px"}}
              >
                처리현황
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users
              .filter(
                (_, id) => id >= (page - 1) * perPage && id <= page * perPage
              )
              .map((row, index) => (
                <TableRow
                  // component={Link}
                  // to={`/inquiryDetail`}
                  role="checkbox"
                  key={index}
                  sx={{
                    textDecoration: "none",
                    "&:last-child td, &:last-child th": {borderBottom: 0},
                  }}
                >
                  <TableCell
                    sx={{borderRight: "1px solid #ddd"}}
                    align="center"
                    padding="checkbox"
                  >
                    <CustomCheckbox
                      name={row.name}
                      checked={row?.isChecked || false}
                      onChange={handleChange}
                      color="primary"
                    />
                  </TableCell>

                  <TableCell
                    component={Link}
                    to={`/inquiryDetail`}
                    sx={{height: "40px", borderRight: "1px solid #ddd"}}
                    align="center"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    component={Link}
                    to={`/inquiryDetail`}
                    sx={{height: "40px", borderRight: "1px solid #ddd"}}
                    align="center"
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    component={Link}
                    to={`/inquiryDetail`}
                    sx={{height: "40px", borderRight: "1px solid #ddd"}}
                    align="center"
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    component={Link}
                    to={`/inquiryDetail`}
                    sx={{height: "40px", borderRight: "1px solid #ddd"}}
                    align="center"
                  >
                    {row.carbs}
                  </TableCell>
                  <TableCell
                    component={Link}
                    to={`/inquiryDetail`}
                    align="center"
                  >
                    {row.protein}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={1} sx={{mt: "20px", ml: "40%"}}>
        <Pagination
          color="primary"
          count={Math.ceil(rows1.length / perPage)}
          onChange={handleChangePage}
          page={page}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .css-1k2i9p6-MuiButtonBase-root-MuiPaginationItem-root": {
              background: "#E1E1E1",
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
    </div>
  );
};

export default InquiryTab1;
