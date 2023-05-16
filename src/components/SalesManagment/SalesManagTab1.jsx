import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
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
import CustomDatePicker from "../CustomDatePicker";
import MySearchIcon from "../MySearchIcon";

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  apple,
  banana,
  cherry,
  kiwi
) {
  return {name, calories, fat, carbs, protein, apple, banana, cherry, kiwi};
}

const rows1 = [
  createData("999,999,999 원", "999,999,999 원", "999,999,999 원"),
];

const rows2 = [
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
  createData(
    "센트리얼 필라테스 강남구청점",
    "2022.11.15(목) 오전 11:00",
    "홍길동",
    "필라테스 그룹 레슨 100회 12개월",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "카드",
    "정우성"
  ),
];

const SalesManagTab1 = () => {
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
    setUsers(rows2);
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

  return (
    <div
      style={{
        paddingTop: "20px",
      }}
    >
      <Box sx={{display: "flex", alignItems: "center"}}>
        <Box sx={{display: "flex", alignItems: "center"}}>
          <Typography sx={{mr: "51px"}}> 기간</Typography>
          <CustomDatePicker
            value={startDate}
            onChange={(n) => setStartDate(n)}
          />
          <Typography sx={{fontSize: "18px", ml: "10px", mr: "10px"}}>
            -
          </Typography>
          <CustomDatePicker value={endDate} onChange={(n) => setEndDate(n)} />
        </Box>
        <Box sx={{display: "flex", ml: 2, gap: 1}}>
          <Button
            activeButton="1"
            sx={{
              background: active === "1" ? "#ae84ea" : "#f1f4f6",
              color: active === "1" ? "#fff" : "#707070",
              borderRadius: "10px",
              "&:hover": {
                background: active === "1" ? "#ae84ea" : "#f1f4f6",
              },
              height: "36px",
              minWidth: "46px",
            }}
            variant="text"
            onClick={(e) => {
              handleChangeDate(0);
              setActive(e.target.attributes[3].nodeValue);
            }}
          >
            {" "}
            오늘{" "}
          </Button>
          <Button
            activeButton="2"
            sx={{
              background: active === "2" ? "#ae84ea" : "#f1f4f6",
              color: active === "2" ? "#fff" : "#707070",
              borderRadius: "10px",
              "&:hover": {
                background: active === "2" ? "#ae84ea" : "#f1f4f6",
              },
              height: "36px",
              minWidth: "46px",
            }}
            variant="text"
            onClick={(e) => {
              handleChangeDate(7);
              setActive(e.target.attributes[3].nodeValue);
            }}
          >
            {" "}
            일주{" "}
          </Button>
          <Button
            activeButton="3"
            sx={{
              background: active === "3" ? "#ae84ea" : "#f1f4f6",
              color: active === "3" ? "#fff" : "#707070",
              borderRadius: "10px",
              "&:hover": {
                background: active === "3" ? "#ae84ea" : "#f1f4f6",
              },
              height: "36px",
              minWidth: "46px",
            }}
            variant="text"
            onClick={(e) => {
              handleChangeDate(30);
              setActive(e.target.attributes[3].nodeValue);
            }}
          >
            {" "}
            한달{" "}
          </Button>
          <Button
            activeButton="4"
            sx={{
              background: active === "4" ? "#ae84ea" : "#f1f4f6",
              color: active === "4" ? "#fff" : "#707070",
              borderRadius: "10px",
              "&:hover": {
                background: active === "4" ? "#ae84ea" : "#f1f4f6",
              },
              height: "36px",
              minWidth: "46px",
            }}
            variant="text"
            onClick={(e) => {
              handleChangeDate(90);
              setActive(e.target.attributes[3].nodeValue);
            }}
          >
            {" "}
            3개월{" "}
          </Button>
          <Button
            activeButton="5"
            sx={{
              background: active === "5" ? "#ae84ea" : "#f1f4f6",
              color: active === "5" ? "#fff" : "#707070",
              borderRadius: "10px",
              "&:hover": {
                background: active === "5" ? "#ae84ea" : "#f1f4f6",
              },
              height: "36px",
              minWidth: "46px",
            }}
            variant="text"
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
      <Box sx={{display: "flex", alignItems: "center", mt: "20px"}}>
        <Typography sx={{mr: "25px"}}>결제 수단</Typography>
        <FormControl color="info" size="small" sx={{width: "330px"}}>
          <Select
            displayEmpty
            defaultValue={0}
            inputProps={{"aria-label": "Without label"}}
            sx={{background: "#fff"}}
          >
            <MenuItem value="0">결제</MenuItem>
            <MenuItem selected value="1">
              결제 수단1
            </MenuItem>
          </Select>
        </FormControl>
        <Typography sx={{ml: "30px", mr: "28px"}}>결제 상태</Typography>
        <FormControl color="info" size="small" sx={{width: "330px"}}>
          <Select 
            displayEmpty
            defaultValue={0}
            inputProps={{"aria-label": "Without label"}}
            sx={{background: "#fff"}}>
              <MenuItem  value="0">
              결제 
            </MenuItem>
            <MenuItem selected value="1">
              결제 상태1
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{display: "flex", alignItems: "center", mt: "20px", mb: "20px"}}>
        <Typography sx={{mr: "40px"}}>회원명</Typography>
        <TextField
          onMouseOver={e => e.target.style.cursor = 'pointer'}
          color="info"
          sx={{width: "330px"}}
          variant="outlined"
          size="small"
          placeholder="회원명, 아이디, 전화번호를 검색해 보세요."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MySearchIcon
                
                />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <Button
          sx={{
            background: "#ae84ea",
            "&:hover": {backgroundColor: "#ae84ea"},
            borderRadius: "10px",
            ml: "30px",
            mr: "30px",
          }}
          variant="contained"
        >
          설정한 조건으로 검색
        </Button>
        <Link variant="text" style={{color: "#707070"}}>
          검색조건 초기화
        </Link>
      </Box>
      <hr style={{border: "1px solid #e1e1e1"}} />
      <TableContainer
        sx={{
          mt: "30px",
          width: "812px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      >
        <Table sx={{minWidth: 550}} size="small" aria-label="a dense table">
          <TableHead sx={{background: "#fafbfc"}}>
            <TableRow sx={{height: "40px"}}>
              <TableCell
                align="center"
                sx={{
                  background: "#f1f4f6",
                  borderRight: "1px solid #ddd",
                  fontWeight: "bold",
                }}
              >
                합계(A-B)
              </TableCell>
              <TableCell
                align="center"
                sx={{borderRight: "1px solid #ddd", fontWeight: "bold"}}
              >
                결제(A)
              </TableCell>
              <TableCell align="center" sx={{fontWeight: "bold"}}>
                취소(B)
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows1.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  height: "40px",
                  textDecoration: "none",
                  "&:last-child td, &:last-child th": {borderBottom: 0},
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: "600",
                    background: "#f1f4f6",
                    borderRight: "1px solid #ddd",
                    fontSize: "12px",
                  }}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{borderRight: "1px solid #ddd", fontSize: "12px"}}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {row.calories}
                </TableCell>
                <TableCell sx={{fontSize: "12px"}} align="center">
                  {row.fat}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "20px",
          mb: "10px",
        }}
      >
        <Button
          sx={{
            width: "111px",
            height: "36px",
            p: "11px 20px 10px 20px",
            borderRadius: "12px",
            background: "#707070",
            "&:hover": {backgroundColor: "#707070"},
          }}
          variant="contained"
        >
          엑셀 다운로드
        </Button>
        <FormControl color="info" size="small" sx={{width: "150px"}}>
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
      <TableContainer sx={{border: "1px solid #e1e1e1", borderRadius: "4px"}}>
        <Table size="small" aria-label="a dense table">
          <TableHead sx={{background: "#fafbfc"}}>
            <TableRow sx={{height: "40px"}}>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                지점명
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                결제 일시
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
                수강권명
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                판매가
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                할인금액
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                최종 결제액
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                결제방식
              </TableCell>
              <TableCell
                align="center"
                sx={{fontWeight: 500, fontSize: "12px"}}
              >
                담당 강사
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
                sx={{
                  height: "40px",
                  textDecoration: "none",
                  // "&:hover": { background: "#ddd" },
                  "&:last-child td, &:last-child th": {borderBottom: 0},
                }}
              >
                <TableCell
                  sx={{borderRight: "1px solid #ddd", fontSize: "12px"}}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{borderRight: "1px solid #ddd", fontSize: "12px"}}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {row.calories}
                </TableCell>
                <TableCell
                  sx={{borderRight: "1px solid #ddd", fontSize: "12px"}}
                  align="center"
                >
                  {row.fat}
                </TableCell>
                <TableCell
                  sx={{borderRight: "1px solid #ddd", fontSize: "12px"}}
                  align="center"
                >
                  {row.carbs}
                </TableCell>
                <TableCell
                  sx={{borderRight: "1px solid #ddd", fontSize: "12px"}}
                  align="center"
                >
                  {row.protein}
                </TableCell>
                <TableCell
                  sx={{borderRight: "1px solid #ddd", fontSize: "12px"}}
                  align="center"
                >
                  {row.apple}
                </TableCell>
                <TableCell
                  sx={{borderRight: "1px solid #ddd", fontSize: "12px"}}
                  align="center"
                >
                  {row.banana}
                </TableCell>
                <TableCell
                  sx={{borderRight: "1px solid #ddd", fontSize: "12px"}}
                  align="center"
                >
                  {row.cherry}
                </TableCell>
                <TableCell sx={{fontSize: "12px"}} align="center">
                  {row.kiwi}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={1} sx={{mt: "20px", ml: "40%"}}>
        <Pagination
          color="primary"
          count={Math.ceil(rows2.length / perPage)}
          onChange={handleChangePage}
          page={page}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .css-1k2i9p6-MuiButtonBase-root-MuiPaginationItem-root": {
              background: "#e1e1e1",
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

export default SalesManagTab1;
