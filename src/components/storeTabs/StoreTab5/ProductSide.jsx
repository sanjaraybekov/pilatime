import {
  Box,
  Button,
  Divider,
  Modal,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormInputDropdown } from "../../../form-components/FormInputDropdown";
import { FormInputText } from "../../../form-components/FormInputText";
import {
  createPointProduct,
  deletePointProduct,
  getPointById,
  getPointProductsByPointId,
  updatePointProduct,
} from "../../../api/point";

var qs = require("qs");
const initialQuery = {
  page: 1,
  size: 10,
};

export default function ProductSide({ user, categories }) {
  const [query, setQuery] = useState(initialQuery);
  const [products, setProducts] = useState({ content: [] });
  const methods = useForm();
  const [pointId, setPointId] = useState();
  const { handleSubmit, control, reset } = methods;
  const [opens, setOpens] = useState({
    open2: false,
    open3: false,
    activeProduct: {},
  });

  function handleChangePage(event, value) {
    setQuery({ ...query, page: value });
  }
  async function getPointId() {
    await getPointById(user.token, user.id).then(({ data }) =>
      setPointId(data.pointId)
    );
  }

  useEffect(() => {
    reset(opens.activeProduct);
  }, [opens.activeProduct.productId]);

  async function deleteProduct() {
    await deletePointProduct(user.token, opens.activeProduct.productId)
      .then(() => {
        setProducts({
          ...products,
          content: products.content.filter(
            (item) => item.productId !== opens.activeProduct.productId
          ),
        });
        setOpens({ ...opens, open3: false });
      })
      .catch((err) => console.log(err));
  }

  async function updateProduct(values) {
    await updatePointProduct(user.token, {
      ...values,
      productId: opens.activeProduct.productId,
    })
      .then(() => {
        setProducts({
          ...products,
          content: products.content.map((item) =>
            item.productId === opens.activeProduct.productId
              ? { ...item, ...values }
              : item
          ),
        });
        setOpens({ ...opens, open3: false });
      })
      .catch((err) => console.log(err));
  }

  async function createProduct(values) {
    await createPointProduct(user.token, values)
      .then(({ data }) => {
        setProducts({ ...products, content: [...products.content, data] });
        setOpens({ ...opens, open2: false });
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setProducts({
      ...products,
      content: products.content.filter(
        (item) => categories.find((cat) => cat.catId === item.catId) && item
      ),
    });
  }, [categories]);

  useEffect(() => {
    getPointId();
  }, []);

  useEffect(() => {
    if (pointId) {
      const queryString = qs.stringify(query);
      getPointProductsByPointId(user.token, pointId, queryString)
        .then(({ data }) => {
          setProducts(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [pointId, query]);
  console.log(products);
  return (
    <Box sx={{ width: "600px", mt: "30.5px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: 500, mb: "20px" }}>
          상품 목록
        </Typography>
        <Button
          onClick={() => setOpens({ ...opens, open2: true, activeProduct: {} })}
          sx={{
            width: "122px",
            height: "36px",
            borderRadius: "10px",
            border: "1px solid #914beb",
            ":hover": { backgroundColor: "#914BEB", color: "#fff" },
            fontSize: "13px",
            mb: "10px",
          }}
        >
          신규 상품 등록
        </Button>
      </Box>
      {products && !products.empty ? (
        <>
          <TableContainer
            sx={{ border: "1px solid #e1e1e1", borderRadius: "4px" }}
          >
            <Table size="small" aria-label="a dense table">
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
                    분류
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                  >
                    상품명
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                  >
                    가격
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: 500, fontSize: "12px" }}
                  >
                    재고
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.content.map((product, index) => (
                  <TableRow
                    onClick={() => {
                      setOpens({
                        ...opens,
                        open3: true,
                        activeProduct: product,
                      });
                    }}
                    role="checkbox"
                    key={index}
                    sx={{
                      height: "40px",
                      textDecoration: "none",
                      "&:last-child td, &:last-child th": { borderBottom: 0 },
                    }}
                  >
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                      component="th"
                      scope="row"
                    >
                      {
                        categories.find((cat) => cat.catId === product.catId)
                          ?.catName
                      }
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                      component="th"
                      scope="row"
                    >
                      {product.productName}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                    >
                      {product.price}
                    </TableCell>
                    <TableCell align="center">{product.inventory}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack spacing={1} sx={{ mt: "20px", ml: "40%" }}>
            <Pagination
              count={Math.ceil(products.totalElements / query.size)}
              onChange={handleChangePage}
              page={query.page}
              color="primary"
              variant="outlined"
              shape="rounded"
              sx={{
                "& .css-1k2i9p6-MuiButtonBase-root-MuiPaginationItem-root": {
                  background: "#e1e1e1",
                  border: "none",
                  height: "24px",
                  minWidth: "24px",
                  mb: "150px",
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
        </>
      ) : null}
      <Modal
        open={opens.open2}
        onClose={() => setOpens({ ...opens, open2: false })}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            width: "606px",
            height: "477px",
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
              신규 상품 등록
            </Typography>
            <CloseIcon onClick={() => setOpens({ ...opens, open2: false })} />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "50px",
              columnGap: "24px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>상품명</Typography>
            <FormInputText
              control={control}
              sx={{ width: "370px", height: "40px" }}
              name="productName"
              placeholder="상품명을 입력하여 주세요."
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "16px",
              columnGap: "10px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>상품 분류</Typography>
            <FormInputDropdown
              sx={{ width: "370px" }}
              name="catId"
              control={control}
              placeholder="상품 분류 선택"
              options={categories.map((category) => ({
                label: category.catName,
                value: category.catId,
              }))}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "10px",
              mt: "16px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>상품 가격</Typography>
            <FormInputText
              control={control}
              sx={{ width: "370px", height: "40px" }}
              name="price"
              placeholder="상품 가격을 입력하여 주세요."
            />
            <Typography sx={{ fontSize: "12px" }}>원</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "16px",
              mb: "40px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>재고량</Typography>
            <FormInputText
              control={control}
              sx={{ width: "350px", height: "40px", mr: "10px", ml: "24px" }}
              name="inventory"
              placeholder="재고량을 입력하여 주세요."
            />
            <Typography sx={{ fontSize: "12px" }}>개</Typography>
          </Box>
          <Divider sx={{ color: "#e1e1e1" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              m: 2,
              columnGap: "8px",
              height: "126px",
              pb: "60px",
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
              // onClick={props.handleCloseModal}
            >
              취소
            </Button>

            <Button
              sx={{ borderRadius: "10px" }}
              variant="contained"
              onClick={handleSubmit(createProduct)}
            >
              저장
            </Button>
          </Box>
        </div>
      </Modal>

      <Modal
        open={opens.open3}
        onClose={() => setOpens({ ...opens, open3: false })}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            width: "606px",
            height: "477px",
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
              신규 상품 등록
            </Typography>
            <CloseIcon onClick={() => setOpens({ ...opens, open3: false })} />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "50px",
              columnGap: "24px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>상품명</Typography>
            <FormInputText
              control={control}
              sx={{ width: "370px", height: "40px" }}
              name="productName"
              placeholder="상품명을 입력하여 주세요."
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "16px",
              columnGap: "10px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>상품 분류</Typography>
            <FormInputDropdown
              sx={{ width: "370px" }}
              name="catId"
              control={control}
              placeholder="상품 분류 선택"
              options={categories.map((category) => ({
                label: category.catName,
                value: category.catId,
              }))}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "10px",
              mt: "16px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>상품 가격</Typography>
            <FormInputText
              control={control}
              sx={{ width: "370px", height: "40px" }}
              name="price"
              placeholder="상품 가격을 입력하여 주세요."
            />
            <Typography sx={{ fontSize: "12px" }}>원</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "16px",
              mb: "40px",
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>재고량</Typography>
            <FormInputText
              control={control}
              sx={{ width: "350px", height: "40px", mr: "10px", ml: "24px" }}
              name="inventory"
              placeholder="재고량을 입력하여 주세요."
            />
            <Typography sx={{ fontSize: "12px" }}>개</Typography>
          </Box>
          <Divider sx={{ color: "#e1e1e1" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "8px",
              height: "126px",
              pb: "60px",
              pt: "30px",
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
                setOpens({ ...opens, open3: false });
              }}
            >
              취소
            </Button>
            <Button
              sx={{ borderRadius: "10px", background: "#707070" }}
              variant="contained"
              onClick={handleSubmit(deleteProduct)}
            >
              삭제
            </Button>
            <Button
              sx={{ borderRadius: "10px" }}
              variant="contained"
              onClick={handleSubmit(updateProduct)}
            >
              저장
            </Button>
          </Box>
        </div>
      </Modal>
    </Box>
  );
}
