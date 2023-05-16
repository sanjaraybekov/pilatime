import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";


const InquiryDetail = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        background: "white",
        borderRadius: "5px",
        padding: "25px",
        width: "1080px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "10px",
          mb: "20px",
        }}
      >
        <Link
          to="/inquiry"
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

          <Typography sx={{ fontSize: "18px", ml: '8px', fontWeight: '550' }}> 1:1 문의 상세</Typography>
        </Link>

        <Link
          style={{
            color: theme.palette.primary.main,
            fontSize: "14px",
            fontWeight: 550,
            textDecoration: "none",
          }}
          to="/inquiry"
        >
          목록으로
        </Link>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1" }}/>
      <Box sx={{ border: "1px solid #ddd", borderRadius: "5px", mt: 3, p: 2 }}>
        <Box sx={{ display: "flex", mt: 2 }}>
          <Typography sx={{ width: "10%", fontWeight: 600 }}>
            문의 구분
          </Typography>
          <Typography>수강권 구매</Typography>
        </Box>
        <Box sx={{ display: "flex", mt: 2 }}>
          <Typography sx={{ width: "10%", fontWeight: 600 }}>
            작성자
          </Typography>
          <Typography>홍길동</Typography>
        </Box>
        <Box sx={{ display: "flex", mt: 2 }}>
          <Typography sx={{ width: "10%", fontWeight: 600 }}>
            작성일
          </Typography>
          <Typography>2022.11.15</Typography>
        </Box>
        <Box sx={{ display: "flex", mt: 2 }}>
          <Typography sx={{ width: "10%", fontWeight: 600 }}>
            문의 제목
          </Typography>
          <Typography>
            그룹레슨 수강권 구매 관련 문의 드립니다.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography sx={{ width: "10%", fontWeight: 600 }}>
            문의 내용
          </Typography>
          <Typography sx={{ width: '86%' }}>
            안녕하세요. 문의 내용이 표시되는 영역입니다. 문의 내용이 표시되는
            영역입니다. 문의 내용이 표시되는 영역입니다. 문의 내용이 표시되는
            영역입니다. 문의 내용이 표시되는 영역입니다. 문의 내용이 표시되는
            영역입니다. 문의 내용이 표시되는 영역입니다. 문의 내용이 표시되는
            영역입니다. 문의 내용이 표시되는 영역입니다. 문의 내용이 표시되는
            영역입니다. 문의 내용이 표시되는 영역입니다. 문의 내용이 표시되는
            영역입니다. 문의 내용이 표시되는 영역입니다. 문의 내용이 표시되는
            영역입니다. 문의 내용이 표시되는 영역입니다. 문의 내용이 표시되는
            영역입니다. 문의 내용이 표시되는 영역입니다. 문의 내용이 표시되는
            영역입니다. 문의 내용이 표시되는 영역입니다. 문의 내용이 표시되는
            영역입니다. 문의 내용이 표시되는 영역입니다. 문의 내용이 표시되는
            영역입니다. 문의 내용이 표시되는 영역입니다. 문의 내용이 표시되는
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ fontSize: "16px", color: '#3a3a3a', mt: 3, }}>
        개인 레슨
      </Typography>
      <Box sx={{ border: "1px solid #ddd", borderRadius: "5px", mt: 1, p: 3 }}>
        <Typography>필라타임 관리자</Typography>
        <hr style={{ border: "1px solid #e1e1e1" }}/>
        <textarea
          style={{
            marginTop: "20px",
            border: "none",
            backgroundColor: "transparent",
            resize: "none",
            outline: "none",
            width: "100%",
            height: "20vh", color: '#a1a1a1'
          }}
        >
          내용을 입력해주세요
        </textarea>
      </Box>
      <Box sx={{ mt: "20px", display: "flex", justifyContent: "end" }}>
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
            "&:hover": { background: "#ddd" },
          }}
        >
          취소
        </Button>
        <Link to="/inquiry" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              borderRadius: "12px",
              pl: "50px",
              pr: "50px",
              height: "36px",
              background: "#faf7fe",
              "&:hover": { background: "#914beb", color: "#fff" },
            }}
          >
            저장
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default InquiryDetail;
