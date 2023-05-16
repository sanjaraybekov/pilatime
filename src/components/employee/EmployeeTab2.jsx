import React from "react";
import { Box, Button, FormControl, MenuItem, Pagination, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from "@mui/material";
import CustomCheckbox from "../CustomCheckbox";

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  sample6,
  sample7,
  sample8,
  sample9,
  sample10,
  sample11,
  sample12,
  sample13,
  sample14
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    sample6,
    sample7,
    sample8,
    sample9,
    sample10,
    sample11,
    sample12,
    sample13,
    sample14,
  };
}

const rows1 = [
  createData(
    "회원명01",
    "남성남성",
    "0202",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동13",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동12",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동11",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동10",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동9",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동8",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "회원명7",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동6",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동5",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동4",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동3",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동2",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동1",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "회원명01",
    "남성남성",
    "0202",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동13",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동12",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동11",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동10",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동9",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동8",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "회원명7",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동6",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동5",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동4",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동3",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동2",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
  createData(
    "홍길동1",
    "남성",
    "02",
    "999-999-9999",
    "수강권명",
    "강사명",
    "02",
    "9999.99.99",
    "02",
    "999999",
    "99999.999",
    "99999.9.9.99",
    "동의"
  ),
];

function EmployeeTab2() {

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

  const handleChange = (e) => {
    const {name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      // console.log("all", tempUser);
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      // console.log("single", tempUser);
      setUsers(tempUser);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{
              height: "36px",
              borderRadius: "10px",
              background: "#707070",
              mr: "4px",
              color: "#fff",
              "&:hover": { background: "#707070", color: "#fff" },
            }}
          >
            SMS
          </Button>
          <Button
            sx={{
              borderRadius: "10px",
              height: "36px",
              background: "#707070",
              color: "#fff",
              "&:hover": { background: "#707070", color: "#fff" },
            }}
          >
            엑셀 다운로드
          </Button>
          <CustomCheckbox />
          <Typography>현재 해당되는 모든 회원(999,999명) 선택</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography  sx={{ mr: "16px" }}>전체 :999,999,999 명</Typography>
          <FormControl color="info">
            <Select defaultValue="20" size="small">
            <MenuItem
                    onClick={(e) => handleSelectedValue(e)}
                    value="20"
                    sx={{ display: selectedValue === "20" ? "none" : "block" }}
                  >
                    20개씩 보기
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
                    sx={{ display: selectedValue === "50" ? "none" : "block" }}
                  >
                    50개씩 보기
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => handleSelectedValue(e)}
                    value="100"
                    sx={{ display: selectedValue === "100" ? "none" : "block" }}
                  >
                    100개씩 보기
                  </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <TableContainer
          sx={{ mt: "10px", border: "1px solid #ddd", borderRadius:'5px', width:"1260px" }}
        >
          <Table size="small" aria-label="a dense table">
            <TableHead sx={{ background: "#fafbfc" }}>
              <TableRow sx={{".css-1jtrq4o-MuiTableCell-root":{padding:"1px 5px"}}}>
                <TableCell
                  sx={{ borderRight: "1px solid #ddd" }}
                  align="center"

                >
                  <CustomCheckbox color="primary"
                     name="allSelect"
                     checked={!users.some((user) => user?.isChecked !== true)}
                     onChange={handleChange} />
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid #ddd",fontWeight:500, fontSize:'12px' }}
                  align="center"
                >
                  이름
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid #ddd",fontWeight:500, fontSize:'12px' }}
                  align="center"
                >
                  성별
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid #ddd",fontWeight:500, fontSize:'12px' }}
                  align="center"
                >
                  나이
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid #ddd",fontWeight:500, fontSize:'12px' }}
                  align="center"
                >
                  전화번호
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid #ddd",fontWeight:500, fontSize:'12px' }}
                  align="center"
                >
                  사용 수강권
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid #ddd",fontWeight:500, fontSize:'12px' }}
                  align="center"
                >
                  담당강사
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid #ddd",fontWeight:500, fontSize:'12px' }}
                  align="center"
                >
                  잔여 수
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid #ddd",fontWeight:500, fontSize:'12px' }}
                  align="center"
                >
                  만료일
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid #ddd",fontWeight:500, fontSize:'12px' }}
                  align="center"
                >
                  누적 방문수
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid #ddd",fontWeight:500, fontSize:'12px' }}
                  align="center"
                >
                  첫 결제일
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid #ddd",fontWeight:500, fontSize:'12px' }}
                  align="center"
                >
                  최근 방문
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid #ddd",fontWeight:500, fontSize:'12px' }}
                  align="center"
                >
                  락커 만료
                </TableCell>
                <TableCell align="center">수신 동의</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
            {users
              .filter(
                (_, id) => id >= (page - 1) * perPage && id <= page * perPage
              )
              .map((row, index) => (
                <TableRow
                  role="checkbox"
                  key={index}
                  sx={{
                    height:'40px',
                    textDecoration: "none",
                    // "&:hover": { background: "#ddd" },
                    "&:last-child td, &:last-child th": { borderBottom: 0 },
                  }}
                >
                  <TableCell
                    sx={{ borderRight: "1px solid #ddd", }}
                    align="center"
                    padding="checkbox"
                  >
                    <CustomCheckbox color="primary"
                     name={row.name}
                     checked={row?.isChecked || false}
                    //  onChange={handleChange}
                     />
                  </TableCell>
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
                    {row.sample6}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid #ddd" }}
                    align="center"
                  >
                    {row.sample7}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid #ddd" }}
                    align="center"
                  >
                    {row.sample8}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid #ddd" }}
                    align="center"
                  >
                    {row.sample9}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid #ddd" }}
                    align="center"
                  >
                    {row.sample10}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid #ddd" }}
                    align="center"
                  >
                    {row.sample11}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid #ddd" }}
                    align="center"
                  >
                    {row.sample12}
                  </TableCell>
                  <TableCell align="center">{row.sample13}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={1} sx={{ mt: "20px", ml: "40%" }}>
          <Pagination
            color="primary"
            count={Math.ceil(rows1.length / perPage)}
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
                ".css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon":{
                  color:'#fff'
                },
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default EmployeeTab2;
