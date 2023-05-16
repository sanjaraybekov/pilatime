import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function createData(name, calories, fat, carbs, protein, goal, weight) {
  return {name, calories, fat, carbs, protein, goal, weight};
}

const row = [
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명수강권명수강권명수강권명수강권명수강권명",
    "9999.99.99(목) 오전 99:99",
    "9999.99.99(목) 오전 99:99",
    "강사명강사명",
    "결석"
  ),
];

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
    "수강권명수강권명수강권명수강권명수강권명수강권명",
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
    "수강권명수강권명수강권명수강권명수강권명수강권명",
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
    "수강권명수강권명수강권명수강권명수강권명수강권명",
    "-",
    "-",
    "강사명강사명",
    "결석"
  ),
  createData(
    "클래스 명이 노출되는 영역입니다.",
    "9999.99.99(목) 오전 99:99",
    "수강권명수강권명수강권명수강권명수강권명수강권명",
    "-",
    "-",
    "강사명강사명",
    "결석"
  ),
];

function UserTab4() {

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
    setUsers(rows1);
  }, []);
  React.useEffect(() => {
    setPage(1)
  }, [perPage]);

  return (
    <Box sx={{pt: "30px", boxShadow:'none'}}>
      <TableContainer sx={{border: "1px solid #ddd", borderRadius:'5px', width:'1000px'}}>
        <Table
          sx={{
            minWidth: 650,
            ".css-1j6lafg-MuiTableCell-root": {padding: "1px"},
            ".css-1vhoxdy-MuiTableCell-root": {padding: "2px"},
          }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead sx={{background: "#fafbfc", height: "40px"}}>
            <TableRow sx={{height: "40px"}}>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontSize: "12px",
                  fontWeight: 550,
                }}
              >
                최근 결제 일시
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontSize: "12px",
                  fontWeight: 550,
                }}
              >
                총 판매가
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontSize: "12px",
                  fontWeight: 550,
                }}
              >
                총 할인 금액
              </TableCell>
              <TableCell
                sx={{fontSize: "12px", fontWeight: 550}}
                align="center"
              >
                최종 결제액 합계
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  height: "40px",
                  "&:last-child td, &:last-child th": {borderBottom: 0},
                }}
              >
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                  sx={{borderRight: "1px solid #ddd"}}
                >
                  {row.name}
                </TableCell>
                <TableCell align="center" sx={{borderRight: "1px solid #ddd"}}>
                  {row.calories}
                </TableCell>
                <TableCell align="center" sx={{borderRight: "1px solid #ddd"}}>
                  {row.fat}
                </TableCell>
                <TableCell align="center" sx={{color: "red", fontWeight:'bold'}}>
                  {row.carbs}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <TableContainer sx={{mt:'31px', border: "1px solid #ddd", borderRadius:'5px', width:"1000px"}}>
        <Table
          size="small"
          aria-label="a dense table"
          sx={{
            minWidth: 650,
            ".css-1j6lafg-MuiTableCell-root": {padding: "2px"},
            ".css-1vhoxdy-MuiTableCell-root": {padding: "2px"},
            ".css-1g86l6g-MuiTableCell-root": {padding: "2px"},
          }}
        >
          <TableHead sx={{background: "#fafbfc", height:'40px'}}>
            <TableRow sx={{".css-1jtrq4o-MuiTableCell-root": {padding: "1px"}}}>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontSize: "12px",
                  fontWeight: 550,
                }}
              >
                결제 일시
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
                판매가
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontSize: "12px",
                  fontWeight: 550,
                }}
              >
                할인 금액
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontSize: "12px",
                  fontWeight: 550,
                }}
              >
                최종 결제액
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontSize: "12px",
                  fontWeight: 550,
                }}
              >
                최종 결제액
              </TableCell>
              <TableCell
                sx={{fontSize: "12px", fontWeight: 550}}
                align="center"
              >
                담당 강사
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{height:"40px"}}>
          {users
                    .filter(
                      (_, id) =>
                        id >= (page - 1) * perPage && id <= page * perPage
                    )
                    .map((row, index) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": {borderBottom: 0},
                }}
              >
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                  sx={{borderRight: "1px solid #ddd", height: "40px"}}
                >
                  {row.name}
                </TableCell>
                <TableCell align="center" sx={{borderRight: "1px solid #ddd"}}>
                  {row.calories}
                </TableCell>
                <TableCell align="center" sx={{borderRight: "1px solid #ddd"}}>
                  {row.fat}
                </TableCell>
                <TableCell align="center" sx={{borderRight: "1px solid #ddd"}}>
                  {row.carbs}
                </TableCell>
                <TableCell align="center" sx={{borderRight: "1px solid #ddd"}}>
                  {row.protein}
                </TableCell>
                <TableCell align="center" sx={{borderRight: "1px solid #ddd"}}>
                  {row.goal}
                </TableCell>
                <TableCell align="center" sx={{borderLeft: "1px solid #ddd"}}>
                  {row.weight}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={1} sx={{mt: "20px", ml: "40%"}}>
        <Pagination
          onChange={handleChangePage}
          count={Math.ceil(rows1.length / 9)}
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
    </Box>
  );
}

export default UserTab4;
