import * as React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import BadgeIcon from "@mui/icons-material/Badge";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SettingsIcon from "@mui/icons-material/Settings";
import { Fade, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import StoreIcon from "@mui/icons-material/Store";
import { logoutUser } from "../actions/user";
import { useToast } from "use-toast-mui";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: "#222324",
  color: "#fff",

  "& .css-yw020d-MuiAccordionSummary-expandIconWrapper": {
    color: "#fff",
    padding: 0,
    margin: 0,
  },
  "& .css-1l0yxov-MuiButtonBase-root-MuiAccordionSummary-root .MuiAccordionSummary-expandIconWrapper.Mui-expanded":
    {
      color: "#7832dc",
    },
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: "0.9rem",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",

  flexDirection: "reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const drawerWidth = 336;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(9)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(15)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    width: `calc(100% - ${120}px)`,
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const xx = {
  "/dashboard": "",
  "/member": "panel1",
  "/private": "panel2",
  "/storevoucher": "panel3",
  "/inquiry": "panel4",
  "/employeeSetting": "panel5",
  "/storeManagement": "panel6",
  "/salesManagement": "panel7",
  "/setUserList": "panel8",
};

export default function MainLayout(props) {
  // const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);
  const [expanded, setExpanded] = React.useState(xx[location.pathname]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleAccordion = React.useRef(() => {});
  const toast = useToast();
  function logOut() {
    dispatch(logoutUser());
    navigate("/");
    toast.error("Logged out!");
  }

  handleAccordion.current = (accordion) => {
    switch (accordion) {
      case "":
        navigate("/dashboard");
        break;
      case "panel1":
        navigate("/member");
        break;
      case "panel2":
        navigate("/private");
        break;
      case "panel3":
        navigate("/storevoucher");
        break;
      case "panel4":
        navigate("/inquiry");
        break;
      case "panel5":
        navigate("/employeeSetting");
        break;
      case "panel6":
        navigate("/storeManagement");
        break;
      case "panel7":
        navigate("/salesManagement");
        break;
      case "panel8":
        navigate("/setUserList");
        break;
      default:
        return null;
    }
  };

  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  //   setExpanded("");
  // };

  const handleRoute = (route) => {
    switch (route) {
      case "/member":
        return (
          <>
            회원관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            일반회원관리
          </>
        );

      case "/corp":
        return (
          <>
            회원관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            기업회원관리
          </>
        );

      case "/private":
        return (
          <>
            일정관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            개인레슨
          </>
        );

      case "/group":
        return (
          <>
            일정관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            그룹레슨
          </>
        );

      case "/online":
        return (
          <>
            일정관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            온라인레슨
          </>
        );

      case "/storevoucher":
        return (
          <>
            수강권관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            매장수강권
          </>
        );
      case "/vodvoucher":
        return (
          <>
            수강권관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            VOD수강권
          </>
        );

      case "/inquiry":
        return (
          <>
            메시지관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            1:1 문의
          </>
        );

      case "/notice":
        return (
          <>
            메시지관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            공지사항
          </>
        );

      case "/event":
        return (
          <>
            메시지관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            이벤트
          </>
        );

      case "/urgent":
        return (
          <>
            메시지관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            알림
          </>
        );

      case "/message":
        return (
          <>
            메시지관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            공통메시지
          </>
        );

      case "/employeeSetting":
        return (
          <>
            임직원관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            임직원설정
          </>
        );

      case "/payManagement":
        return (
          <>
            임직원관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            급여관리
          </>
        );

      case "/salarySettlement":
        return (
          <>
            임직원관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            급여정산
          </>
        );
      case "/storeManagement":
        return (
          <>
            매장관리{" "}
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            매장 소개
          </>
        );
      case "/salesManagement":
        return (
          <>
            매출 관리
            {/* <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />{" "}
            매출관리 */}
          </>
        );

      case "/userCreate":
        return (
          <>
            회원관리
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            일반회원 관리{" "}
            <NavigateNextIcon
              fontSize="small"
              sx={{ ml: "10px", mr: "8px" }}
            />{" "}
            회원등록
          </>
        );
      case "/user-details":
        return (
          <>
            회원관리
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            일반회원관리{" "}
            <NavigateNextIcon
              fontSize="small"
              sx={{ ml: "10px", mr: "8px" }}
            />{" "}
            회원정보
          </>
        );
      case "/ticketCreate":
        return (
          <>
            수강권관리
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            매장수강권
            <NavigateNextIcon
              fontSize="small"
              sx={{ ml: "10px", mr: "8px" }}
            />{" "}
            수강권등록
          </>
        );

      case "/ticketDetail:id":
        return (
          <>
            수강권관리
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            매장수강권
            <NavigateNextIcon
              fontSize="small"
              sx={{ ml: "10px", mr: "8px" }}
            />{" "}
            수강권정보
          </>
        );
      case "/inquiryDetail":
        return (
          <>
            메시지관리
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            1:1 문의
            <NavigateNextIcon
              fontSize="small"
              sx={{ ml: "10px", mr: "8px" }}
            />{" "}
            작성
          </>
        );
      case "/notification":
        return (
          <>
            메시지관리
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            공지사항
          </>
        );
      case "/payrollDetail":
        return (
          <>
            임직원관리
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            급여관리
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            급여설정상세
          </>
        );
      case "/payrollCreate":
        return (
          <>
            임직원관리
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            급여관리
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            급여설정상세
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            신규급여설정
          </>
        );

      case "/employeeDetail":
        return (
          <>
            임직원관리
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            임직원설정
          </>
        );
      case "/setUserList":
        return (
          <>
            설정
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            운영자관리
          </>
        );
      case "/setUserDetail":
        return (
          <>
            설정
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            운영자관리
            <NavigateNextIcon fontSize="small" sx={{ ml: "10px", mr: "8px" }} />
            운영자등록
          </>
        );

      default:
        return <>대시보드</>;
    }
  };

  const handleSection = (section) => {
    switch (section) {
      case "/member":
        return "일반 회원 관리";

      case "/corp":
        return "기업회원 관리";

      case "/private":
        return "개인 레슨";

      case "/group":
        return "그룹 레슨";

      case "/online":
        return "온라인 레슨";

      case "/storevoucher":
        return "매장 수강권";

      case "/vodvoucher":
        return "VOD 수강권";

      case "/inquiry":
        return "1:1 문의";

      case "/notice":
        return "공지사항";

      case "/event":
        return "이벤트";

      case "/urgent":
        return "알림";

      case "/message":
        return "공통메시지";

      case "/employeeSetting":
        return "임직원 설정";

      case "/payManagement":
        return "급여관리";

      case "/salarySettlement":
        return "급여정산";

      case "/storeManagement":
        return "매장관리";

      case "/salesManagement":
        return "매출관리";

      case "/userCreate":
        return "회원 등록";

      case "/user-details":
        return "회원 정보";

      case "/ticketCreate":
        return "수강권 등록";

      case "/ticketDetail:id":
        return "수강권 정보";

      case "/inquiryDetail":
        return "1:1 문의";

      case "/notification":
        return "공지사항";

      case "/payrollDetail":
        return "급여관리";

      case "/payrollCreate":
        return "급여관리";

      case "/employeeDetail":
        return "임직원 설정 ";

      case "/setUserList":
        return "운영자 관리 ";

      case "/setUserDetail":
        return "운영자 관리";

      default:
        return "대시보드";
    }
  };

  // React.useEffect(()=>{
  //   dispatch(updateLocation(location))
  // },[location])

  React.useEffect(() => {
    handleAccordion.current(expanded);
  }, [expanded]);

  return (
    <Box sx={{ display: "flex" }} className="font-face-layout">
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        color="inherit"
        sx={{
          pl: "40px",
          boxShadow: "none",
          borderBottom: "1px solid #ebebeb",
          height: "125px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: "40px 0 0 0 !important",
            // height: "90px",
          }}
        >
          <img
            onMouseOver={(e) => {
              e.target.style.cursor = "pointer";
            }}
            src="./images/iconSideLeft.svg"
            alt="arrow"
            style={{
              position: "absolute",
              left: "-67px",
              top: "96px",
              transform: !open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.5s",
            }}
            onClick={() => {
              setOpen(!open);
              // setExpanded("");
            }}
          />
          <Typography sx={{ fontSize: "28px !important", fontWeight: "bold" }}>
            {handleSection(location.pathname)}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ pr: "32px" }}>
            <div>
              <Button
                sx={{
                  fontSize: "14px",
                }}
                id="basic-button"
                aria-controls={openMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                color="inherit"
              >
                통합관리자님
              </Button>
              <Menu
                sx={{ borderRadius: "8px", mt: 2 }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    borderRadius: "12px",
                    width: "135px",
                    boxShadow: "0 0 20px #33333326",
                    padding: "8px",
                    ml: -3,
                    // "&:hover": { backgroundColor: "#fff" },
                    "css-rkkp0r-MuiButtonBase-root-MuiMenuItem-root": {
                      // paddingLeft: "1px",
                    },
                  },
                }}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                  sx: { color: "#707070" },
                }}
              >
                <MenuItem
                  sx={{
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                  onClick={handleClose}
                >
                  프로필
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                  onClick={handleClose}
                >
                  이용현황
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                  onClick={handleClose}
                >
                  설정
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                  onClick={handleClose}
                >
                  1:1문의
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                  onClick={handleClose}
                >
                  사용가이드
                </MenuItem>
                <Divider sx={{ color: "#e1e1e1" }} />
                <MenuItem
                  sx={{
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                  component={Link}
                  onClick={logOut}
                  to="/"
                >
                  로그아웃
                </MenuItem>
              </Menu>
            </div>

            <Avatar sx={{ background: "#914BEB" }} onMouseOver={handleClick}>
              <img src="./images/person.svg" alt="user admin" />
            </Avatar>
          </Stack>
        </Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            color: "#9a9a9a",
            fontSize: "13px",
            pt: "10px",
          }}
        >
          {handleRoute(location.pathname) === "대시보드"
            ? ""
            : handleRoute(location.pathname)}
        </Typography>
      </AppBar>
      <Drawer
        transitionDuration={{ enter: 500, exit: 1000 }}
        variant="permanent"
        open={open}
        sx={{
          "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
            background: "#222324",
            color: "#fff",
            height: "100vh",
          },
        }}
      >
        <DrawerHeader
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "124px",
            padding: "0px",
          }}
          className="header"
        >
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "15px" }}
          >
            <div style={{ marginLeft: "48px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.473"
                height="33.115"
              >
                <path
                  d="M12.736 0C5.702 0 0 5.702 0 12.737v20.378l7.028-8.993a12.67 12.67 0 0 0 5.708 1.352c7.035 0 12.737-5.703 12.737-12.737C25.473 5.702 19.77 0 12.736 0ZM2.343 12.736h-.428c0-5.977 4.845-10.822 10.822-10.822v.428c-5.731 0-10.394 4.663-10.394 10.394Zm9.378.647V4.73h2.031v7.36l6.672 3.111-.859 1.842-7.844-3.659Zm1.016 10.175v-.429c5.731 0 10.393-4.662 10.393-10.393h.429c0 5.977-4.845 10.822-10.822 10.822Z"
                  fill="#fff"
                  fillRule="evenodd"
                  data-name="Path 6119"
                />
              </svg>
            </div>
            <Fade in={open}>
              <Paper sx={{ background: "transparent", boxShadow: "none" }}>
                <Typography
                  variant="text"
                  noWrap
                  component="div"
                  sx={{
                    pl: "12px",
                    pb: "8px",
                    color: "#fff",
                    fontSize: "32px",
                  }}
                >
                  Pilatime
                </Typography>
              </Paper>
            </Fade>
          </div>
          <Box
            sx={{
              padding: "20px 22px",
              background:
                location.pathname === "/setUserList" ? "black" : "inherit",
              borderRadius:
                location.pathname === "/setUserList" ? "50% 0 0 50%" : "none",
            }}
          >
            <Fade in={open}>
              <Paper sx={{ background: "transparent", boxShadow: "none" }}>
                <Link style={{ color: "#a1a1a1" }} to="/setUserList">
                  <SettingsIcon
                    onClick={() => setExpanded("panel8")}
                    sx={{
                      fontSize: "24px",
                      p: "0px !important",
                      m: "0px !important",
                      "&:hover": { cursor: "pointer", color: "#914beb" },
                    }}
                  />
                  <Box sx={{ display: "flex" }}></Box>
                </Link>
              </Paper>
            </Fade>
          </Box>
        </DrawerHeader>
        <div style={{ background: "#222324", color: "#fff" }}>
          <Box
            onClick={() => setExpanded("")}
            component={Link}
            to="/dashboard"
            sx={{
              width: "336px",
              height: "60px",
              background: expanded === "" ? "#000" : "rgba(0, 0, 0, .03)",
              textDecoration: "none",
              padding: "0 16px 0 48px",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                cursor: "pointer",
                background: expanded === "" ? "#000" : "#6229B3",
              },
            }}
          >
            <svg
              id="dashboard_outline"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                id="Path_2422"
                data-name="Path 2422"
                d="M0,0H24V24H0Z"
                fill="none"
              />
              <path
                id="Path_2423"
                data-name="Path 2423"
                d="M17.222,4.778V6.556H13.667V4.778h3.556m-8.889,0v5.333H4.778V4.778H8.333m8.889,7.111v5.333H13.667V11.889h3.556M8.333,15.444v1.778H4.778V15.444H8.333M19,3H11.889V8.333H19ZM10.111,3H3v8.889h7.111ZM19,10.111H11.889V19H19Zm-8.889,3.556H3V19h7.111Z"
                transform="translate(1 1)"
                fill={expanded === "" ? "#914beb" : "#ededed"}
              />
            </svg>
            <Fade in={open}>
              <Paper
                sx={{
                  background: "transparent",
                  boxShadow: "none",
                  ml: "16px",
                }}
              >
                <Typography
                  style={{
                    marginTop: "3px",
                    fontSize: "15px",
                    color: "white",
                  }}
                >
                  대시보드
                </Typography>
              </Paper>
            </Fade>
          </Box>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              "& .css-1l0yxov-MuiButtonBase-root-MuiAccordionSummary-root": {
                padding: "0 16px 0 40px",
                width: "336px",
                height: "60px",
                "&:hover": {
                  background: expanded === "panel1" ? "black" : "#6229B3",
                },
                background:
                  expanded && expanded === "panel1" ? "black" : "inherit",
              },
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              {expanded === "panel1" ? (
                <svg
                  id="person_outline"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_6096"
                    data-name="Path 6096"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_6097"
                    data-name="Path 6097"
                    d="M12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Zm0,9c-2.67,0-8,1.34-8,4v3H20V17C20,14.34,14.67,13,12,13Z"
                    fill="#914beb"
                  />
                </svg>
              ) : (
                <svg
                  id="person_outline"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_6096"
                    data-name="Path 6096"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_6097"
                    data-name="Path 6097"
                    d="M12,5.9A2.1,2.1,0,1,1,9.9,8,2.1,2.1,0,0,1,12,5.9m0,9c2.97,0,6.1,1.46,6.1,2.1v1.1H5.9V17c0-.64,3.13-2.1,6.1-2.1M12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Zm0,9c-2.67,0-8,1.34-8,4v3H20V17C20,14.34,14.67,13,12,13Z"
                    fill="#ededed"
                  />
                </svg>
              )}

              <Fade in={open}>
                <Paper
                  sx={{
                    background: "transparent",
                    boxShadow: "none",
                    ml: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: "3px",
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    회원 관리
                  </Typography>
                </Paper>
              </Fade>
            </AccordionSummary>
            {open && (
              <AccordionDetails
                sx={{
                  background: "black",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "72px",
                    rowGap: "24px",
                  }}
                >
                  <Typography
                    component={NavLink}
                    to="/member"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "white", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                    }}
                  >
                    일반 회원 관리
                  </Typography>

                  <Typography
                    component={NavLink}
                    to="/corp"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                      pb: "8px",
                    }}
                  >
                    기업회원 관리
                  </Typography>
                </Box>
              </AccordionDetails>
            )}
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              "& .css-1l0yxov-MuiButtonBase-root-MuiAccordionSummary-root": {
                padding: "0 16px 0 40px",
                width: "336px",
                height: "60px",
                "&:hover": {
                  background: expanded === "panel2" ? "black" : "#6229B3",
                },
                background: expanded === "panel2" ? "black" : "inherit",
              },
            }}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              {expanded === "panel2" ? (
                <svg
                  id="date_range_black_24dp_1_"
                  data-name="date_range_black_24dp (1)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_6120"
                    data-name="Path 6120"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <g
                    id="date_range_black_24dp_2_"
                    data-name="date_range_black_24dp (2)"
                  >
                    <path
                      id="Path_6546"
                      data-name="Path 6546"
                      d="M0,0H24V24H0Z"
                      fill="none"
                    />
                    <path
                      id="Path_6547"
                      data-name="Path 6547"
                      d="M9,11H7v2H9Zm4,0H11v2h2Zm4,0H15v2h2Zm2-7H18V2H16V4H8V2H6V4H5A1.991,1.991,0,0,0,3.01,6L3,20a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,19,4Zm0,16H5V9H19Z"
                      fill="#914beb"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  id="date_range_black_24dp_1_"
                  data-name="date_range_black_24dp (1)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_6120"
                    data-name="Path 6120"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_6121"
                    data-name="Path 6121"
                    d="M7,11H9v2H7ZM21,6V20a2.006,2.006,0,0,1-2,2H5a2,2,0,0,1-2-2L3.01,6A1.991,1.991,0,0,1,5,4H6V2H8V4h8V2h2V4h1A2.006,2.006,0,0,1,21,6ZM5,8H19V6H5ZM19,20V10H5V20Zm-4-7h2V11H15Zm-4,0h2V11H11Z"
                    fill="#ededed"
                  />
                </svg>
              )}

              <Fade in={open}>
                <Paper
                  sx={{
                    background: "transparent",
                    boxShadow: "none",
                    ml: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: "3px",
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    일정 관리
                  </Typography>
                </Paper>
              </Fade>
            </AccordionSummary>
            {open && (
              <AccordionDetails sx={{ background: "black" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "72px",
                    rowGap: "24px",
                  }}
                >
                  <Typography
                    component={NavLink}
                    to="/private"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                    }}
                  >
                    개인 레슨
                  </Typography>
                  <Typography
                    component={NavLink}
                    to="/group"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                    }}
                  >
                    그룹 레슨
                  </Typography>
                  <Typography
                    component={NavLink}
                    to="/online"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                      pb: "8px",
                    }}
                  >
                    온라인 레슨
                  </Typography>
                </Box>
              </AccordionDetails>
            )}
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              "& .css-1l0yxov-MuiButtonBase-root-MuiAccordionSummary-root": {
                padding: "0 16px 0 40px",
                width: "336px",
                height: "60px",
                "&:hover": {
                  background: expanded === "panel3" ? "black" : "#6229B3",
                },
                background: expanded === "panel3" ? "black" : "inherit",
              },
            }}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              {expanded === "panel3" ? (
                <BadgeIcon sx={{ fontSize: "24px", color: "#914BEB" }} />
              ) : (
                <BadgeOutlinedIcon sx={{ fontSize: "24px" }} />
              )}
              <Fade in={open}>
                <Paper
                  sx={{
                    background: "transparent",
                    boxShadow: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#fff",
                      ml: "15px",
                      mt: "3px",
                    }}
                  >
                    수강권 관리
                  </Typography>
                </Paper>
              </Fade>
            </AccordionSummary>
            {open && (
              <AccordionDetails sx={{ background: "black" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "72px",
                    rowGap: "24px",
                  }}
                >
                  <Typography
                    component={NavLink}
                    to="/storevoucher"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                    }}
                  >
                    매장 수강권
                  </Typography>
                  <Typography
                    component={NavLink}
                    to="/vodvoucher"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                      pb: "8px",
                    }}
                  >
                    VOD 수강권
                  </Typography>
                </Box>
              </AccordionDetails>
            )}
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{
              "& .css-1l0yxov-MuiButtonBase-root-MuiAccordionSummary-root": {
                padding: "0 16px 0 40px",
                width: "336px",
                height: "60px",
                "&:hover": {
                  background: expanded === "panel4" ? "black" : "#6229B3",
                },
                background: expanded === "panel4" ? "black" : "inherit",
              },
            }}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              {expanded === "panel4" ? (
                <svg
                  id="email_black_24dp"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_6567"
                    data-name="Path 6567"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_6568"
                    data-name="Path 6568"
                    d="M20,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm0,4-8,5L4,8V6l8,5,8-5Z"
                    fill="#914beb"
                  />
                </svg>
              ) : (
                <svg
                  id="local_post_office_black_24dp"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_6124"
                    data-name="Path 6124"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_6125"
                    data-name="Path 6125"
                    d="M22,6a2.006,2.006,0,0,0-2-2H4A2.006,2.006,0,0,0,2,6V18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2ZM20,6l-8,5L4,6Zm0,12H4V8l8,5,8-5Z"
                    fill="#ededed"
                  />
                </svg>
              )}

              <Fade in={open}>
                <Paper
                  sx={{
                    background: "transparent",
                    boxShadow: "none",
                    ml: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: "3px",
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    메시지 관리
                  </Typography>
                </Paper>
              </Fade>
            </AccordionSummary>
            {open && (
              <AccordionDetails sx={{ background: "black" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "72px",
                    rowGap: "24px",
                  }}
                >
                  <Typography
                    component={NavLink}
                    to="/inquiry"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                    }}
                  >
                    1:1 문의
                  </Typography>
                  <Typography
                    component={NavLink}
                    to="/notice"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                    }}
                  >
                    공지사항
                  </Typography>
                  <Typography
                    component={NavLink}
                    to="/event"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                    }}
                  >
                    이벤트
                  </Typography>
                  <Typography
                    component={NavLink}
                    to="/urgent"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                    }}
                  >
                    알림
                  </Typography>
                  <Typography
                    component={NavLink}
                    to="/message"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                      pb: "8px",
                    }}
                  >
                    공통 메시지
                  </Typography>
                </Box>
              </AccordionDetails>
            )}
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            sx={{
              "& .css-1l0yxov-MuiButtonBase-root-MuiAccordionSummary-root": {
                padding: "0 16px 0 40px",
                width: "336px",
                height: "60px",
                "&:hover": {
                  background: expanded === "panel5" ? "black" : "#6229B3",
                },
                background: expanded === "panel5" ? "black" : "inherit",
              },
            }}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              {expanded === "panel5" ? (
                <GroupsIcon sx={{ fontSize: "24px", color: "#914BEB" }} />
              ) : (
                <GroupsOutlinedIcon sx={{ fontSize: "24px" }} />
              )}
              <Fade in={open}>
                <Paper
                  sx={{
                    background: "transparent",
                    boxShadow: "none",
                    ml: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: "3px",
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    임직원 관리
                  </Typography>
                </Paper>
              </Fade>
            </AccordionSummary>
            {open && (
              <AccordionDetails sx={{ background: "black" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "72px",
                    rowGap: "24px",
                  }}
                >
                  <Typography
                    component={NavLink}
                    to="/employeeSetting"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                    }}
                  >
                    임직원 설정
                  </Typography>
                  <Typography
                    component={NavLink}
                    to="/payManagement"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                    }}
                  >
                    급여 관리
                  </Typography>
                  <Typography
                    component={NavLink}
                    to="/salarySettlement"
                    style={({ isActive }) =>
                      isActive
                        ? { color: "#fff", textDecoration: "none" }
                        : { textDecoration: "none" }
                    }
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                      color: "grey",
                      pb: "8px",
                    }}
                  >
                    급여 정산
                  </Typography>
                </Box>
              </AccordionDetails>
            )}
          </Accordion>
          <Box
            onClick={() => setExpanded("panel6")}
            component={Link}
            to="/storeManagement"
            sx={{
              width: "336px",
              height: "60px",
              background: expanded === "panel6" ? "#000" : "rgba(0, 0, 0, .03)",
              textDecoration: "none",
              padding: "0 16px 0 48px",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                cursor: "pointer",
                background: expanded === "panel6" ? "#000" : "#6229B3",
              },
            }}
          >
            {expanded === "panel6" ? (
              <StoreIcon sx={{ fontSize: "24px", color: "#914BEB" }} />
            ) : (
              <svg
                id="store_black_24dp"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_6126"
                  data-name="Path 6126"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_6127"
                  data-name="Path 6127"
                  d="M18.36,9l.6,3H5.04l.6-3H18.36M20,4H4V6H20Zm0,3H4L3,12v2H4v6H14V14h4v6h2V14h1V12ZM6,18V14h6v4Z"
                  fill="#ededed"
                />
              </svg>
            )}
            <Fade in={open}>
              <Paper
                sx={{
                  background: "transparent",
                  boxShadow: "none",
                  ml: "16px",
                }}
              >
                <Typography
                  sx={{
                    marginTop: "3px",
                    fontSize: "15px",
                    color: "white",
                  }}
                >
                  매장 관리
                </Typography>
              </Paper>
            </Fade>
          </Box>
          <Box
            onClick={() => setExpanded("panel7")}
            component={Link}
            to="/salesManagement"
            sx={{
              width: "336px",
              height: "60px",
              background:
                expanded === "panel7" ? "#000000" : "rgba(0, 0, 0, .03)",
              textDecoration: "none",
              padding: "0 16px 0 48px",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                cursor: "pointer",
                background: expanded === "panel7" ? "#000" : "#6229B3",
              },
            }}
          >
            {expanded === "panel7" ? (
              <svg
                id="money_black_24dp_1_"
                data-name="money_black_24dp (1)"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_6128"
                  data-name="Path 6128"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_6129"
                  data-name="Path 6129"
                  d="M15,16h3a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1v6A1,1,0,0,0,15,16Zm1-6h1v4H16ZM9,16h3a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H9A1,1,0,0,0,8,9v6A1,1,0,0,0,9,16Zm1-6h1v4H10ZM5,8H7v8H5ZM2,4V20H22V4ZM20,18H4V6H20Z"
                  fill="#914beb"
                />
              </svg>
            ) : (
              <svg
                id="money_black_24dp_1_"
                data-name="money_black_24dp (1)"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_6128"
                  data-name="Path 6128"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_6129"
                  data-name="Path 6129"
                  d="M15,16h3a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1v6A1,1,0,0,0,15,16Zm1-6h1v4H16ZM9,16h3a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H9A1,1,0,0,0,8,9v6A1,1,0,0,0,9,16Zm1-6h1v4H10ZM5,8H7v8H5ZM2,4V20H22V4ZM20,18H4V6H20Z"
                  fill="#ededed"
                />
              </svg>
            )}
            <Fade in={open}>
              <Paper
                sx={{
                  background: "transparent",
                  boxShadow: "none",
                  ml: "16px",
                }}
              >
                <Typography
                  sx={{
                    marginTop: "3px",
                    fontSize: "15px",
                    color: "white",
                  }}
                >
                  매출 관리
                </Typography>
              </Paper>
            </Fade>
          </Box>
        </div>
      </Drawer>

      <Box
        component="main"
        sx={{
          width: "100%",
          p: "145px 40px 8% 40px",
          background: "#fafbfc",
          height: "auto",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
