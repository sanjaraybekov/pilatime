import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CustomCheckbox from "../CustomCheckbox";

function SetUserDetail() {
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
          to="/setUserList"
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
          style={{ color: "#7832dc", textDecoration: "none", fontWeight: 550, fontSize:'14px' }}
          to="/setUserList"
        >
          목록으로
        </Link>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1", margin: "24px 0" }} />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontSize: "16px" }}>기본 정보</Typography>
        <Typography sx={{ color: "#ef0c23", fontSize: "11px", ml: 1 }}>
          ( * ) 표시가 있는 항목은 반드시 입력해야 합니다. 관리자권한을 이용해서
          이름,휴대폰 번호,이메일등을 중복확인없이 변경할 수 있습니다.
        </Typography>
      </Box>
      <Box className="form1" sx={{ display: "flex", alignItems: "center" }}>
        <Box>
          <Typography sx={{ mt: "52px", color: "#6229B3", fontWeight:500, fontSize:'12px' }}>이름*</Typography>
          <TextField
            color="info"
            required
            variant="outlined"
            size="small"
            sx={{ mt: "10px", width: "370px", height:"40px" }}
            placeholder="이름을 입력하세요."
          ></TextField>

          <Typography sx={{ mt: "20px", color: "#6229B3", fontWeight:500, fontSize:'12px' }}>닉네임</Typography>
          <TextField
            color="info"
            required
            variant="outlined"
            size="small"
            sx={{ mt: "10px", width: "370px" }}
            placeholder="글 작성시 사용할 닉네임을 입력해주세요."
          ></TextField>

          <Typography sx={{ mt: "20px", color: "#6229B3", fontWeight:500, fontSize:'12px' }}>
            비밀번호
          </Typography>
          <TextField
            color="info"
            required
            type="password"
            variant="outlined"
            size="small"
            sx={{ mt: "10px", width: "370px" }}
            placeholder="영문 대소문자/숫자/특수 문자 중 2가지 이상 조합."
          ></TextField>
        </Box>
        <Box sx={{ ml: "40px" }}>
          <Typography sx={{ mt: "52px", color: "#6229B3", fontWeight:500, fontSize:'12px' }}>
            이메일(로그인ID)*
          </Typography>
          <TextField
            color="info"
            required
            variant="outlined"
            size="small"
            sx={{ mt: "11px", width: "370px" }}
            placeholder="아이디(이메일)를 입력해주세요."
          ></TextField>

          <Typography sx={{ mt: "21px", color: "#6229B3", fontWeight:500, fontSize:'12px' }}>
            휴대폰 번호*
          </Typography>
          <TextField
            color="info"
            required
            variant="outlined"
            size="small"
            sx={{ mt: "11px", width: "370px" }}
            placeholder="휴대폰 번호를 입력하세요."
          ></TextField>

          <Typography sx={{ mt: "21px", color: "#6229B3", fontWeight:500, fontSize:'12px' }}>
            비밀번호 확인
          </Typography>
          <TextField
            color="info"
            required
            type="password"
            variant="outlined"
            size="small"
            sx={{ mt: "10px", width: "370px" }}
            placeholder="비밀번호를 다시 한번 입력해주세요."
          ></TextField>
        </Box>
      </Box>
      <Typography sx={{ mt: "20px", color: "#6229B3", fontWeight:500, fontSize:'12px' }}>
        파트 권한 설정
      </Typography>

      <Box
        sx={{
          border: "2px solid #e1e1e1",
          borderRadius: "5px",
          width: "1000px",
          height: "350px",
          background: "#fafbfc",
          mt: "11px",
        }}
      >
        <Box sx={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr" }}>
          <Box sx={{ borderRight: "1px solid #e1e1e1" }}>
            <Box sx={{ display: "flex", pl: "20px", pt: "20px" }}>
              <Typography sx={{ mt: "10px", pr: "25px", fontWeight: 500 }}>
                운영자
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox defaultChecked />}
                  label="운영자 정보 열람"
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="운영자 계정 생성 및 수정"
                />
              </FormGroup>
            </Box>
            <div style={{ borderBottom: "2px solid #e1e1e1" }}></div>
            <Box sx={{ display: "flex", pl: "20px", pt: "10px" }}>
              <Typography sx={{ mt: "10px", pr: "35px", fontWeight: 500 }}>
                회원
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox defaultChecked />}
                  label="회원 정보 열람"
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="회원 정보 수정(비번, 상태 변경 포함) 및 삭제"
                />
                <FormControlLabel
                  control={<CustomCheckbox defaultChecked />}
                  label="알림(공지) 발송"
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="메일 발송"
                />
              </FormGroup>
            </Box>
            <div style={{ borderBottom: "2px solid #e1e1e1" }}></div>
            <Box sx={{ display: "flex", pl: "20px", pt: "10px" }}>
              <Typography sx={{ mt: "10px", pr: "25px", fontWeight: 500 }}>
                운영자
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox defaultChecked />}
                  label="운영자 정보 열람"
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="운영자 계정 생성 및 수정"
                />
              </FormGroup>
            </Box>
          </Box>
          <Box sx={{ borderRight: "1px solid #e1e1e1", pb: "10px" }}>
            <Box sx={{ display: "flex", pl: "20px", pt: "20px" }}>
              <Typography sx={{ mt: "10px", pr: "30px", fontWeight: 500 }}>
                수강권 관리
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox defaultChecked />}
                  label="수강권 정보 열람"
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="수강권 생성 및 수정"
                />
              </FormGroup>
            </Box>
            <div style={{ borderBottom: "2px solid #e1e1e1" }}></div>
            <Box sx={{ display: "flex", pl: "20px", pt: "10px", mb: "10px" }}>
              <Typography sx={{ mt: "10px", pr: "30px", fontWeight: 500 }}>
                메시지 관리
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox defaultChecked />}
                  label="1:1 문의글 열람 및 답글 작성"
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="공지/이벤트 작성 및 수정"
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="약관 등록 및 수정(이용 약관 등)"
                />
              </FormGroup>
            </Box>
            <div style={{ borderBottom: "2px solid #e1e1e1" }}></div>
            <Box sx={{ display: "flex", pl: "20px", pt: "10px" }}>
              <Typography sx={{ mt: "10px", pr: "30px", fontWeight: 500 }}>
                임직원 관리
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox defaultChecked />}
                  label="매장 정보 열람"
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="매장 정보 수정"
                />
              </FormGroup>
            </Box>
          </Box>
          <Box sx={{ pb: "10px" }}>
            <Box sx={{ display: "flex", pl: "20px", pt: "20px" }}>
              <Typography sx={{ mt: "10px", pr: "30px", fontWeight: 500 }}>
                매장 관리
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox defaultChecked />}
                  label="임직원 정보 열람"
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="임직원 등록 및 수정"
                />
              </FormGroup>
            </Box>
            <div style={{ borderBottom: "2px solid #e1e1e1" }}></div>
            <Box sx={{ display: "flex", pl: "20px", pt: "10px" }}>
              <Typography sx={{ mt: "10px", pr: "30px", fontWeight: 500 }}>
                매출 관리
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox defaultChecked />}
                  label="매출 정보 열람"
                />
              </FormGroup>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "50px", mb: "25px" }}
      >
        <Typography sx={{ mt: "20px", color: "#6229B3", fontWeight:500, fontSize:'12px' }}>사용 여부</Typography>
        <RadioGroup sx={{ mt: "20px" }} row>
          <FormControlLabel value="사용" control={<Radio />} label="사용" />
          <FormControlLabel
            sx={{ ml: "45px" }}
            value="비사용"
            control={<Radio />}
            label="비사용"
          />
        </RadioGroup>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1" }} />
      <Box
        sx={{ display: "flex", justifyContent: "end", mb: "50px", mt: "12.5px" }}
      >
        <Button
          sx={{
            borderRadius: "12px",
            pl: "35px",
            pr: "35px",
            mr: '6px',
            background: "#f7f7f7",
            width:'100px',
            height:'36px',
            color: "#9a9a9a",
            border: "none",
            "&:hover": { background: "#ddd" },
          }}
        >
          취소
        </Button>
        <Button
          LinkComponent={Link}
          to="/setUserList"
          sx={{
            width:'137px',
            height:'36px',
            borderRadius: "12px",
            pl: "50px",
            pr: "50px",
            background: "#faf7fe",
            "&:hover": { background: "#914beb", color: "#fff" },
          }}
        >
          저장
        </Button>
      </Box>
    </div>
  );
}

export default SetUserDetail;
