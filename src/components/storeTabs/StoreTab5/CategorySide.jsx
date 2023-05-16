import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  createPointCategoryByUserId,
  deletePointCategoryId,
  getPointCategoriesByUserId,
  updatePointCategoryById,
} from "../../../api/point";
import { useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { FormInputText } from "../../../form-components/FormInputText";
import CloseIcon from "@mui/icons-material/Close";

export default function CategorySide({ user, categories, setCategories }) {
  const methods = useForm();
  const { handleSubmit, control } = methods;
  const [opens, setOpens] = useState({
    open: false,
    open1: false,
    open2: false,
    activeCategory: 0,
  });

  async function deleteCategory() {
    await deletePointCategoryId(user.token, opens.activeCategory)
      .then(() => {
        setCategories(
          categories.filter((item) => item.catId !== opens.activeCategory)
        );
        setOpens({ ...opens, open2: false, open1: false });
      })
      .catch((err) => console.log(err));
  }

  async function updateCategory(values) {
    await updatePointCategoryById(user.token, {
      ...values,
      catId: opens.activeCategory,
    })
      .then(({ data }) => {
        setCategories(
          categories.map((item) =>
            item.catId === data.catId
              ? { ...item, catName: data.catName }
              : item
          )
        );
        setOpens({ ...opens, open1: false });
      })
      .catch((err) => console.log(err));
  }

  async function createCategory(values) {
    await createPointCategoryByUserId(user.token, {
      ...values,
      managerId: user.id,
    })
      .then(({ data }) => {
        setCategories([...categories, { catId: data, catName: values.name }]);
        setOpens({ ...opens, open: false });
      })
      .catch((err) => console.log(err));
  }

  return (
    <Box>
      <Typography
        sx={{ fontSize: "16px", fontWeight: 500, mb: "20px", mt: "30.5px" }}
      >
        상품 분류
      </Typography>
      <TableContainer
        sx={{
          width: "320px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          height: "auto",
          borderBottom: "0",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ background: "#fafbfc", height: "40px" }}>
              <TableCell
                sx={{
                  p: "0px",
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
                colSpan={2}
              >
                상품 분류
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              ".css-5c74i7-MuiTableCell-root": { padding: "6.5px 10px" },
            }}
          >
            {categories.map((category, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  sx={{
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>{category.catName}</Typography>
                  <Button
                    onClick={() =>
                      setOpens({
                        ...opens,
                        open1: true,
                        activeCategory: category.catId,
                      })
                    }
                    sx={{
                      height: "26px",
                      background: "#f1f4f6",
                      ":hover": { backgroundColor: "#f1f4f6" },
                      borderRadius: "10px",
                      color: "#707070",
                    }}
                  >
                    수정
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow
              sx={{
                ".css-1ex1afd-MuiTableCell-root": { padding: "10px 10px" },
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell>
                <Button
                  sx={{
                    color: "#707070",
                    m: 0,
                    p: 0,
                    ":hover": { backgroundColor: "#fff", color: "#914BEB" },
                  }}
                  onClick={() => {
                    setOpens({ ...opens, open: true });
                  }}
                >
                  <AddCircleOutlineOutlinedIcon /> &nbsp; &nbsp; 상품 분류 추가
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <Modal
        open={opens.open}
        onClose={() => setOpens({ ...opens, open: false })}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            width: "606px",
            height: "369px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#fff",
              background: "#202020",
              height: "51px",
              borderRadius: "10px 10px 0 0",
              p: "0px 20px",
            }}
          >
            <Typography className="title" sx={{ fontSize: "16px" }}>
              상품 분류 등록
            </Typography>
            <CloseIcon onClick={() => setOpens({ ...opens, open: false })} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "160px",
              columnGap: "24px",
            }}
          >
            <Typography>분류명</Typography>
            <FormInputText
              color="info"
              control={control}
              sx={{ width: "370px", height: "40px" }}
              name="name"
              placeholder="분류명을 입력하여 주세요."
            />
          </Box>
          <Divider sx={{ color: "#e1e1e1" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              m: 2,
              columnGap: "8px",
              height: "156px",
            }}
          >
            <Button
              sx={{
                borderRadius: "10px",
                border: "none",
                background: "#c5c5c5",
                color: "#fff",
                "&:hover": { border: "none", background: "#c5c5c5" },
              }}
              variant="outlined"
              onClick={() => {
                setOpens({ ...opens, open: false });
              }}
            >
              취소
            </Button>
            <Button
              sx={{ borderRadius: "10px" }}
              variant="contained"
              onClick={handleSubmit(createCategory)}
            >
              저장
            </Button>
          </Box>
        </div>
      </Modal>
      <Modal
        open={opens.open1}
        onClose={() => setOpens({ ...opens, open1: false, activeCategory: 0 })}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            width: "606px",
            height: "369px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#fff",
              background: "#202020",
              height: "52px",
              borderRadius: "10px 10px 0 0",
              p: "0px 20px",
            }}
          >
            <Typography className="title" sx={{ fontSize: "16px" }}>
              상품 분류 수정
            </Typography>
            <CloseIcon onClick={() => setOpens({ ...opens, open1: false })} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "160px",
              columnGap: "24px",
            }}
          >
            <Typography>분류명</Typography>
            <FormInputText
              color="info"
              control={control}
              sx={{ width: "370px", height: "40px" }}
              name="name"
              placeholder="음료"
            />
          </Box>
          <Divider sx={{ color: "#e1e1e1" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              m: 2,
              columnGap: "8px",
              height: "156px",
            }}
          >
            <Button
              sx={{
                borderRadius: "10px",
                border: "none",
                background: "#c5c5c5",
                color: "#fff",
                "&:hover": { border: "none", background: "#c5c5c5" },
              }}
              variant="outlined"
              onClick={() => {
                setOpens({ ...opens, open1: false });
              }}
            >
              취소
            </Button>
            <Button
              sx={{ borderRadius: "10px", background: "#707070" }}
              variant="contained"
              onClick={() => {
                setOpens({ ...opens, open1: false });
                setOpens({ ...opens, open2: true });
              }}
            >
              삭제
            </Button>
            <Button
              sx={{ borderRadius: "10px" }}
              variant="contained"
              onClick={handleSubmit(updateCategory)}
            >
              저장
            </Button>
          </Box>
        </div>
      </Modal>
      <Modal open={opens.open2}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "420px",
            height: "300px",
            bgcolor: "#fff",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box sx={{ p: "20px" }}>
            <CloseIcon
              sx={{ float: "right" }}
              onClick={() => {
                setOpens({ ...opens, open2: false });
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  mt: "70px",
                  ml: "80px",
                }}
              >
                회원 정보를 모두 삭제하시겠습니까?
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  mt: "10px",
                  ml: "115px",
                  fontWeight: 600,
                }}
              >
                수업을 취소하시겠습니까?
              </Typography>

              <Button
                size="large"
                sx={{
                  background: "#935BE3",
                  color: "#fff",
                  borderRadius: "10px",
                  mt: "53px",
                  ml: "35%",
                  height: "40px",
                  width: "120px",
                  fontSize: "14px",
                  ":hover": { background: "#935BE3", color: "#fff" },
                }}
                onClick={deleteCategory}
              >
                수업 취소하기
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
