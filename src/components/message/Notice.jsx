import React from "react";
import { Box, Button, FormControl, MenuItem, Paper, Select, Tab, Tabs, Typography, } from "@mui/material";

import NoticeTab1 from "./NoticeTab1";
import { Link } from "react-router-dom";
import AnimationPage from "../../pages/AnimationPage";

const Notice = () => {
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleTab = (tab) => {
    switch (tab) {
      case "one":
        return <NoticeTab1 setValue={setValue} />;

      default:
        return <NoticeTab1 />;
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
            p: "20px 40px",
            height: "60px",
            borderRadius: "10px",
            mb: 1,
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
              <MenuItem value="1">
                Market.
              </MenuItem>
              <MenuItem value="2">
                Market1
              </MenuItem>
              <MenuItem value="3">
                Market2
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          component={Paper}
          elavation={2}
          sx={{
            background: "#fff",
            borderRadius: "10px",
            padding: "30px 40px",
            width: "1080px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Tabs
                sx={{
                  "& .css-dvam5w-MuiButtonBase-root-MuiTab-root": {
                    borderRadius: "12px",
                    border: "1px solid #ddd",
                    m: "0 2px 0 0",
                    width: "100px",
                    minHeight: "36px",
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
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value="one" label="회원 앱" />
                <Tab value="two" label="강사 앱" />
                <Tab value="three" label="관리자 웹" />
              </Tabs>
            </Box>
            <Button
              LinkComponent={Link}
              to="/notification"
              sx={{
                height: "36px",
                borderRadius: "12px",
                "&:hover": { backgroundColor: "#914BEB", color: "#fff" },
              }}
              variant="outlined"
            >
              글쓰기
            </Button>
          </Box>
          <hr
            style={{ border: "1px solid #e1e1e1", margin: "0px 0px 20px 0px" }}
          />
          {handleTab(value)}
        </Box>
      </div>
    </AnimationPage>
  );
};

export default Notice;
