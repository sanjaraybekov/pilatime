import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Pagination,
  Paper,
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
import { Link } from "react-router-dom";
import AnimationPage from "../../pages/AnimationPage";
import CustomCheckbox from "../CustomCheckbox";

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
  return { name, calories, fat, carbs, protein, apple, banana, cherry, kiwi };
}

const rows1 = [
  createData(
    "홍길동",
    "담당 부서가 표기되는 영역입니다.",
    "2011.11.15(목)",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "3%",
    "2020년 5월~"
  ),
  createData(
    "홍길동",
    "담당 부서가 표기되는 영역입니다.",
    "2011.11.15(목)",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "3%",
    "2020년 5월~"
  ),
  createData(
    "홍길동",
    "담당 부서가 표기되는 영역입니다.",
    "2011.11.15(목)",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "3%",
    "2020년 5월~"
  ),
  createData(
    "홍길동",
    "담당 부서가 표기되는 영역입니다.",
    "2011.11.15(목)",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "3%",
    "2020년 5월~"
  ),
  createData(
    "홍길동",
    "담당 부서가 표기되는 영역입니다.",
    "2011.11.15(목)",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "3%",
    "2020년 5월~"
  ),
  createData(
    "홍길동",
    "담당 부서가 표기되는 영역입니다.",
    "2011.11.15(목)",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "3%",
    "2020년 5월~"
  ),
  createData(
    "홍길동",
    "담당 부서가 표기되는 영역입니다.",
    "2011.11.15(목)",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "3%",
    "2020년 5월~"
  ),
  createData(
    "홍길동",
    "담당 부서가 표기되는 영역입니다.",
    "2011.11.15(목)",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "3%",
    "2020년 5월~"
  ),
  createData(
    "홍길동",
    "담당 부서가 표기되는 영역입니다.",
    "2011.11.15(목)",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "3%",
    "2020년 5월~"
  ),
  createData(
    "홍길동",
    "담당 부서가 표기되는 영역입니다.",
    "2011.11.15(목)",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "1,200,000 원",
    "3%",
    "2020년 5월~"
  ),
];

const PayManagement = () => {
  return (
    <AnimationPage>
      <div>
        <Box
         className='disable-fieldset'
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#e1e1e1",
            mb: 1,
            p: "20px 40px",
            height: "60px",
            borderRadius: "10px",
            width: "1080px",
          }}
        >
          <Typography sx={{ fontSize: "18px" }}>지점 선택</Typography>
          <FormControl
            color="info"
            size="small"
            sx={{ ml: "19px", width: "360px" }}
          >
            <Select
              defaultValue='0'
              variant="outlined"
              sx={{ background: "#fff"}}
            >
              <MenuItem sx={{font:"14px", color:"#3a3a3a", fontWeight:500 }} disabled value="0">
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
            padding: "40px",
            width: "1080px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography className="title" sx={{ mr: "28px" }}>
              회원 검색
            </Typography>

            <TextField
              color="info"
              sx={{ width: "370px" }}
              size="small"
              placeholder="이용권 명을 검색해주세요. ."
              id="outlined-search"
              type="search"
            />
            <Button
              color="info"
              sx={{
                background: "#707070",
                color: "#fff",
                ml: "4px",
                width: "62px",
                height: "36px",
                "&:hover": {
                  background: "#707070",
                  color: "#fff",
                },
              }}
              variant="text"
            >
              검색
            </Button>
          </Box>

          <Box sx={{ mt: "16px", display: "flex", alignItems: "center" }}>
            <Typography sx={{ width: "8%" }} className="title">
              담당 직무{" "}
            </Typography>
            <FormControlLabel
              control={<CustomCheckbox checked />}
              label="개인 레슨"
            />
            <FormControlLabel control={<CustomCheckbox />} label="그룹 레슨" />
            <FormControlLabel
              control={<CustomCheckbox />}
              label="온라인 레슨"
            />
            <FormControlLabel control={<CustomCheckbox />} label="고객 관리" />
            <FormControlLabel control={<CustomCheckbox />} label="매장 관리" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "13px",
              mb: "17px",
            }}
          >
            <Typography sx={{ width: "8%" }} className="title">
              재직 구분
            </Typography>
            <FormControlLabel control={<CustomCheckbox />} label="재직중" />
            <FormControlLabel control={<CustomCheckbox />} label="퇴사" />
          </Box>
          <hr
            style={{
              border: "1px solid #e1e1e1",
              margin: "0px !important",
              padding: "0px",
            }}
          />
          <Box sx={{ mt: "30px" }}>
            <TableContainer
              sx={{ border: "1px solid #ddd", borderRadius: "5px" }}
            >
              <Table
                sx={{ minWidth: 550 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead sx={{ background: "#fafbfc" }}>
                  <TableRow sx={{ height: "40px" }}>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      임직원 명
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      담당직무
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      입사일
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      기본급
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      개인 레슨 수당
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      그룹 레슨 수당
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      온라인 수당
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      커미션
                    </TableCell>
                    <TableCell align="center">적용 시점</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows1.map((row) => (
                    <TableRow
                      component={Link}
                      to="/payrollDetail"
                      sx={{
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
                      <TableCell align="center">{row.kiwi}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Stack spacing={1} sx={{ mt: "20px", ml: "40%", mb: "65px" }}>
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
      </div>
    </AnimationPage>
  );
};

export default PayManagement;
