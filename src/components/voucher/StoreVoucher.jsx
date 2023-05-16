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
import { useEffect } from "react";
import { getAllTickets } from "../../api/ticket";
import { useSelector } from "react-redux";
import { useState } from "react";
const qs = require("qs");

const initialQuery = { page: 1, size: 10 };

const StoreVoucher = () => {
  const user = useSelector((state) => state.user.user);
  // const [value, setValue] = useState("one");
  const [query, setQuery] = useState(initialQuery);
  // const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(20);
  const [selectedValue, setSelectedValue] = useState("20");
  const [users, setUsers] = useState();

  const handleChangePage = (event, value) => {
    setQuery({ ...query, page: value });
  };
  const handleChangePerPage = (event) => {
    setQuery({ ...query, size: event.target.value });
  };

  async function ticketList(token, query) {
    return await getAllTickets(1, query, token);
  }

  useEffect(() => {
    const queryString = qs.stringify(query);
    if (user) {
      ticketList(user.token, queryString)
        .then(({ data }) => {
          setUsers(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user, query]);
  const handleSelectedValue = (e) => {
    setSelectedValue(e.target.attributes[4].nodeValue);
  };

  return (
    <AnimationPage>
      <div>
        <Box
          className="disable-fieldset"
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#e1e1e1",
            p: "20px 40px",
            height: "60px",
            borderRadius: "10px",
            mb: 1,
            width: "1340px",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
            지점 선택
          </Typography>
          <FormControl
            color="info"
            size="small"
            sx={{ ml: "19px", width: "360px" }}
          >
            <Select
              defaultValue="0"
              variant="outlined"
              sx={{ background: "#fff" }}
            >
              <MenuItem disabled value="0">
                조회하실 지점을 선택해주세요.
              </MenuItem>
              <MenuItem value="1">Market.</MenuItem>
              <MenuItem value="2">Market1</MenuItem>
              <MenuItem value="3">Market2</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {users && !users.empty ? (
          <Box
            component={Paper}
            elavation={2}
            sx={{
              background: "#fff",
              borderRadius: "10px",
              padding: "40px",
              width: "1340px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex" }}>
                <Typography
                  className="title"
                  sx={{ width: "100px", fontWeight: 500 }}
                >
                  수강권 검색
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
                  sx={{
                    background: "#707070",
                    "&:hover": { background: "#707070", color: "#fff" },
                    width: "62px",
                    ml: 1,
                  }}
                  variant="contained"
                >
                  검색
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Button
                  component={Link}
                  to="/ticketCreate"
                  sx={{
                    width: "120px",
                    "&:hover": { background: "#914beb", color: "#fff" },
                    borderRadius: "10px",
                  }}
                  variant="outlined"
                >
                  수강권 만들기
                </Button>

                <Button
                  sx={{ width: "150px", borderRadius: "10px", ml: 1 }}
                  variant="outlined"
                  disabled
                >
                  패키지수강권 만들기
                </Button>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{ width: "100px", fontWeight: 500 }}
                className="title"
              >
                클래스 유형
              </Typography>
              <FormControlLabel
                control={<CustomCheckbox checked />}
                label="개인 레슨"
              />
              <FormControlLabel
                control={<CustomCheckbox />}
                label="그룹 레슨"
              />
              <FormControlLabel
                control={<CustomCheckbox />}
                label="온라인 레슨"
              />
              <FormControlLabel
                control={<CustomCheckbox />}
                label="패키지 레슨"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{ width: "100px", fontWeight: 500 }}
                className="title"
              >
                판매 상태
              </Typography>
              <FormControlLabel control={<CustomCheckbox />} label="승인대기" />
              <FormControlLabel control={<CustomCheckbox />} label="판매 중" />
              <FormControlLabel
                control={<CustomCheckbox />}
                label="판매 종료"
              />
              <FormControlLabel
                control={<CustomCheckbox />}
                label="승인 반려"
              />
            </Box>
            <hr style={{ border: "1px solid #e1e1e1", marginTop: "20px" }} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Box>
                <Typography>( {users.totalElements}개)(1/6페이지)</Typography>
              </Box>
              <Box>
                <FormControl>
                  <Select color="info" defaultValue="정순" size="small">
                    <MenuItem value="정순">정순</MenuItem>
                    <MenuItem value="역순">역순</MenuItem>
                  </Select>
                </FormControl>
                <FormControl color="info" sx={{ ml: 1 }}>
                  <Select color="info" defaultValue="최신순" size="small">
                    <MenuItem value="최신순">최신순</MenuItem>
                    <MenuItem value="가격순">가격순</MenuItem>
                    <MenuItem value="이용횟수순">이용횟수순</MenuItem>
                  </Select>
                </FormControl>
                <FormControl color="info" sx={{ ml: 1 }}>
                  <Select
                    onChange={handleChangePerPage}
                    color="info"
                    defaultValue="20"
                    size="small"
                  >
                    <MenuItem
                      onClick={(e) => handleSelectedValue(e)}
                      value="20"
                      sx={{
                        display: selectedValue === "20" ? "none" : "block",
                      }}
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
                      sx={{
                        display: selectedValue === "50" ? "none" : "block",
                      }}
                    >
                      50개씩 보기
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => handleSelectedValue(e)}
                      value="100"
                      sx={{
                        display: selectedValue === "100" ? "none" : "block",
                      }}
                    >
                      100개씩 보기
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <TableContainer
              sx={{ mt: "10px", border: "1px solid #ddd", borderRadius: "5px" }}
            >
              <Table size="small" aria-label="a dense table">
                <TableHead
                  sx={{
                    background: "#fafbfc",
                    font: "normal normal medium 12px/14px Pretendard",
                  }}
                >
                  <TableRow sx={{ height: "40px" }}>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      지점명
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      클래스 유형
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      수강권명
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      이용기간
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      이용횟수
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      최종가
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      찜하기 수
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontSize: "12px", fontWeight: 500 }}
                    >
                      판매 상태
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {users.content.map((ticket, index) => (
                    <TableRow
                      index
                      component={Link}
                      key={index}
                      to={`/ticketDetail/${ticket.id}`}
                      sx={{
                        height: "40px",
                        textDecoration: "none",
                        // "&:hover": { background: "#ddd" },
                        "&:last-child td, &:last-child th": {
                          borderBottom: 0,
                        },
                      }}
                    >
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          fontSize: "12px",
                        }}
                        align="center"
                        component="th"
                        scope="row"
                      >
                        {ticket.businessName}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          fontSize: "12px",
                        }}
                        align="center"
                        component="th"
                        scope="row"
                      >
                        {ticket.ticketType}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          fontSize: "12px",
                        }}
                        align="center"
                      >
                        {ticket.name}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          fontSize: "12px",
                        }}
                        align="center"
                      >
                        {ticket.periodOfUse}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          fontSize: "12px",
                        }}
                        align="center"
                      >
                        {ticket.numberOfUse}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          fontSize: "12px",
                        }}
                        align="center"
                      >
                        {ticket.price}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderRight: "1px solid #ddd",
                          fontSize: "12px",
                        }}
                        align="center"
                      >
                        {ticket.likes}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align="center">
                        {ticket.sellStatus}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Stack spacing={1} sx={{ mt: "20px", ml: "40%" }}>
              <Pagination
                count={Math.ceil(users.totalElements / query.size)}
                onChange={handleChangePage}
                page={query.page}
                color="primary"
                variant="outlined"
                shape="rounded"
                sx={{
                  "& .css-1k2i9p6-MuiButtonBase-root-MuiPaginationItem-root": {
                    background: "#E1E1E1",
                    // color:'#fff',
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
        ) : null}
      </div>
    </AnimationPage>
  );
};

export default StoreVoucher;
