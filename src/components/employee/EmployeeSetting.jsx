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

function createData(name, calories, fat, carbs, protein, apple, banana) {
  return { name, calories, fat, carbs, protein, apple, banana };
}

const rows1 = [
  createData(
    "홍길동",
    "여성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "설정설정설정설정설정설정설정",
    "재직중"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
  createData(
    "전지현",
    "남성",
    "99999999999",
    "개인 레슨, 그룹 레슨",
    "9999.99.99(목)",
    "",
    "퇴사"
  ),
];

const EmployeeSetting = () => {

  const [page, setPage] = React.useState(1);

  const handleChangePage = (event, value) => {
    setPage(value)};
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
            padding: "30px 40px 100px 40px",
            width: "1080px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography className="title" sx={{ width: "8%" }}>
              회원 검색
            </Typography>

            <TextField
              sx={{ mt: "4px", width: "370px", minHeight: "40px", mr: '4px' }}
              color="info"
              size="small"
              placeholder="임직원 명, 연락처를 검색해주세요. ."
              id="outlined-search"
              type="search"
            />
            <Button
              size="small"
              sx={{
                fontSize:'13px',
                width: "62px",
                height: "36px",
                color: "#fff",
                minHeight: "36px",
                background: "#707070",
                "&:hover": { backgroundColor: "#707070" },
              }}
            >
              검색
            </Button>
            <Button
              component={Link}
              to="/employeeDetail"
              sx={{
                fontSize:'13px',
                "&:hover": { background: "#914beb", color: "#fff" },
                borderRadius: "12px",
                ml: "385px",
                width: "108px",
                height: "36px",
              }}
              variant="outlined"
            >
              임직원 등록
            </Button>
          </Box>

          <Box sx={{ mt: "20px", display: "flex", alignItems: "center" }}>
            <Typography sx={{ width: "8%" }} className="title">
              담당 직무
            </Typography>
            <FormControlLabel
              control={<CustomCheckbox checked />}
              label="개인 레슨"
            />
            <FormControlLabel control={<CustomCheckbox />} label="그룹 레슨" />
            <FormControlLabel control={<CustomCheckbox />} label="온라인 레슨" />
            <FormControlLabel control={<CustomCheckbox />} label="고객 관리" />
            <FormControlLabel control={<CustomCheckbox />} label="매장 관리" />

            <FormControlLabel
              control={<CustomCheckbox />}
              label="온라인 레슨"
            />
            <FormControlLabel
              control={<CustomCheckbox />}
              label="패키지 레슨"
            />
            <FormControlLabel
              control={<CustomCheckbox />}
              label="패키지 레슨"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ width: "8%" }} className="title">
             재직 구분
            </Typography>
            <FormControlLabel control={<CustomCheckbox />} label="재직중" />
            <FormControlLabel control={<CustomCheckbox />} label="퇴사" />
          </Box>

          <Box
            sx={{
              width: "30%",
              display: "grid",
              justifyContent: "end",
              gap: "10px",
            }}
          ></Box>
          <hr style={{ border: "1px solid #e1e1e1" }} />
          <Box sx={{ mt: "30px" }}>
            <TableContainer
              sx={{ mt: 1, border: "1px solid #ddd", borderRadius: "5px" }}
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
                      성별
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      연락처
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
                      설정
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: 500, fontSize: "12px" }}
                    >
                      재직 구분
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                {rows1
                  .filter(
                    (_, id) =>
                      id >= (page - 1) * 9 && id <= page * 9
                  )
                  .map((row, index) => (
                    <TableRow
                      component={Link}
                      to="/employeeDetail"
                      key={index}
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
                      <TableCell align="center">{row.banana}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Stack spacing={1} sx={{ mt: "20px", ml: "40%" }}>
              <Pagination
               color="primary"
                 onChange={handleChangePage}
                 count={Math.ceil(rows1.length / 9)}
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
          </Box>
        </Box>
      </div>
    </AnimationPage>
  );
};

export default EmployeeSetting;
