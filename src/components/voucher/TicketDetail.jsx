import React, { useRef } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CancelIcon from "@mui/icons-material/Cancel";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useTheme } from "@mui/material/styles";
import "./ticket.css";
import CustomCheckbox from "../CustomCheckbox";
import IOSSwitch from "./IosSwitch";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CalendarIcon from "../CalendarIcon";
import { useState } from "react";
import {
  converterJsonToFormData,
  dateConverter,
  jsonToFormData,
  jsonToFormDataa,
} from "../../utils/methods";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FormInputText } from "../../form-components/FormInputText";
import { useForm } from "react-hook-form";
import { FormInputDropdown } from "../../form-components/FormInputDropdown";
import FormInputCEditor from "../../form-components/FormInputCEditor";
import {
  deleteTicketById,
  getTicketById,
  updateTicket,
} from "../../api/ticket";
import { GridCloseIcon } from "@mui/x-data-grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "440px",
  height: "331px",
  bgcolor: "#fff",
  borderRadius: "10px",
  border: "none",
  padding: "14px 20px",
};
const options = [
  {
    label: "개인 레슨",
    value: "PRIVATE",
  },
  {
    label: "온라인 레슨",
    value: "ONLINE",
  },
  {
    label: "그룹 레슨",
    value: "GROUP",
  },
];

function TicketDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ref = useRef();
  const user = useSelector((state) => state.user.user);
  const theme = useTheme();
  const methods = useForm();
  const { handleSubmit, control, setValue, reset } = methods;
  const [open, setOpen] = useState(false);
  const [ticketData, setTicketData] = useState({
    voucherList: [],
    fullTime: false,
    curList: [{ title: "", outline: "", curImg: {} }],
    regPrice: "",
    disPrice: "",
    price: "",
  });
  const [selected, setSelected] = useState(null);

  const handleAddCard = () => {
    setTicketData({
      ...ticketData,
      curList: [...ticketData.curList, { title: "", outline: "", curImg: {} }],
    });
  };

  const handleSelect = (id) => {
    setSelected(id);
  };

  const handleUploadTicketImages = (e) => {
    setTicketData({
      ...ticketData,
      voucherList: ticketData.voucherList.map((obj, index) => {
        if (index === selected) {
          return {
            ...obj,
            voucherImg: e.target.files[0],
            voucherUrl: (window.URL || window.webkitURL).createObjectURL(
              e.target.files[0]
            ),
          };
        }
        return obj;
      }),
    });
  };

  function uploadImages(e) {
    const images = [];
    for (var i = 0; i < e.target.files.length; i++) {
      images.push({
        voucherImg: e.target.files[i],
        voucherUrl: (window.URL || window.webkitURL).createObjectURL(
          e.target.files[i]
        ),
      });
    }
    setTicketData({
      ...ticketData,
      voucherList: [...ticketData.voucherList, ...images],
    });
  }

  function setCard(e, index) {
    setTicketData({
      ...ticketData,
      curList: ticketData.curList.map((card, i) => {
        return i === index
          ? { ...card, [e.target.name]: e.target.value }
          : card;
      }),
    });
  }
  function handleClose() {
    setOpen(false);
  }

  function uploadCardImages(e, index) {
    setTicketData({
      ...ticketData,
      curList: ticketData.curList.map((card, i) => {
        return i === index
          ? {
              ...card,
              curImg: e.target.files[0],
              fileName: e.target.files[0].name,
            }
          : card;
      }),
    });
  }

  function deleteCurImage(index) {
    setTicketData({
      ...ticketData,
      curList: ticketData.curList.map((card, i) => {
        return i === index
          ? {
              ...card,
              curImg: {},
              fileName: "",
            }
          : card;
      }),
    });
  }

  function deleteTicket() {
    deleteTicketById(id, user.token)
      .then((res) => {
        console.log(res);
        navigate("/storevoucher");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const submit = (values) => {
    const { fullTime, branchName, ...filterTicketData } = ticketData;
    const {
      title,
      outline,
      curList,
      voucherList,
      price,
      regPrice,
      disPrice,
      sellEnd,
      sellStart,
      whenChecked,
      ...filterValues
    } = values;

    const filteredData = {
      ...filterTicketData,
      ...filterValues,
      pointsId: 1,
      ticketId: id,
    };

    const formData = converterJsonToFormData(filteredData);

    updateTicket(formData, user.token)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setTicketData({
      ...ticketData,
      price: String(
        Math.round(
          ticketData.regPrice -
            ticketData.regPrice * (ticketData.disPrice / 100)
        )
      ),
    });
  }, [ticketData.disPrice, ticketData.regPrice]);

  useEffect(() => {
    getTicketById(id, user.token)
      .then(({ data }) => {
        setTicketData({
          ...data,
          curList: data.curList.map((item) => ({
            curId: item.id,
            outline: item.outline,
            title: item.title,
            fileName: item.fileName,
          })),
          voucherList: data.voucherList.map((item) => ({
            voucherId: item.id,
            voucherUrl: item.voucherUrl,
          })),
        });
        reset(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  // useEffect(() => {
  //   getPointById(
  //     user.token,
  //     user.storeCreateUserId ? user.storeCreateUserId : user.id
  //   )
  //     .then(({ data }) => {
  //       setTicketData({ ...ticketData, point: data });
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "5px",
        padding: "20px",
        width: "1080px",
      }}
    >
      <p id="data"></p>
      <ul id="item"></ul>

      <Box sx={{ display: "flex", justifyContent: "space-between", m: "20px" }}>
        <Box sx={{ display: "flex" }}>
          <Link
            style={{
              textDecoration: "none",
              color: "#3a3a3a",
              display: "flex",
            }}
            to="/storevoucher"
          >
            <svg
              id="뒤로가기"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                id="Path_6534"
                data-name="Path 6534"
                d="M0,0H24V24H0Z"
                fill="none"
              />
              <circle
                id="Ellipse_96"
                data-name="Ellipse 96"
                cx="11"
                cy="11"
                r="11"
                transform="translate(1 1)"
                fill="#3a3a3a"
              />
              <path
                id="Path_6535"
                data-name="Path 6535"
                d="M6.393,8.579H14V9.865H6.393l3.352,3.448-.884.909L4,9.222l4.861-5,.884.909Z"
                transform="translate(3 2.778)"
                fill="#fff"
              />
            </svg>

            <Typography sx={{ fontSize: "18px", ml: "8px", fontWeight: "550" }}>
              수강권 등록
            </Typography>
          </Link>
        </Box>
        <Link
          style={{
            fontSize: "14px",
            fontWeight: 550,
            color: theme.palette.primary.main,
            textDecoration: "none",
          }}
          to="/storevoucher"
        >
          목록으로
        </Link>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1" }} />
      <Box sx={{ display: "flex", alignItems: "center", mx: 3 }}>
        <Box sx={{ mt: "25px", mb: "25px" }}>
          <FormControlLabel
            sx={{ ml: "10px" }}
            control={<IOSSwitch defaultChecked />}
          />
          <Typography sx={{ ml: "8px", mt: "10px", color: "#935be3" }}>
            판매 ON
          </Typography>
        </Box>
        <Box sx={{ ml: "40px", width: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              다이어트 그룹 레슨 100회 12개월
            </Typography>
            <Button
              sx={{
                width: "61px",
                height: "25px",
                ml: 1,
                borderRadius: "15px",
                p: "0",
              }}
              variant="outlined"
            >
              판매승인
            </Button>
            <Button
              onClick={() => setOpen(true)}
              sx={{
                width: "120px",
                ml: "auto",
                borderRadius: "10px",
                background: "#f1f4f6",
                color: "#707070",
                "&:hover": { backgroundColor: "#F1F4F6" },
              }}
              size="large"
            >
              수강권 복사
              <ContentCopyOutlinedIcon
                sx={{ ml: "10px", width: "20px", height: "16px" }}
              />
            </Button>

            <Modal sx={{ cursor: "pointer" }} open={open} onClose={handleClose}>
              <Box sx={{ ...style }}>
                <GridCloseIcon onClick={handleClose} sx={{ float: "right" }} />
                <Box sx={{ mt: "80px" }}>
                  <Typography sx={{ fontSize: "18px", ml: "100px" }}>
                    수강권을 복사하시겠습니까?
                  </Typography>
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <Typography sx={{ ml: "120px" }}>
                    *복사시 즉시 게시되지 않으며
                  </Typography>
                  <Typography sx={{ ml: "75px" }}>
                    복사한 수강권은 목록에서 확인하실 수 있습니다.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", ml: "120px", mt: "70px" }}>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{
                      background: "#c5c5c5",
                      color: "#fff",
                      pl: "20px",
                      pr: "15px",
                      borderRadius: "10px",
                    }}
                  >
                    취소
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      ml: "10px",
                      borderRadius: "10px",
                      pl: "20px",
                      pr: "12px",
                    }}
                  >
                    복사하기
                  </Button>
                </Box>
              </Box>
            </Modal>
          </Box>
          <Box sx={{ display: "flex" }}>
            <img
              style={{ width: "16px", height: "17px" }}
              src="/images/heart.svg"
              alt="love"
            />
            <Typography sx={{ ml: "5px", fontSize: "12px" }}>
              찜하기 수 {ticketData.likes ? ticketData.likes : 0}
            </Typography>
          </Box>
        </Box>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1" }} />
      <Box sx={{ m: 3 }}>
        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
          기본 정보
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: "18px" }}>
          <Typography className="title" sx={{ width: "8%", fontWeight: 400 }}>
            판매 지점
          </Typography>
          <FormInputText
            control={control}
            sx={{ width: "480px", background: "#f1f4f6", color: "#A1A1A1" }}
            disabled
            staticValue={ticketData.businessName}
            placeholder="지점명."
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: "18px" }}>
          <Typography className="title" sx={{ width: "8%", fontWeight: 400 }}>
            수강권 분류
          </Typography>
          <FormInputDropdown
            disabledItem={<MenuItem disabled>카테고리 선택</MenuItem>}
            name="ticketType"
            control={control}
            options={options}
            sx={{ width: "480px" }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: "18px" }}>
          <Typography className="title" sx={{ width: "8%", fontWeight: 400 }}>
            수강권 명{" "}
          </Typography>
          <FormInputText
            control={control}
            sx={{ width: "480px" }}
            name="name"
            placeholder="수강권 명을 입력해주세요."
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: 1,
            mt: "18px",
          }}
        >
          <Typography className="title" sx={{ width: "8%", fontWeight: 400 }}>
            판매 가격{" "}
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>정상가 </Typography>
          <FormInputText
            control={control}
            sx={{ width: "100px", color: "#707070" }}
            placeholder="999,999"
            staticValue={ticketData.regPrice}
            type="tel"
            onChange={(e) =>
              setTicketData({ ...ticketData, regPrice: e.target.value })
            }
          />
          <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>원</Typography>
          <div
            style={{
              width: "2px",
              height: "31px",
              background: "#ddd",
            }}
          />
          <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
            할인률
          </Typography>
          <FormInputText
            control={control}
            staticValue={ticketData.disPrice}
            sx={{ width: "57px", color: "#707070" }}
            placeholder="99"
            InputProps={{ min: 5, max: 20 }}
            type="tel"
            onChange={(e) =>
              setTicketData({ ...ticketData, disPrice: e.target.value })
            }
          />
          <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>%</Typography>
          <div
            style={{
              width: "2px",
              height: "31px",
              background: "#ddd",
            }}
          ></div>
          <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
            판매가
          </Typography>
          <FormInputText
            control={control}
            sx={{ width: "96px", color: "#111" }}
            staticValue={ticketData.price}
            placeholder="999,999"
            type="tel"
            InputProps={{
              readOnly: true,
            }}
          />
          <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>원</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: "18px" }}>
          <Typography className="title" sx={{ width: "8%", fontWeight: 400 }}>
            판매 기간
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                inputFormat="YYYY/MM/DD"
                value={ticketData.sellStart}
                onChange={(newValue) => {
                  setTicketData({
                    ...ticketData,
                    sellStart: dateConverter(newValue.$d),
                  });
                }}
                components={{
                  OpenPickerIcon: CalendarIcon,
                }}
                renderInput={(params) => (
                  <TextField
                    color="info"
                    sx={{
                      "& .css-i4bv87-MuiSvgIcon-root": {
                        fill: "#914beb !important",
                      },
                      width: "150px",
                    }}
                    size="small"
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
            <p>&nbsp;-&nbsp;</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                inputFormat="YYYY/MM/DD"
                value={ticketData.sellEnd}
                onChange={(newValue) => {
                  setTicketData({
                    ...ticketData,
                    sellEnd: dateConverter(newValue.$d),
                  });
                }}
                // disabled={ticketData.fullTime || !ticketData.startDate}
                minDate={new Date(ticketData.startDate)}
                components={{
                  OpenPickerIcon: CalendarIcon,
                }}
                renderInput={(params) => (
                  <TextField
                    color="info"
                    sx={{
                      "& .css-i4bv87-MuiSvgIcon-root": {
                        fill: "#914beb !important",
                      },
                      width: "150px",
                    }}
                    size="small"
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={ticketData.fullTime}
                onChange={(e) =>
                  setTicketData({
                    ...ticketData,
                    fullTime: e.target.checked,
                  })
                }
                sx={{ borderRadius: "100px" }}
              />
            }
            label="종료일 없음"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: "18px" }}>
          <Typography className="title" sx={{ width: "8%", fontWeight: 400 }}>
            사용 기간
          </Typography>
          <FormInputText
            control={control}
            sx={{ width: "320px" }}
            name="periodOfUse"
            placeholder="사용 기간을 입력해주세요."
          />
          <Typography sx={{ ml: 2, fontWeight: 400 }}>개월</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: "18px" }}>
          <Typography className="title" sx={{ width: "8%", fontWeight: 400 }}>
            사용 횟수
          </Typography>
          <FormInputText
            control={control}
            sx={{ width: "320px" }}
            name="numberOfUse"
            placeholder="사용 횟수를 입력해주세요"
          />
          <Typography sx={{ ml: 2, fontWeight: 400 }}>회</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: "18px" }}>
          <Typography className="title" sx={{ width: "8%", fontWeight: 400 }}>
            참여 강사
          </Typography>
          <Button
            sx={{
              background: "#707070",
              "&:hover": { backgroundColor: "#707070" },
              width: "150px",
              borderRadius: "10px",
            }}
            variant="contained"
          >
            강사 업로드
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: "18px" }}>
          <Typography sx={{ width: "8%" }}></Typography>
          <div
            style={{
              border: "solid 1px #ddd",
              borderRadius: "5px",
              width: "480px",
              height: "98px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, m: 1 }}>
              <Button
                sx={{
                  background: "#fafbfc",
                  borderRadius: "20px",
                  color: theme.palette.primary.main,
                }}
              >
                정우성
              </Button>
              <CancelIcon
                color="info"
                sx={{ "&:hover": { background: "#fff", color: "#914beb" } }}
              />
              <Button
                sx={{
                  background: "#fafbfc",
                  borderRadius: "20px",
                  color: theme.palette.primary.main,
                }}
              >
                전지현{" "}
              </Button>
              <CancelIcon
                color="info"
                sx={{ "&:hover": { background: "#fff", color: "#914beb" } }}
              />
              <Button
                sx={{
                  background: "#fafbfc",
                  borderRadius: "20px",
                  color: theme.palette.primary.main,
                }}
              >
                이정재
              </Button>
              <CancelIcon
                color="info"
                sx={{ "&:hover": { background: "#fff", color: "#914beb" } }}
              />
              <Button
                sx={{
                  background: "#fafbfc",
                  borderRadius: "20px",
                  color: theme.palette.primary.main,
                }}
              >
                김혜수
              </Button>
              <CancelIcon
                color="info"
                sx={{ "&:hover": { background: "#fff", color: "#914beb" } }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, m: 1 }}>
              <Button
                sx={{
                  background: "#fafbfc",
                  borderRadius: "20px",
                  color: theme.palette.primary.main,
                }}
              >
                정우성
              </Button>
              <CancelIcon
                color="info"
                sx={{ "&:hover": { background: "#fff", color: "#914beb" } }}
              />
              <Button
                sx={{
                  background: "#fafbfc",
                  borderRadius: "20px",
                  color: theme.palette.primary.main,
                }}
              >
                전지현{" "}
              </Button>
              <CancelIcon
                color="info"
                sx={{ "&:hover": { background: "#fff", color: "#914beb" } }}
              />
              <Button
                sx={{
                  background: "#fafbfc",
                  borderRadius: "20px",
                  color: theme.palette.primary.main,
                }}
              >
                이정재
              </Button>
              <CancelIcon
                color="info"
                sx={{ "&:hover": { background: "#fff", color: "#914beb" } }}
              />
            </Box>
          </div>
        </Box>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1" }} />
      <Box sx={{ m: 3 }}>
        <Typography sx={{ mt: 2, mb: 2, fontSize: "16px", fontWeight: 500 }}>
          상세 정보
        </Typography>

        <Box>
          <Typography sx={{ width: "11%", fontWeight: 500 }}>
            {" "}
            수강권 이미지
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #ddd",
              width: "1000px",
              pt: "30px",
              mt: 1,
              borderRadius: "5px",
            }}
          >
            {ticketData.voucherList.length ? (
              <>
                <Box
                  className="overscroll"
                  sx={{
                    display: "flex",
                    columnGap: "10px",
                    mx: "20px",
                    pb: "16px", // ml: "10px",
                    // mt: "20px",
                    overflowX: "auto",
                  }}
                >
                  {ticketData.voucherList.map((img, index) => {
                    return (
                      <label htmlFor="imageupload" key={index}>
                        {/* {console.log(img)} */}
                        <img
                          onClick={() => handleSelect(index)}
                          key={index}
                          alt={"업로드 한 이미지 영역"}
                          src={img.voucherUrl}
                          width="240px"
                          height="180px"
                          style={{ objectFit: "cover" }}
                        />
                        <input
                          type="file"
                          id="imageupload"
                          style={{ display: "none" }}
                          onChange={(e) => handleUploadTicketImages(e)}
                        />
                      </label>
                    );
                  })}
                </Box>
              </>
            ) : null}
            <Box sx={{ margin: "16px 20px" }}>
              {ticketData.voucherList.length > 4
                ? 4
                : ticketData.voucherList.length}
              /{ticketData.voucherList.length}
              <Button
                variant="contained"
                component="label"
                sx={{
                  mt: "12px",
                  background: "#707070",
                  "&:hover": { background: "#914beb" },
                  borderRadius: "10px",
                  float: "right",
                }}
              >
                이미지 업로드
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={uploadImages}
                />
              </Button>
              <Typography sx={{ fontSize: "11px", mt: "10px" }}>
                *이미지 업로드 안내 이미지는 최대 8장, PNG/JPEG파일. 파일크기
                최대 8MB, 가로세로 비율은 4:3, 1200*900px 사이즈를 권장합니다.
                등록된 사진을 이용해서 중, 소 썸네일이 자동 생성됩니다.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            mt: "31px",
            width: "11%",
            fontWeight: 500,
          }}
        >
          커리큘럼 등록
        </Typography>
        <Box
          sx={{
            mt: "11px",
            border: "1px solid #ddd",
            width: "1000px",
            padding: "30px 20px 15px",
            pt: "30px",
            pl: "20px",
            borderRadius: "5px",
          }}
        >
          {ticketData.curList.map((card, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                width: "960px",
                mb: "10px",
                border: "1px dashed #ddd",
                background: "#fafbfc",
                borderRadius: "5px",
              }}
            >
              <Box sx={{ display: "flex", margin: "20px" }}>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography>제목</Typography>
                    <FormInputText
                      control={control}
                      staticValue={card.title}
                      onChange={(e) => setCard(e, index)}
                      sx={{
                        width: "370px",
                        height: "40px",
                        ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                          { fontSize: "14px", color: "#111" },
                      }}
                      name="title"
                      inputProps={{ maxLength: "15" }}
                      placeholder="필라테스 커리큘럼 필라."
                    />
                    <Typography sx={{ fontSize: "11px", alignSelf: "end" }}>
                      (15/15)
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: "16px",
                      gap: 2,
                    }}
                  >
                    <Typography>개요</Typography>
                    <FormInputText
                      onChange={(e) => setCard(e, index)}
                      control={control}
                      staticValue={card.outline}
                      name="outline"
                      sx={{ width: "370px" }}
                      inputProps={{ maxLength: "40" }}
                      placeholder="내용을 입력하여 주세요."
                      size="large"
                    />
                    <Typography sx={{ fontSize: "11px", alignSelf: "end" }}>
                      (40/40)
                    </Typography>
                  </Box>
                </Box>
                <div
                  style={{
                    marginLeft: "20px",
                    width: "2px",
                    height: "107px",
                    background: "#ddd",
                  }}
                ></div>
              </Box>
              <Box sx={{ ml: "20px", mt: "24px" }}>
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    background: "#707070",
                    "&:hover": { background: "#914beb" },
                    borderRadius: "10px",
                    color: "#fff",
                    width: "150px",
                  }}
                >
                  이미지 업로드
                  <input
                    hidden
                    ref={ref}
                    accept="image/*"
                    name="curImg"
                    type="file"
                    onChange={(e) => uploadCardImages(e, index)}
                  />
                </Button>
                {card.fileName ? (
                  <Box
                    sx={{ display: "flex", alignItems: "center", mt: "16px" }}
                  >
                    <Button
                      sx={{
                        borderRadius: "15px",
                        background: "#ebebeb",
                        color: "#707070",
                        "&:hover": { backgroundColor: "#ebebeb" },
                        padding: "8px 20px",
                        fontSize: "11px",
                        lineHeight: "11px",
                      }}
                    >
                      {card.fileName}
                    </Button>
                    <CancelIcon
                      onClick={() => deleteCurImage(index)}
                      sx={{ ml: "6px", "&:hover": { color: "#914BEB" } }}
                      color="info"
                    />
                  </Box>
                ) : null}
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              margin: "12px 0 34px 20px",
              justifyContent: "space-between",
            }}
          >
            {ticketData.curList.length !== 5 ? (
              <Box
                onClick={() => handleAddCard()}
                sx={{
                  display: "flex",
                  columnGap: "10px",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  },
                }}
              >
                <ControlPointIcon color="#707070" />
                <Typography>커리큘럼 추가</Typography>
              </Box>
            ) : (
              <div></div>
            )}
            <Typography
              sx={{
                fontSize: "11px",
                color: "#707070",
                letterSpacing: "-0.28px",
              }}
            >
              * 커리큘럼 최대 등록개수 5개
            </Typography>
          </Box>
          <Typography sx={{ color: "#707070", fontSize: "11px" }}>
            * 이미지는 1200*900px 사이즈를 권장합니다. 등록된 사진을 이용해서
            중, 소 썸네일이 자동 생성됩니다. jpg/png 파일만 등록가능합니다.
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              mt: 3,
              fontWeight: 500,
            }}
          >
            클래스 상세
          </Typography>
          <Box
            sx={{
              width: "1000px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              mt: 1,
            }}
          >
            <FormInputCEditor
              setValue={setValue}
              control={control}
              data={ticketData.details}
              name="details"
            />
          </Box>
        </Box>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1" }} />
      <Box
        sx={{
          m: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            onClick={deleteTicket}
            sx={{
              borderRadius: "12px",
              pl: "35px",
              pr: "35px",
              height: "36px",
              background: "#f7f7f7",
              color: "red",
              border: "none",
              "&:hover": {
                border: "none",
                background: "#ef0c23",
                color: "#fff",
                cursor: "default",
              },
            }}
            variant="outlined"
          >
            수강권 삭제
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <CustomCheckbox
            color="primary"
            checked={ticketData.whenChecked}
            onChange={(e) =>
              setTicketData({
                ...ticketData,
                whenChecked: e.target.checked,
              })
            }
          />
          <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
            게시
          </Typography>
          <Typography sx={{ ml: 1, fontSize: "12px", mr: "40px" }}>
            *체크시 등록하신 내용이 즉시 게시됩니다.
          </Typography>
          <Box>
            <Button
              sx={{
                borderRadius: "12px",
                pl: "35px",
                pr: "35px",
                mr: "6px",
                height: "36px",
                background: "#f7f7f7",
                color: "#9a9a9a",
                border: "none",
                "&:hover": { background: "#ddd", cursor: "default" },
              }}
            >
              취소
            </Button>
            <Button
              onClick={handleSubmit(submit)}
              sx={{
                borderRadius: "12px",
                pl: "50px",
                pr: "50px",
                height: "36px",
                background: "#faf7fe",
                "&:hover": {
                  background: "#914beb",
                  color: "#fff",
                  cursor: "default",
                },
              }}
            >
              저장
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default TicketDetail;
