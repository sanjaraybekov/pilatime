import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TableCell,
  TableHead,
  Table,
  TableContainer,
  Stack,
  TableRow,
  TableBody,
  Pagination,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getPointById } from "../../api/point";

function StoreTab4() {
  const perPage = 5;
  const user = useSelector((state) => state.user.user);
  const [point, setPoint] = useState();
 
  const [page, setPage] = useState(1);
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setPage(1);
  }, [perPage]);

  useEffect(() => {
    getPointById(
      user.token,
      user.storeCreateUserId ? user.storeCreateUserId : user.id
    )
      .then(({ data }) => {
        setPoint(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    point && (
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "20.5px",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
            지점 목록
          </Typography>
          <Button
            component={Link}
            sx={{
              width: "122px",
              height: "36px",

              borderRadius: "10px",
              border: "1px solid #914beb",
              ":hover": { backgroundColor: "#914BEB", color: "#fff" },
              fontSize: "13px",
            }}
          >
            신규 지점 등록
          </Button>
        </Box>
        <Box sx={{ mt: "20px", pb: "20px" }}>
          <TableContainer
            sx={{ border: "1px solid #ddd", borderRadius: "5px" }}
          >
            <Table size="small" aria-label="a dense table">
              <TableHead sx={{ background: "#fafbfc" }}>
                <TableRow sx={{ height: "40px" }}>
                  <TableCell
                    align="center"
                    sx={{
                      minWidth: "90px",
                      borderRight: "1px solid #ddd",
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                  >
                    지점 번호
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                  >
                    지점명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                  >
                    지점 연락처
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                  >
                    지점 관리자
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                  >
                    담당자 연락처
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                  >
                    담당자 이메일
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: 500, fontSize: "12px" }}
                  >
                    지점 유형
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows1
                .filter(
                  (_, id) => id >= (page - 1) * perPage && id <= page * perPage
                )
                .map((row, index) => ( */}
                <TableRow
                  role="checkbox"
                  key={point.id}
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
                    padding="checkbox"
                  >
                    {1}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid #ddd" }}
                    align="center"
                  >
                    {point.businessName}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid #ddd" }}
                    align="center"
                    component="th"
                    scope="row"
                  >
                    {point.businessNumber}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid #ddd" }}
                    align="center"
                  >
                    {point.username}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid #ddd" }}
                    align="center"
                  >
                    {point.phoneNumber}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid #ddd" }}
                    align="center"
                  >
                    {point.email_1}
                  </TableCell>
                  <TableCell
                    sx={{ borderRight: "1px solid #ddd" }}
                    align="center"
                  >
                    {point.businessType}
                  </TableCell>
                  {/* <TableCell align="center">{row.nuts}</TableCell> */}
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <Stack spacing={1} sx={{ mt: "20px", ml: "40%", pb: "146px" }}>
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
              ".css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon": {
                color: "#fff",
              },
            }}
          />
        </Stack> */}
        </Box>
      </div>
    )
  );
}

export default StoreTab4;
