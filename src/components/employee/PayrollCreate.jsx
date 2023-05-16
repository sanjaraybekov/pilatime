import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TimeSelector from "./timeSelector";
import CustomCheckbox from "../CustomCheckbox";

const PayrollCreate = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "5px",
        padding: "40px",
        width: "1080px",
        minHeight: "560px",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", opacity: 2 }}
      >
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
              급여 설정 등록
            </Typography>
          </Link>
        </Box>
        <Link
          style={{
            color: theme.palette.primary.main,
            textDecoration: "none",
            fontWeight: 550,
            fontSize: "14px",
          }}
          to="/payrollDetail"
        >
          목록으로
        </Link>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1", marginTop: "19px" }} />
      <Typography sx={{ fontSize: "22px", fontWeight: "bold", mt: "20px" }}>
        홍길동 님
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pt: "33px",
          gap: 1,
          ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
            { padding: "11px 14px" },
        }}
      >
        <Typography sx={{ width: "100px", fontWeight: 500 }}>
          적용 기간
        </Typography>
        <Typography sx={{ fontWeight: 500 }}>적용 시작</Typography>
        <TimeSelector />
        <Typography sx={{ fontWeight: 500 }}>-</Typography>
        <Typography sx={{ fontWeight: 500 }}>적용 종료</Typography>
        <TimeSelector />
        <FormControlLabel
          sx={{ ml: "22px" }}
          control={<CustomCheckbox />}
          label="종료일 미지정"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: "20px",
          ".css-1g24dm6-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: "11px 14px",
          },
        }}
      >
        <Typography sx={{ width: "100px", fontWeight: 500 }}>기본급</Typography>
        <TextField
          color="info"
          sx={{ width: "375px" }}
          placeholder="999,999,999"
          id="outlined-search"
          type="search"
        />
        <Typography>원</Typography>
        <Typography>* 공제율 3.3% 자동 반영</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: "20px",
          ".css-1g24dm6-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: "11px 14px",
          },
        }}
      >
        <Typography sx={{ width: "100px", fontWeight: 500 }}>
          개인 레슨 수당
        </Typography>
        <TextField
          color="info"
          sx={{ width: "375px" }}
          placeholder="999,999,999"
          id="outlined-search"
          type="search"
        />
        <Typography>원</Typography>
        <Typography>
          * 회원이 개인 레슨 1회 출석 했을 때 지급되는 고정 수당 금액을
          설정합니다.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: "20px",
          ".css-1g24dm6-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: "11px 14px",
          },
        }}
      >
        <Typography sx={{ width: "100px", fontWeight: 500 }}>
          그룹 레슨 수당
        </Typography>
        <TextField
          color="info"
          sx={{ width: "375px" }}
          placeholder="999,999,999"
          id="outlined-search"
          type="search"
        />
        <Typography>원</Typography>
        <Typography>
          * 회원이 그룹 레슨 1회 출석 했을 때 지급되는 고정 수당 금액을
          설정합니다.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: "20px",
          ".css-1g24dm6-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: "11px 14px",
          },
        }}
      >
        <Typography sx={{ width: "100px", fontWeight: 500 }}>커미션</Typography>
        <TextField
          color="info"
          sx={{ width: "375px" }}
          placeholder="999,999,999"
          id="outlined-search"
          type="search"
        />
        <Typography>%</Typography>
        <Typography>
          * 전체 급여의 해당 비율 만큼의 추가 금액을 지급합니다.
        </Typography>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1", marginTop: "30px" }} />
      <Box
        sx={{ display: "flex", justifyContent: "end", mt: "12px", mb: "20px" }}
      >
        <Button
          sx={{
            mr: "6px",
            width: "100px",
            height: "36px",
            background: "#f7f7f7",
            color: "#9a9a9a",
            borderRadius: "15px",
            p: "12px 37px 11px 37px",
            "&:hover": { background: "#ddd" },
            fontSize: "13px",
          }}
        >
          취소
        </Button>
        <Button
          sx={{
            width: "137px",
            height: "36px",
            background: "#faf7fe",
            borderRadius: "15px",
            p: "12px 56px 11px 56px",
            "&:hover": { background: "#914BEB", color: "#fff" },
          }}
        >
          저장
        </Button>
      </Box>
    </div>
  );
};

export default PayrollCreate;
