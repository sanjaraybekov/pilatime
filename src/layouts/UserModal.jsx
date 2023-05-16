import React from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function UserModal(props) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        width: "600px",
        minHeight: "350px",
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
          {props.title}
        </Typography>
        <CloseIcon onClick={props.handleCloseModal} />
      </Box>
      <Box sx={{ p: "50px 100px 50px 40px" }}>{props.children}</Box>
      <Divider sx={{ color: "#e1e1e1" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: "50px",
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
          onClick={props.handleCloseModal}
        >
          취소
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          variant="contained"
          onClick={props.handleCloseModal}
        >
          저장
        </Button>
      </Box>
    </div>
  );
}

export default UserModal;
