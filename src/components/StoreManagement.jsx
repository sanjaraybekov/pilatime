import React from "react";
import {
  Box,
  Divider,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import StoreTab1 from "./storeTabs/StoreTab1";
import StoreTab2 from "./storeTabs/StoreTab2";
import StoreTab3 from "./storeTabs/StoreTab3";
import StoreTab4 from "./storeTabs/StoreTab4";
import StoreTab5 from "./storeTabs/StoreTab5";
import AnimationPage from "../pages/AnimationPage";
import Admins from "./Admins";
import AdminManager from "./AdminManager";

const StoreManagement = () => {
  const [selectedTab, setSelectedTab] = React.useState(1);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const handleTab = (tab) => {
    switch (tab) {
      case 1:
        return (
          <Admins>
            <StoreTab1 setSelectedTab={setSelectedTab} />
          </Admins>
        );
      case 2:
        return (
          <AdminManager>
            <StoreTab2 setSelectedTab={setSelectedTab} />
          </AdminManager>
        );
      case 3:
        return <StoreTab3 />;
      case 4:
        return <StoreTab4 />;
      case 5:
        return <StoreTab5 />;
      default:
        return <StoreTab1 />;
    }
  };
  return (
    <AnimationPage>
      <div>
        <Box
          className="disable-fieldset"
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#e1e1e1",
            height: "60px",
            borderRadius: "10px",
            mb: "10px",
            width: "1080px",
          }}
        >
          <Typography sx={{ ml: "40px", fontSize: "18px", fontWeight: 500 }}>
            지점 선택
          </Typography>
          <FormControl
            color="info"
            size="small"
            sx={{ ml: "30px", width: "360px" }}
          >
            <Select
              defaultValue="0"
              variant="outlined"
              sx={{ background: "#fff" }}
            >
              <MenuItem disabled value="0">
                조회하실 지점을 선택해주세요.
              </MenuItem>
              <MenuItem value="1">Market.</MenuItem>
              <MenuItem value="2">Market1</MenuItem>
              <MenuItem value="3">Market2</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          component={Paper}
          elavation={2}
          sx={{
            background: "#fff",
            borderRadius: "10px",
            padding: "30px 40px 0px 40px",
            width: "1080px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Tabs
                sx={{
                  "& .css-dvam5w-MuiButtonBase-root-MuiTab-root": {
                    borderRadius: "12px",
                    border: "1px solid #ddd",
                    mr: "2px",
                    width: "100px",
                    minHeight: "36px !important",
                    p: "0px",
                    fontWeight: 500,
                    fontSize: "13px",
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
                value={selectedTab}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value={1} label="매장 정보" />
                <Tab value={2} label="매장 소개" />
                <Tab value={3} label="예약 정책" disabled />
                <Tab value={4} label="지점 설정" />
                <Tab value={5} label="상품 관리" />
              </Tabs>
            </Box>
          </Box>

          <Divider sx={{ color: "#e1e1e1" }} />

          {handleTab(selectedTab)}
        </Box>
      </div>
    </AnimationPage>
  );
};

export default StoreManagement;
