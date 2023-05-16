import React, {useEffect} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function createData(name, calories, fat, carbs, protein, goal, weight) {
  return { name, calories, fat, carbs, protein, goal, weight };
}

const rows1 = [
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명수강권명수강권명수강권명수강권명수강권명",
    "9999.99.99(목) 오전 99:99",
    "9999.99.99(목) 오전 99:99",
    "강사명강사명",
    "결석"
  ),
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명수강권명수강권명수강권명수강권명수강권명",
    "9999.99.99(목) 오전 99:99",
    "9999.99.99(목) 오전 99:99",
    "강사명강사명",
    "결석"
  ),
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명",
    "-",
    "-",
    "강사명강사명",
    "결석"
  ),  
];
const rows2 = [
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명수강권명수강권명수강권명수강권명수강권명",
    "9999.99.99(목) 오전 99:99",
    "9999.99.99(목) 오전 99:99",
    "강사명강사명",
    "결석"
  ),
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명수강권명수강권명수강권명수강권명수강권명",
    "9999.99.99(목) 오전 99:99",
    "9999.99.99(목) 오전 99:99",
    "강사명강사명",
    "결석"
  ),
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명",
    "-",
    "-",
    "강사명강사명",
    "결석"
  ), 
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명수강권명수강권명수강권명수강권명수강권명",
    "9999.99.99(목) 오전 99:99",
    "9999.99.99(목) 오전 99:99",
    "강사명강사명",
    "결석"
  ),
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명수강권명수강권명수강권명수강권명수강권명",
    "9999.99.99(목) 오전 99:99",
    "9999.99.99(목) 오전 99:99",
    "강사명강사명",
    "결석"
  ),
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명",
    "-",
    "-",
    "강사명강사명",
    "결석"
  ), 
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명",
    "-",
    "-",
    "강사명강사명",
    "결석"
  ), 
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명수강권명수강권명수강권명수강권명수강권명",
    "9999.99.99(목) 오전 99:99",
    "9999.99.99(목) 오전 99:99",
    "강사명강사명",
    "결석"
  ),
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명",
    "-",
    "-",
    "강사명강사명",
    "결석"
  ), 
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명",
    "-",
    "-",
    "강사명강사명",
    "결석"
  ), 
];

