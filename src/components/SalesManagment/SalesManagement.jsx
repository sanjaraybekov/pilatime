import React from "react";
import { Box, FormControl, MenuItem, Paper, Select, Tab, Tabs, Typography, } from "@mui/material";
import SalesManagTab1 from "./SalesManagTab1";
import SalesManagTab2 from "./SalesManagTab2";
import AnimationPage from "../../pages/AnimationPage";

const SalesManagement = () => {
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleTab = (tab) => {
    switch (tab) {
      case "one":
        return <SalesManagTab1 setValue={setValue} />;
      case "two":
        return <SalesManagTab2 setValue={setValue} />;
      default:
        return <SalesManagTab1 />;
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
            height: "60px",
            borderRadius: "10px",
            mb: "10px",
            width: "1340px",
          }}
        >
          <Typography sx={{ ml: "40px", fontSize: "18px", fontWeight: 500 }}>지점 선택</Typography>
          <FormControl
            color="info"
            size="small"
            sx={{ ml: "30px", width: "360px", "&:hover": { border: "none" } }}
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
            width: "1340px",
            background: "#fff",
            borderRadius: "10px",
            padding: "30px 40px 60px 40px",
          }}
        >
          <Tabs
            sx={{
              "& .css-dvam5w-MuiButtonBase-root-MuiTab-root": {
                borderRadius: "12px",
                border: "1px solid #ddd",
                m: "10px 2px 0 0",
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
            <Tab value="one" label="결제 내역" />
            <Tab value="two" label="정산 내역" />
          </Tabs>
          <hr style={{ border: "1px solid #e1e1e1" }} />
          {handleTab(value)}
        </Box>
      </div>
    </AnimationPage>
  );
};

export default SalesManagement;
