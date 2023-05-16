import React from "react";
import { Box, Button, FormControl, MenuItem, Pagination, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from "@mui/material";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Stack } from "@mui/system";
import AnimationPage from "../../pages/AnimationPage";

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  apple,
  banana,
  cherry,
  kiwi,
  orange,
  mango
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    apple,
    banana,
    cherry,
    kiwi,
    orange,
    mango,
  };
}
const rows2 = [
  createData(
    "100000명",
    "999,999원",
    "999,999원",
    "999,999원",
    "999,999원",
    "999,999 원",
    "999,999 원",
    "999,999 원",
    "999,999 원",
    "999,999 원"
  ),
];

const rows1 = [
  createData(
    "홍길동",
    "3,000,000 원",
    "2011.11.15(목)",
    "1,200,000 원",
    "999,999 원",
    "1,200,000 원",
    "400,000 원",
    "400,000 원",
    "999,999원",
    "9,900 원",
    "2,901,000 원"
  ),
  createData(
    "홍길동",
    "3,000,000 원",
    "2011.11.15(목)",
    "1,200,000 원",
    "0 원",
    "1,200,000 원",
    "400,000 원",
    "400,000 원",
    "0원",
    "9,900 원",
    "2,901,000 원"
  ),
  createData(
    "홍길동",
    "3,000,000 원",
    "2011.11.15(목)",
    "1,200,000 원",
    "0 원",
    "1,200,000 원",
    "400,000 원",
    "400,000 원",
    "0원",
    "9,900 원",
    "2,901,000 원"
  ),
  createData(
    "홍길동",
    "3,000,000 원",
    "2011.11.15(목)",
    "1,200,000 원",
    "0 원",
    "1,200,000 원",
    "400,000 원",
    "400,000 원",
    "0원",
    "9,900 원",
    "2,901,000 원"
  ),
  createData(
    "홍길동",
    "3,000,000 원",
    "2011.11.15(목)",
    "1,200,000 원",
    "0 원",
    "1,200,000 원",
    "400,000 원",
    "400,000 원",
    "0원",
    "9,900 원",
    "2,901,000 원"
  ),
  createData(
    "홍길동",
    "3,000,000 원",
    "2011.11.15(목)",
    "1,200,000 원",
    "0 원",
    "1,200,000 원",
    "400,000 원",
    "400,000 원",
    "0원",
    "9,900 원",
    "2,901,000 원"
  ),
  createData(
    "홍길동",
    "3,000,000 원",
    "2011.11.15(목)",
    "1,200,000 원",
    "0 원",
    "1,200,000 원",
    "400,000 원",
    "400,000 원",
    "0원",
    "9,900 원",
    "2,901,000 원"
  ),
  createData(
    "홍길동",
    "3,000,000 원",
    "2011.11.15(목)",
    "1,200,000 원",
    "0 원",
    "1,200,000 원",
    "400,000 원",
    "400,000 원",
    "0원",
    "9,900 원",
    "2,901,000 원"
  ),
  createData(
    "홍길동",
    "3,000,000 원",
    "2011.11.15(목)",
    "1,200,000 원",
    "0 원",
    "1,200,000 원",
    "400,000 원",
    "400,000 원",
    "0원",
    "9,900 원",
    "2,901,000 원"
  ),
  createData(
    "홍길동",
    "3,000,000 원",
    "2011.11.15(목)",
    "1,200,000 원",
    "0 원",
    "1,200,000 원",
    "400,000 원",
    "400,000 원",
    "0원",
    "9,900 원",
    "2,901,000 원"
  ),
];

