import React from "react";
import {
  Box,
  Button,
  Divider,
  Pagination,
  Paper,
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
import { Link } from "react-router-dom";
import AnimationPage from "../../pages/AnimationPage";
import CustomCheckbox from "../CustomCheckbox";

function createData(name, calories, fat, carbs, protein, nuts, grains, peas) {
  return { name, calories, fat, carbs, protein, nuts, grains, peas };
}

const rows1 = [
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
  createData(
    "14",
    "홍길동",
    "아이디영역아이디영역아이디영역아이디영역",
    "운영자",
    "계정 관리",
    "9999.99.99",
    "9999.99.99",
    "사용"
  ),
];

function SetUserList() {
  return (
    <AnimationPage>
      <Box
        component={Paper}
        elavation={2}
        sx={{
          background: "#fff",
          borderRadius: "10px",
          padding: "30px 40px",
          width: "1080px",
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
            <Typography
              className="title"
              sx={{ mr: "20px", fontSize: "12px", fontWeight: 500 }}
            >
              검색
            </Typography>

            <TextField
              color="info"
              sx={{ width: "375px" }}
              size="small"
              placeholder="운영자 명, 아이디, 전화번호를 검색해보세요."
              id="outlined-search"
              type="search"
            />
            <Button
              sx={{
                ml: "4px",
                background: "#707070",
                color: "white",
                width: "62px",
                height: "36px",
                "&:hover": {
                  color: "white",
                  background: "#707070",
                },
              }}
              variant="text"
            >
              검색
            </Button>
          </Box>
          <Link to="/setUserDetail" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                width: "108px",
                height: "36px",
                borderRadius: "12px",
                pl: "21px",
                pr: "21px",
                fontSize:"13px",
                "&:hover": { background: "#914beb", color: "#fff" },
              }}
              variant="outlined"
            >
              운영자 등록
            </Button>
          </Link>
        </Box>
        <Divider sx={{ mb: "20px", mt: "26px", color: "#e1e1e1" }} />
        <TableContainer sx={{ border: "1px solid #ddd" }}>
          <Table sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
            <TableHead sx={{ background: "#fafbfc" }}>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ borderRight: "1px solid #ddd" }}
                >
                  <CustomCheckbox color="primary" />
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid #ddd",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                  align="center"
                >
                  번호
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid #ddd",
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
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                  align="center"
                >
                  아이디
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid #ddd",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                  align="center"
                >
                  등급
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid #ddd",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                  align="center"
                >
                  담당 파트
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid #ddd",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                  align="center"
                >
                  등록일
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid #ddd",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                  align="center"
                >
                  최근 접속일
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "12px", fontWeight: 500 }}
                >
                  상태
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows1.map((row, index) => (
                <TableRow
                  component={Link}
                  to={`/setUserDetail`}
                  role="checkbox"
                  key={index}
                  sx={{
                    textDecoration: "none",
                    // "&:hover": { background: "#ddd" },
                    "&:last-child td, &:last-child th": { borderBottom: 0 },
                  }}
                >
                  <TableCell
                    align="center"
                    padding="checkbox"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    <CustomCheckbox color="primary" />
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
                    {row.nuts}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    {row.grains}
                  </TableCell>
                  <TableCell align="center">{row.peas}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", mt: "10px", alignItems: "flex-end" }}>
          <Button
            sx={{
              fontSize: "13px",
              background: "#707070",
              color: "#fff",
              width: "85px",
              height: "36px",
              mr: "307px",
              fontWeight:'300',
              borderRadius: "12px",
              "&:hover": { background: "#ef0c23", color: "#fff" },
            }}
          >
            선택삭제
          </Button>
          <Stack spacing={1}>
            <Pagination
              color="primary"
              count={4}
              variant="outlined"
              shape="rounded"
              sx={{
                "& .css-1k2i9p6-MuiButtonBase-root-MuiPaginationItem-root": {
                  background: "#f1f4f6",
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
    </AnimationPage>
  );
}

export default SetUserList;
