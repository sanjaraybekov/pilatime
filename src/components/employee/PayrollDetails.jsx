import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  TableRow,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

const PayrollDetails = () => {
  const theme = useTheme();

  function createData(name, calories) {
    return { name, calories };
  }

  const rows1 = [
    createData("기본급", "999,999,999 원"),
    createData("개인 레슨 수당", "1,200,000 원"),
    createData("그룹 레슨 수당", " 500,000 원"),
    createData("온라인 레슨 수당", " 500,000 원"),
    createData("커미션", " 3%"),
    createData("급여 반영일", " 2021년 5월~ 현재"),
  ];

  return (
    <Box
      component={Paper}
      elevation={2}
      style={{
        background: "#fff",
        borderRadius: "5px",
        padding: "40px",
        width: "1080px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <Link
            style={{
              textDecoration: "none",
              color: "#3a3a3a",
              display: "flex",
            }}
            to="/storevoucher"
          >
            <svg
              id="뒤로가기"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                id="Path_6534"
                data-name="Path 6534"
                d="M0,0H24V24H0Z"
                fill="none"
              />
              <circle
                id="Ellipse_96"
                data-name="Ellipse 96"
                cx="11"
                cy="11"
                r="11"
                transform="translate(1 1)"
                fill="#3a3a3a"
              />
              <path
                id="Path_6535"
                data-name="Path 6535"
                d="M6.393,8.579H14V9.865H6.393l3.352,3.448-.884.909L4,9.222l4.861-5,.884.909Z"
                transform="translate(3 2.778)"
                fill="#fff"
              />
            </svg>
            <Typography sx={{ fontSize: "18px", ml: "8px", fontWeight: "550" }}>
              급여 설정 상세
            </Typography>
          </Link>
        </Box>
        <Link
          style={{
            color: theme.palette.primary.main,
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 550,
          }}
          to="/payManagement"
        >
          목록으로
        </Link>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1" }} />
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "22px" }}
      >
        <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
          홍길동 님
        </Typography>
        <Button
          component={Link}
          to="/payrollCreate"
          sx={{
            width: "122px",
            height: "36px",
            borderRadius: "12px",
            "&:hover": { background: "#914BEB", color: "#fff" },
          }}
          variant="outlined"
        >
          신규 급여 등록
        </Button>
      </Box>
      <Typography
        sx={{ mt: "30px", mb: "10px", fontSize: "16px", fontWeight: 500 }}
      >
        급여 정보
      </Typography>

      <TableContainer sx={{ border: "1px solid #ddd", borderRadius: "5px" }}>
        <Table>
          <TableBody>
            {rows1.map((row) => (
              <TableRow sx={{ height: "40px" }} key={row.name}>
                <TableCell
                  align="center"
                  component="th"
                  scope="column"
                  sx={{
                    ".css-1yhpg23-MuiTableCell-root": { padding: "5px" },
                    width: "180px",
                    fontWeight: 600,
                    background: "#FAFBFC",
                  }}
                >
                  {row.name}
                </TableCell>

                <TableCell align="center"> {row.calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        sx={{
          width: "62px",
          height: "36px",
          borderRadius: "12px",
          backgroundColor: "#707070",
          "&:hover": { backgroundColor: "#707070" },
          mt: "10px",
          mb: "30px",
          ml: "938px",
        }}
      >
        수정
      </Button>

      <hr style={{ border: "1px solid #e1e1e1" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "24px",
          mb: "15px",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
          이전 급여 정보 설정
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>반영 기간 선택</Typography>
          <FormControl
            color="info"
            size="small"
            sx={{ ml: "19px", width: "250px" }}
          >
            <Select
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ background: "#fff" }}
            >
              <MenuItem disabled>
                2020년 5월 ~ 2021년 4월
              </MenuItem>
              <MenuItem selected value="1">
                반영기간 1
              </MenuItem>
              <MenuItem selected value="2">
                반영기간 2
              </MenuItem>
              <MenuItem selected value="3">
                반영기간 3
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box>
        <TableContainer sx={{ border: "1px solid #ddd", mb: "20px" }}>
          <Table>
            <TableBody>
              {rows1.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    align="center"
                    component="th"
                    scope="column"
                    sx={{
                      fontWeight: 600,
                      width: "180px",
                      background: "#FAFBFC",
                    }}
                  >
                    {row.name}
                  </TableCell>

                  <TableCell align="center"> {row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PayrollDetails;
