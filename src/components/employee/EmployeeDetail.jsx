import React from "react";
import { Box, Typography, Tabs, Tab, Paper } from "@mui/material";
import { Link } from "react-router-dom";

import EmployeeTab1 from "./EmployeeTab1";
import EmployeeTab2 from "./EmployeeTab2";

function EmployeeDetail() {
  const [selectedTab, setSelectedTab] = React.useState("one");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const handleTab = (tab) => {
    switch (tab) {
      case "one":
        return <EmployeeTab1 />;
      case "two":
        return <EmployeeTab2 />;
      case "three":
        return "<EmployeeTab3 />";
      case "four":
        return "<EmployeeTab4 />";

      default:
        return <EmployeeTab1 />;
    }
  };

  return (
    <Box
      component={Paper}
      style={{
        background: "white",
        borderRadius: "5px",
        padding: "40px",
        width: selectedTab === "one" ? "1080px" : "1340px",
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
          to="/employeeSetting"
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
          <Typography sx={{ ml: "8px", fontSize: "18px", fontWeight: "550" }}>
            임직원 정보
          </Typography>
        </Link>

        <Link
          style={{
            color: "#7832dc",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 550,
          }}
          to="/employeeSetting"
        >
          목록으로
        </Link>
      </Box>
      <hr style={{ border: "1px solid #e1e1e1", margin: "22px 0" }} />

      <div>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "22px", mb: "23px" }}>
            홍길동 님
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "36px",
          }}
        >
          <Tabs
            sx={{
              "& .css-dvam5w-MuiButtonBase-root-MuiTab-root": {
                borderRadius: "12px",
                border: "1px solid #ddd",
                mr: "2px",
                width: "100px",
                minHeight: "36px !important",
                p: "0",
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
            <Tab value="one" label="임직원 정보" />
            <Tab value="two" label="담당회원 내역" />
            <Tab value="three" label="수업/예약 내역" disabled />
            <Tab value="four" label="급여정산 내역" disabled />
          </Tabs>
        </Box>

        <hr
          style={{
            border: "1px solid #e1e1e1",
            margin: "12.5px 0px 24.5px 0px",
          }}
        />
      </div>
      {handleTab(selectedTab)}
    </Box>
  );
}

export default EmployeeDetail;
