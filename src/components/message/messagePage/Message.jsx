import React from "react";
import { Box, Button, Tabs, Tab, Paper } from "@mui/material";

// import { useTheme } from "@mui/material/styles";
import MessageTab1 from "./MessageTab1";
import MessageTab2 from "./MessageTab2";
import MessageTab3 from "./MessageTab3";
import AnimationPage from "../../../pages/AnimationPage";

const Message = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleTab = (tab) => {
    switch (tab) {
      case "one":
        return <MessageTab1 setValue={setValue} />;
      case "two":
        return <MessageTab2 setValue={setValue} />;
      case "three":
        return <MessageTab3 setValue={setValue} />;
      default:
        return <MessageTab1 />;
    }
  };

  // const theme = useTheme();
  return (
    <AnimationPage>
      <Box
        component={Paper}
        elavation={2}
        sx={{
          background: "#fff",
          borderRadius: "10px",
          padding: "30px 40px 60px 40px",
          width: "1080px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          sx={{
            "& .css-dvam5w-MuiButtonBase-root-MuiTab-root": {
              borderRadius: "12px",
              border: "1px solid #ddd",
              mr: "2px",
              width: "100px",
              minHeight: "36px !important",
              fontSize: "13px",
              p: "0",
            },
            "& .css-dvam5w-MuiButtonBase-root-MuiTab-root.Mui-selected": {
              background: "#ae84ea",
              borderRadius: "12px",
              border: "none",
              color: "#fff",
            },
            "& .css-11g6rvh-MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab value="one" label="회원 앱" />
          <Tab value="two" label="강사 앱" />
          <Tab value="three" label="관리자 웹" />
        </Tabs>
        <hr
          style={{
            border: "1px solid #e1e1e1",
            margin: "0.5px 0px 20.5px 0px ",
            padding:'0px'
          }}
        />
        {handleTab(value)}
        <hr style={{ border: "1px solid #e1e1e1", marginTop: "16.5px" }} />
        <Box
          sx={{
            mt: "12.5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Box>
            <Button
              sx={{
                mr: "6px",
                width: "100px",
                height: "36px",
                background: "#f7f7f7",
                color: "#9a9a9a",
                borderRadius: "12px",
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
                borderRadius: "12px",
                p: "12px 56px 11px 56px",
                "&:hover": { background: "#914BEB", color: "#fff" },
              }}
            >
              저장
            </Button>
          </Box>
        </Box>
      </Box>
    </AnimationPage>
  );
};

export default Message;
