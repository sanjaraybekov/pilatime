import { Box, Button, Checkbox, Typography, Tabs, Tab } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import PrivacyConsentTab from "./PrivacyConsentTab";
import ExchangeTab from "./ExchangeTab";
import ServiceTab from "./ServiceTab";

const MessageTab1 = () => {
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleTab = (tab) => {
    switch (tab) {
      case "one":
        return <PrivacyConsentTab setValue={setValue} />;
      case "two":
        return <ServiceTab setValue={setValue} />;
      case "three":
        return <ExchangeTab setValue={setValue} />;

      default:
        return <PrivacyConsentTab />;
    }
  };

  const theme = useTheme();

  return (
    <Box
      sx={{ height: "631px", border: "1px solid #e1e1e1", borderRadius: "4px" }}
    >
      <Box sx={{ m: "20px" }}>
        <Tabs
          sx={{
            "& .css-dvam5w-MuiButtonBase-root-MuiTab-root": {
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              border: "1px solid #ddd",
              width: "196px",
              minHeight:'36px',
              mr: '2px',
              padding: "1px 1px",
              fontSize: "13px",
            },
            "& .css-dvam5w-MuiButtonBase-root-MuiTab-root.Mui-selected": {
              background: "#ae84ea",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
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
          <Tab value="one" label="개인 정보 동의" />
          <Tab value="two" label="서비스 이용 약관" />
          <Tab value="three" label="교환/환불 안내" />
        </Tabs>
        <Box sx={{mt: '-8px'}}> 
        {handleTab(value)}
        </Box>
      </Box>
    </Box>
  );
};

export default MessageTab1;
