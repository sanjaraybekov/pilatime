import React from "react";
import { Box, FormControl, MenuItem, Paper, Select, Typography, } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InquiryTab1 from "./InquiryTab1";
import AnimationPage from "../../pages/AnimationPage";

function Inquiry() {
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleTab = (tab) => {
    switch (tab) {
      case "one":
        return <InquiryTab1 setValue={setValue} />;

      default:
        return <InquiryTab1 />;
    }
  };

  return (
    <AnimationPage>
      <div>
        <Box
          className='disable-fieldset'
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#e1e1e1",
            mb: 1,
            p: "20px 40px",
            height: "60px",
            borderRadius: "10px",
            width: "1080px",
          }}
        >
          <Typography sx={{ fontSize: "18px" }}>지점 선택</Typography>
          <FormControl
            color="info"
            size="small"
            sx={{ ml: "19px", width: "360px" }}
          >
            <Select
              defaultValue='0'
              variant="outlined"
              sx={{ background: "#fff" }}
            >
              <MenuItem disabled value="0">
                조회하실 지점을 선택해주세요.
              </MenuItem>
              <MenuItem selected value="2">
                {" "}
                Market1
              </MenuItem>
              <MenuItem selected value="3">
                Market2
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          component={Paper}
          elavation={2}
          sx={{
            boxShadow: "0 0 7px #0000000d",
            background: "#fff",
            borderRadius: "10px",
            padding: "30px 40px",
            width: "1080px",
          }}
        >
          <Tabs
            sx={{
              "& .css-dvam5w-MuiButtonBase-root-MuiTab-root": {
                borderRadius: "12px",
                border: "1px solid #ddd",
                m: "0 2px 0 0",
                width: "100px",
                minHeight: "36px",
                fontSize: "13px",
                p: "0px ",
              },
              "& .css-dvam5w-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                background: "#ae84ea",
                borderRadius: "15px",
                border: "none",
                color: "#fff",
              },
              "& .css-11g6rvh-MuiTabs-indicator": {
                display: "none",
              },
            }}
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="회원 앱" />
            <Tab disabled value="two" label="강사 앱" />
            <Tab disabled value="three" label="관리자 웹" />
          </Tabs>
          <hr
            style={{
              marginBottom: "24px",
              marginTop: 0,
              border: "1px solid #e1e1e1",
            }}
          />
          {handleTab(value)}
        </Box>
      </div>
    </AnimationPage>
  );
}

export default Inquiry;
