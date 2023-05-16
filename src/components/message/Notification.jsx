import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";
import CustomCheckbox from "../CustomCheckbox";


const Notification = () => {

const theme = useTheme();
  return (
    <Box  sx={{background: "#fff", borderRadius: "15px", p: "40px", elevation: 2,width:"1080px"}}>
      <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        
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
          <Typography  sx={{ fontSize: "18px", fontWeight: "500", ml:2}}>
          수강권 등록
          </Typography>
          </Link>
        <Link style={{ color: theme.palette.primary.main, textDecoration:'none',fontWeight:550, fontSize:'14px' }} to="/notice">
        목록으로
        </Link>
      </Box>
      <hr/>
      <Box sx={{height:'624px',mt:3, border:'2px solid #efefef', borderRadius:'10px'}}>
        <Box sx={{height:'82px',margin:'20px', backgroundColor:"#f1f4f6"}}>
        </Box>
      </Box>
      <hr style={{border: "1px solid #e1e1e1", marginTop:'20px'}}/>
      <Box
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
        <Box sx={{display: "flex", alignItems: "center"}}>
          <CustomCheckbox color="primary" />
          <Typography sx={{fontSize: "12px"}}>게시</Typography>
          <Typography sx={{ml: 1, fontSize: "12px"}}>
            *체크시 등록하신 내용이 즉시 게시됩니다.
          </Typography>
        </Box>
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
            "&:hover": { background: "#ddd" },
          }}
        >취소
          </Button>
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
        </Box>
      </Box>

    </Box>
  )
}

export default Notification