function UserTab2() { 
  const [value, setValue] = React.useState("one");

  const [page, setPage] =React.useState(1);
  const [perPage, setPerPage] = React.useState(9);
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
  useEffect(() => {
    setPage(1)
  }, [perPage]);

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", background: "white", borderRadius: "5px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="inherit tabs example"
        variant="fullWidth"
        sx={{
          ".css-11g6rvh-MuiTabs-indicator": {
            height: "5px",
            background: "#AE84EA",
            borderRadius: "5px",
          },
        }}
      >
        <Tab
          sx={{ fontSize: "16px", fontWeight: 500 }}
          value="one"
          label="예약 내역"
        />
        <Tab
          sx={{ fontSize: "16px", fontWeight: 500 }}
          value="two"
          label="출결 내역"
        />
      </Tabs>
      {value === "one" ? (
        <Box >
          <Typography
            variant="h6"
            className="title"
            sx={{ mt: "30px", mb: "10px" }}
          >
            개인 레슨
          </Typography>
          <TableContainer
            sx={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              width: "1000px",
            }}
          >
            <Table
              sx={{
                minWidth: 650,
                ".css-1vhoxdy-MuiTableCell-root": { padding: "1px" },
              }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead sx={{ background: "#FAFBFC" }}>
                <TableRow sx={{ height: "40px" }}>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    클래스 명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    레슨 일시
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    수강권 명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    예약 일시
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    담당 강사
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "12px", fontWeight: 550 }}
                  >
                    강의실
                  </TableCell>
                  {/* <TableCell align="right">출결</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      height: "40px",
                      "&:last-child td, &:last-child th": { borderBottom: 0 },
                    }}
                  >
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      sx={{ borderRight: "1px solid #ddd" }}
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
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.carbs}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.protein}
                    </TableCell>
                    <TableCell align="center">{row.goal}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <hr
            style={{
              marginTop: "30px",
              border: "1px solid #e1e1e1",
              width: "1000px",
            }}
          />
          <Typography
            variant="h6"
            className="title"
            sx={{ mt: "30px ", mb: "10px" }}
          >
            그룹 레슨
          </Typography>

          <TableContainer
            sx={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              width: "1000px",
              // maxHeight:'440px'
            }}
          >
            <Table
              sx={{
                minWidth: 650,
                ".css-1vhoxdy-MuiTableCell-root": { padding: "1px" },
              }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead sx={{ background: "#FAFBFC" }}>
                <TableRow sx={{ height: "40px" }}>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    클래스 명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    레슨 일시
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    수강권 명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    예약 일시
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    담당 강사
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "12px", fontWeight: 550 }}
                  >
                    강의실
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {users
                    .filter(
                      (_, id) =>
                        id >= (page - 1) * perPage && id <= page * perPage
                    )
                    .map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      height: "40px",
                      "&:last-child td, &:last-child th": { borderBottom: 0 },
                    }}
                  >
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      sx={{ borderRight: "1px solid #ddd" }}
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
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.carbs}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.protein}
                    </TableCell>
                    <TableCell align="center">{row.goal}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack spacing={1} sx={{ mt: "20px", ml: "40%" }}>
            <Pagination
              onChange={handleChangePage}
              count={Math.ceil(rows2.length / 9)}
              page={page}
              variant="outlined"
              shape="rounded"
              color="primary"
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
          <hr style={{ marginTop: "30px", border: "1px solid #e1e1e1" }} />
          <Typography
            variant="h6"
            className="title"
            sx={{ mt: "32px", mb: "11px" }}
          >
            온라인 레슨
          </Typography>
          <TableContainer
            sx={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              width: "1000px",
            }}
          >
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <caption style={{ textAlign: "center" }}>
                이용 내역이 없습니다.
              </caption>
              <TableHead sx={{ background: "#FAFBFC" }}>
                <TableRow sx={{ height: "40px" }}>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd", fontWeight: 550 }}
                  >
                    클래스 명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    레슨 일시
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    수강권 명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    예약 일시
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontSize: "12px",
                      fontWeight: 550,
                    }}
                  >
                    담당 강사
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "12px", fontWeight: 550 }}
                  >
                    강의실
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box>
          <Typography
            className="title"
            sx={{ mt: "30px", mb: "10px", fontSize: "16px", fontWeight: 500 }}
          >
            개인 레슨
          </Typography>
          <TableContainer
            sx={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              width: "1000px",
            }}
          >
            <Table
              sx={{
                minWidth: 650,
                ".css-1vhoxdy-MuiTableCell-root": { padding: "1px" },
              }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead sx={{ background: "#FAFBFC" }}>
                <TableRow
                  sx={{ ".css-1jtrq4o-MuiTableCell-root": { padding: "1px" } }}
                >
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      height: "40px",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    클래스 명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    레슨 일시
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    수강권 명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    입장시간
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    퇴장 시간
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    담당 강사
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "12px", fontWeight: 550 }}
                  >
                    출결
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      height: "40px",
                      "&:last-child td, &:last-child th": { borderBottom: 0 },
                    }}
                  >
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      sx={{ borderRight: "1px solid #ddd" }}
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
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.carbs}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.protein}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.goal}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderLeft: "1px solid #ddd" }}
                    >
                      {row.weight}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <hr
            style={{
              marginTop: "30px",
              border: "1px solid #e1e1e1",
              width: "1000px",
            }}
          />
          <Typography variant="h6" className="title" sx={{ mt: "30px", mb: "10px" }}>
            그룹 레슨
          </Typography>

          <TableContainer
            sx={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              width: "1000px",
            
            }}
          >
            <Table
              sx={{
                minWidth: 650,
                ".css-1jtrq4o-MuiTableCell-root": { padding: "1px" },
                ".css-1vhoxdy-MuiTableCell-root": { padding: "1px" },
              }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead sx={{ background: "#FAFBFC" }}>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      height: "40px",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    클래스 명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    레슨 일시
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    수강권 명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    입장시간
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    퇴장 시간
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    담당 강사
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: 550, fontSize: "12px" }}
                  >
                    출결
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {users
                    .filter(
                      (_, id) =>
                        id >= (page - 1) * perPage && id <= page * perPage
                    )
                    .map((row, index) => (
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
                      sx={{ borderRight: "1px solid #ddd", height: "40px" }}
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
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.carbs}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.protein}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.goal}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderLeft: "1px solid #ddd" }}
                    >
                      {row.weight}
                    </TableCell>
                  </TableRow>
                ))}
                
              </TableBody>
            </Table>
          </TableContainer>
          <Stack spacing={1} sx={{ mt: "20px", ml: "40%" }}>
          <Pagination
              onChange={handleChangePage}
              count={Math.ceil(rows2.length / 9)}
              page={page}
              variant="outlined"
              shape="rounded"
              color="primary"
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
          <Typography variant="h6" className="title" sx={{ mt: "30px", mb: "10px" }}>
            온라인 레슨
          </Typography>
          <TableContainer
            sx={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              width: "1000px",
            }}
          >
            <Table
              sx={{
                minWidth: 650,
                ".css-1jtrq4o-MuiTableCell-root": { padding: "1px" },
                ".css-1vhoxdy-MuiTableCell-root": { padding: "1px" },
              }}
              size="small"
              aria-label="a dense table"
            >
              <caption style={{ textAlign: "center" }}>
                이용 내역이 없습니다.
              </caption>
              <TableHead sx={{ background: "#FAFBFC", height: "40px" }}>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    클래스 명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    레슨 일시
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    수강권 명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    입장시간
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    퇴장 시간
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 550,
                      fontSize: "12px",
                    }}
                  >
                    담당 강사
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: 550, fontSize: "12px" }}
                  >
                    출결
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
}

export default UserTab2;
