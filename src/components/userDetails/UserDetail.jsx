import React from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  TextareaAutosize,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useParams } from "react-router-dom";
import UserTab1 from "./UserTab1";
import UserTab2 from "./UserTab2";
import UserTab3 from "./UserTab3";
import UserTab4 from "./UserTab4";
import CloseIcon from "@mui/icons-material/Close";

import CustomCheckbox from "../CustomCheckbox";
function UserDetail() {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = React.useState("one");
  const [open, setOpen] = React.useState(false);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleTab = (tab) => {
    switch (tab) {
      case "one":
        return <UserTab1 setSelectedTab={setSelectedTab} id={id} />;
      case "two":
        return <UserTab2 id={id} />;
      case "three":
        return <UserTab3 id={id} />;
      case "four":
        return <UserTab4 id={id} />;
      case "five":
        return "Comp5";
      default:
        return <UserTab1 id={id} />;
    }
  };

  return (
    <div
      style={{
        background: "white",
        borderRadius: "5px",
        padding: "40px",
        width: "1080px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/member"
          style={{ textDecoration: "none", color: "#3a3a3a", display: "flex" }}
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
            회원 등록
          </Typography>
        </Link>

        <Link
          style={{
            color: "#7832dc",
            fontSize: "14px",
            fontWeight: 550,
            textDecoration: "none",
          }}
          to="/member"
        >
          목록으로
        </Link>
      </Box>
      <hr style={{ margin: "22px 0", border: "1px solid #e1e1e1" }} />
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            width: "606px",
            height: "580px",
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
              p: "0px 20px 0px 28px",
            }}
          >
            <Typography className="title" sx={{ fontSize: "16px" }}>
              메시지 전송{" "}
            </Typography>
            <CloseIcon onClick={() => setOpen(false)} />
          </Box>
          <Box sx={{ p: "20px 28px" }}>
            <Box
              sx={{
                transform: "translateX(-10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                // width: "606px",
              }}
            >
              <CustomCheckbox />
              <Typography>SMS 수신 비동의 회원 제외</Typography>
            </Box>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={17}
              style={{
                width: "100%",
                marginTop: "10px",
                borderRadius: "4px",
                padding: "15px",
                border: "1px solid #e1e1e1",
              }}
              placeholder="내용을 입력해주세요"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
              marginRight: "20px",
              columnGap: "8px",
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
              onClick={() => setOpen(false)}
            >
              취소
            </Button>
            <Button
              sx={{ borderRadius: "10px" }}
              variant="contained"
              onClick={() => setOpen(false)}
            >
              보내기
            </Button>
          </Box>
        </div>
      </Modal>
      <div>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "22px", mb: "23px" }}>
            홍길동 님
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "36px",
          }}
        >
          <Tabs
            sx={{
              "& .css-dvam5w-MuiButtonBase-root-MuiTab-root": {
                borderRadius: "12px",
                color: "#3A3A3A",
                border: "1px solid #ddd",
                mr: "2px",
                width: "100px",
                minHeight: "36px !important",
                p: "0",
                fontSize: "13px",
              },

              "& .css-dvam5w-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                background: "#ae84ea",
                borderRadius: "12px",
                border: "none",
                color: "#fff",
              },
              "& .css-11g6rvh-MuiTabs-indicator": {
                display: "none",
                color: "#E1E1E1",
              },
            }}
            value={selectedTab}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="회원 정보" />
            <Tab value="two" label="출결/예약 내역" />
            <Tab value="three" label="수강권 현황" />
            <Tab value="four" label="결제 내역" />
            <Tab value="five" label="쇼핑내역" disabled />
          </Tabs>
          <Box>
            <Button
              sx={{
                borderRadius: "12px",
                height: "36px",
                width: "100px",
                fontSize: "13px",
                mr: "2px",
              }}
              disabled
              variant="outlined"
            >
              수강권 판매
            </Button>
            <Button
              onClick={() => setOpen(true)}
              sx={{
                borderRadius: "12px",
                height: "36px",
                width: "100px",
                fontSize: "13px",
                color: "#914beb",
                "&:hover": {
                  background: "#ae84ea",
                  color: "#fff",
                  border: "none",
                },
              }}
              variant="outlined"
            >
              SMS 발송
            </Button>
          </Box>
        </Box>

        <hr style={{ margin: "12px 0px 0 0px", border: "1px solid #e1e1e1" }} />
      </div>

      {handleTab(selectedTab)}
    </div>
  );
}

export default UserDetail;
