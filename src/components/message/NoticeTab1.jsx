import React from "react";
import {
  Box,
  Button,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {Link} from "react-router-dom";
import CustomCheckbox from "../CustomCheckbox";

function createData(name, calories, fat, carbs, protein, apple) {
  return {name, calories, fat, carbs, protein, apple};
}

const rows1 = [
  createData(
    "99993",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "994",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "995",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "997",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "9982",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "99992",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "9922",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "993",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "99443",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "99654",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "99996546",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "99242",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "9922",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "9922",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "9964",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "999998",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "9978",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "9907",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "9994",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
  createData(
    "99949",
    "필라타임 이벤트 당첨자 명단 공지",
    "관리자",
    "2022.10.27(목)",
    "5336",
    "수정 "
  ),
];

const NoticeTab1 = () => {
  const perPage = 15;
  const [page, setPage] = React.useState(1);
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  // const [perPage, setPerPage] = React.useState(15);

  // const handleChangePerPage = (event) => {
  //   setPerPage(event.target.value);
  // };

  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    setUsers(rows1);
  }, []);

  React.useEffect(() => {
    setPage(1)
  }, [perPage]);

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
    <Box sx={{mt: "20px"}}>
      <TableContainer
        sx={{mt: 1, border: "1px solid #ddd", borderRadius: "5px"}}
      >
        <Table size="small" aria-label="a dense table">
          <TableHead sx={{background: "#fafbfc"}}>
            <TableRow
              sx={{".css-1jtrq4o-MuiTableCell-root": {padding: "1px 5px"}}}
            >
              <TableCell align="center" sx={{borderRight: "1px solid #ddd"}}>
                <CustomCheckbox
                name="allSelect"
                checked={!users.some((user) => user?.isChecked !== true)}
                onChange={handleChange}               
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                번호
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                제목
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                작성자
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                조회수
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                날짜
              </TableCell>
              <TableCell align="center">수정</TableCell>
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
                  role="checkbox"
                  key={index}
                  sx={{
                    textDecoration: "none",
                    // "&:hover": {background: "#ddd"},
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
                    />
                  </TableCell>
                  <TableCell
                    sx={{borderRight: "1px solid #ddd"}}
                    align="center"
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{borderRight: "1px solid #ddd"}}
                    align="center"
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    sx={{borderRight: "1px solid #ddd"}}
                    align="center"
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    sx={{borderRight: "1px solid #ddd"}}
                    align="center"
                  >
                    {row.carbs}
                  </TableCell>
                  <TableCell
                    sx={{borderRight: "1px solid #ddd"}}
                    align="center"
                  >
                    {row.protein}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      component={Link}
                      to={`/notification`}
                      sx={{
                        borderRadius: "12px",
                        width: "60px",
                        height: "28px",
                        "&:hover": {backgroundColor: "#6d6d6d"},
                        background: "#9a9a9a",
                        color: "#ffffff !important",
                        fontSize: "11px",
                        fontWeight: "300",
                      }}
                      variant="contained"
                      color="info"
                    >
                      {row.apple}
                    </Button>
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
          page={page}
          onChange={handleChangePage}
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
    </Box>
  );
};

export default NoticeTab1;