const SalarySettlement = () => {
  return (
    <AnimationPage>
      <div>
        <Box
          className='disable-fieldset'
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#e1e1e1",
            p: "20px 40px",
            height: "60px",
            borderRadius: "10px",
            mb: 1,
            width: "1080px",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>지점 선택</Typography>
          <FormControl
            color="info"
            size="small"
            sx={{ ml: "30px", width: "360px" }}
          >
            <Select
              defaultValue='0'
              variant="outlined"
              sx={{ background: "#fff" }}
            >
              <MenuItem disabled value="0">
                조회하실 지점을 선택해주세요.
              </MenuItem>
              <MenuItem value="1">
                Market.
              </MenuItem>
              <MenuItem value="2">
                Market1
              </MenuItem>
              <MenuItem value="3">
                Market2
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          component={Paper}
          elavation={2}
          sx={{
            background: "#fff",
            borderRadius: "10px",
            padding: "30px 40px 112px 40px",
            width: "1080px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Button
                sx={{
                  height: "36px",
                  width: "62px",
                  color: "#fff",
                  backgroundColor: "#AE84EA",
                  borderRadius: "12px",
                  "&:hover": { backgroundColor: "#AE84EA" },
                  fontSize: "13px",
                }}
              >
                금월
              </Button>
              <ArrowBackIosNewSharpIcon
                sx={{
                  width: "24px",
                  height: "24px",
                  padding: "5px",
                  borderRadius: "5px",
                  background: "#e1e1e1",
                  color: "#fff",
                }}
              />
              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                2022년 12월
              </Typography>
              <ArrowForwardIosSharpIcon
                sx={{
                  width: "24px",
                  height: "24px",
                  padding: "5px",
                  borderRadius: "5px",
                  background: "#e1e1e1",
                  color: "#fff",
                }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                borderRadius: "12px",
                color: "#fff",
                height: "36px",
                backgroundColor: "#707070",
                "&: hover": { background: "#707070" },
              }}
            >
              엑셀 다운로드
            </Button>
          </Box>
          <hr style={{ border: "1px solid #e1e1e1" }} />

          <TableContainer
            sx={{ mt: "30px", border: "1px solid #ddd", borderRadius: "5px" }}
          >
            <Table size="small" aria-label="a dense table">
              <TableHead sx={{ background: "#fafbfc" }}>
                <TableRow
                  sx={{ ".css-1jtrq4o-MuiTableCell-root": { padding: "2px" } }}
                >
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd", height: "40px" }}
                  >
                    임직원 수
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    총 월 급여 합계
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    기본급 합계
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    개인 수당 합계
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    그룹 수당 합계
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    온라인 수당 합계
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    커미션 합계
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    조정 금액 합계
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    공제 금액 합계
                  </TableCell>
                  <TableCell align="center" sx={{ background: "#f1f4f6" }}>
                    실 지급액 합계
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2.map((row) => (
                  <TableRow
                    sx={{
                      height: "40px",
                      textDecoration: "none",
                      ".css-1vhoxdy-MuiTableCell-root": { padding: "2px" },
                      // "&:hover": { background: "#ddd" },
                      "&:last-child td, &:last-child th": { borderBottom: 0 },
                    }}
                  >
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                      component="th"
                      scope="row"
                    >
                      {row.name}{" "}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.calories}{" "}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.fat}{" "}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.carbs}{" "}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.protein}{" "}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.apple}{" "}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.banana}{" "}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.cherry}{" "}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid #ddd" }}
                    >
                      {row.kiwi}{" "}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        background: "#f1f4f6",
                      }}
                    >
                      {row.orange}{" "}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer
            sx={{ mt: "20px", border: "1px solid #ddd", borderRadius: "5px" }}
          >
            <Table
              sx={{ minWidth: 550 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead sx={{ background: "#fafbfc" }}>
                <TableRow
                  sx={{
                    height: "40px",
                    ".css-w3r0jf-MuiTableCell-root": { padding: "2px" },
                  }}
                >
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    임직원 명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    총월 급여
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    기본급
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    개인 레슨 수당
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    그룹 레슨 수당
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    온라인 수당
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    온라인 수당
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    커미션
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    조정 금액
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd" }}
                  >
                    공제 금액
                  </TableCell>
                  <TableCell align="center" sx={{ background: "#f1f4f6" }}>
                    실 지급액
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows1.map((row) => (
                  <TableRow
                    sx={{
                      ".css-1vhoxdy-MuiTableCell-root": { padding: "1px" },
                      height: "40px",
                      textDecoration: "none",
                      // "&:hover": { background: "#ddd" },
                      "&:last-child td, &:last-child th": { borderBottom: 0 },
                    }}
                  >
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                      component="th"
                      scope="row"
                    >
                      {row.calories}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                    >
                      {row.fat}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                    >
                      {row.carbs}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                    >
                      {row.protein}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                    >
                      {row.apple}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                    >
                      {row.banana}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                    >
                      {row.cherry}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                    >
                      {row.kiwi}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                    >
                      {row.orange}
                    </TableCell>
                    <TableCell
                      sx={{
                        ".css-6qzbae-MuiTableCell-root": { padding: "2px" },
                        background: "#f1f4f6",
                      }}
                      align="center"
                    >
                      {row.mango}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack spacing={1} sx={{ mt: "20px", ml: "40%" }}>
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
      </div>
    </AnimationPage>
  );
};

export default SalarySettlement;
