import React from "react";
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Modal, Select, TextField, Typography, } from "@mui/material";
import UserModal from "../../layouts/UserModal";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import CustomCheckbox from "../CustomCheckbox";
import CustomDatePicker from "../CustomDatePicker";
import { fontWeight } from "@mui/system";

function UserTab3() {
  const [startDate, setStartDate] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  return (
    <Box sx={{ m: 2 }}>
      <Typography
        sx={{
          mb: "20px",
          fontSize: "16px",
          fontWeight: "600",
          color: "#3a3a3a",
        }}
      >
        VOD 구독권
      </Typography>

      <Box
        sx={{
          width: "340px",
          borderRadius: "10px",
          border: "1px solid #ddd  ",
        }}
      >
        <div
          style={{
            height: "100px",
            background: "#fafbfc",
            padding: "10px 0 0 20px",
            borderRadius: "10px",
          }}
        >
            <Box sx={{display:'flex', alignItems:"center", mb:'12px'}}>              
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "15px",
                  fontSize: "11px",
                  height: "22px",
                  pt: 1,
                  mr: 2,
                }}
              >
                구독중
              </Button>
              <Typography sx={{ fontSize: "12px", color: "#3a3a3a",fontWeight:550 }}>필라타임</Typography>
            </Box>
       
          <p style={{ fontSize: "15px", fontWeight: "bold", margin: "0px" }}>
            VOD 무제한 12개월 수강권
          </p>
        </div>
        <div style={{ height: "30px" }}>
        <Box sx={{ padding: "6px 20px", display:'flex', alignItems:"center" }}>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",
                
                }}
              >
                유효기간
              </Typography>
              <Typography sx={{fontWeight:550 ,color:'#3a3a3a',ml:'6px'}}>2022.01.02 ~ 2023.01.02</Typography>
            </Box>
        </div>
      </Box>

      <hr
        style={{
          border: "1px solid #e1e1e1",
          marginBottom: "20px",
          marginTop: "30px",
        }}
      />
      
      <Typography
        className="title"
        sx={{ fontSize: "16px", fontWeight: "500", color: "#3a3a3a" }}
      >
        사용 중인 수강권 &nbsp; <span style={{ color: "#7832dc" }}>4</span>
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          rowGap: "30px",
          columnGap: "20px",
          margin: "20px 0",
        }}
      >
        <Box>
          <Box
            sx={{
              width: "340px",
              borderRadius: "10px",
              border: "1px solid #ddd  ",
            }}
          >
            <div
              style={{
                height: "100px",
                background: "#fafbfc",
                padding: "10px 0 0 20px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "auto",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{display:'flex', alignItems:"center"}}>
                  {/* <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "15px",
                      fontSize: "11px",
                      height: "22px",
                      pt: 1,
                      mr: 2,
                    }}
                  >
                    구독중
                  </Button> */}
                  <Typography sx={{ fontSize: "12px", color: "grey", mr:'10px' }}>
                    그룹레슨 
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: "#3A3A3A", fontWeight:550,mr:'95px'   }}>센트리얼 필라테스 선릉점</Typography>
                  <IconButton  color="secondary" onClick={handleMenu}>
                    <MoreVertIcon/>
                  </IconButton>
                </Box>
              </div>
              <p
                style={{ fontSize: "15px", fontWeight: "bold", margin: "0px" }}
              >
                필라테스 그룹레슨 100회 12개월
              </p>
              <p
                style={{
                  float: "right",
                  fontSize: "10px",
                  margin: "0px 14px 0px 0px",
                  color: "grey",
                }}
              >
                {" "}
                <span style={{ color: "#7832dc" }}>67회</span> / 100회
              </p>
            </div>
            <Box sx={{ padding: "6px 20px", display:'flex', alignItems:"center" }}>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",                
                }}
              >
                유효기간
              </Typography>
              <Typography sx={{fontWeight:550 ,color:'#3a3a3a',ml:'6px'}}>2022.01.02 ~ 2023.01.02</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "340px",
              borderRadius: "10px",
              border: "1px solid #ddd  ",
              mt: "30px",
            }}
          >
            <div
              style={{
                height: "100px",
                background: "#fafbfc",
                padding: "10px 0 0 20px",
                borderRadius: "10px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "auto",
                  justifyContent: "space-between",
                }}
              >        
                <Typography sx={{ fontSize: "12px", color: "grey", mr:'10px' }}>
                    그룹레슨 
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: "#3A3A3A", fontWeight:550,mr:'95px'   }}>센트리얼 필라테스 선릉점</Typography>
                  <IconButton  color="secondary" onClick={handleMenu}>
                    <MoreVertIcon/>
                  </IconButton>
              </Box>
              <Typography
                sx={{ fontSize: "15px", fontWeight: "bold", margin: "0px" }}
              >
                필라테스 그룹레슨 100회 12개월
              </Typography>
              <p
                style={{
                  float: "right",
                  fontSize: "10px",
                  margin: "0px 14px 0px 0px",
                  color: "grey",
                }}
              >
                <span style={{ color: "#7832dc" }}>67회</span> / 100회
              </p>
            </div>
            <Box sx={{ padding: "6px 20px", display:'flex', alignItems:"center" }}>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",                
                }}
              >
                유효기간
              </Typography>
              <Typography sx={{fontWeight:550 ,color:'#3a3a3a',ml:'6px'}}>2022.01.02 ~ 2023.01.02</Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              width: "340px",
              borderRadius: "10px",
              border: "1px solid #ddd  ",
            }}
          >
            <div
              style={{
                height: "100px",
                background: "#fafbfc",
                padding: "9px 0 0 20px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "auto",
                  justifyContent: "space-between",
                }}
              >
                <Button
                
                  sx={{
                    background:"#a1a1a1",
                    borderRadius: "10px",
                    fontSize: "11px",
                    height: "22px",                 
                    color:'#fff'
                  }}
                >
                  구독중
                </Button>
                <Typography sx={{ fontSize: "12px", color: "grey", mr:'1px' }}>
                    그룹레슨 
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: "#3A3A3A", fontWeight:550,mr:'5px'   }}>센트리얼 필라테스 선릉점</Typography>
                  <IconButton  color="secondary" onClick={handleMenu}>
                    <MoreVertIcon/>
                  </IconButton>
              </div>
              <p
                style={{ fontSize: "15px", fontWeight: "bold", margin: "0px" }}
              >
                필라테스 그룹레슨 100회 12개월
              </p>
              <p
                style={{
                  float: "right",
                  fontSize: "10px",
                  margin: "0px 14px 0px 0px",
                  color: "grey",
                }}
              >
                {" "}
                <span style={{ color: "#7832dc" }}>67회</span> / 100회
              </p>
            </div>
            <Box sx={{ padding: "6px 20px", display:'flex', alignItems:"center" }}>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",                
                }}
              >
                유효기간
              </Typography>
              <Typography sx={{fontWeight:550 ,color:'#3a3a3a',ml:'6px'}}>2022.01.02 ~ 2023.01.02</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "340px",
              borderRadius: "10px",
              border: "1px solid #ddd ",
              mt: "30px",
            }}
          >
            <div
              style={{
                height: "100px",
                background: "#fafbfc",
                padding: "10px 0 0 20px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "auto",
                 
                }}
              >
                <Typography sx={{ fontSize: "12px", color: "grey", mr:'10px' }}>
                    그룹레슨 
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: "#3A3A3A", fontWeight:550,mr:'95px'   }}>센트리얼 필라테스 선릉점</Typography>
                  <IconButton  color="secondary" onClick={handleMenu}>
                    <MoreVertIcon/>
                  </IconButton>
              </div>
              <Typography
                sx={{ fontSize: "15px", fontWeight: "bold", margin: "0px" }}
              >
                필라테스 그룹레슨 100회 12개월
              </Typography>
              <p
                style={{
                  float: "right",
                  fontSize: "10px",
                  margin: "0px 14px 0px 0px",
                  color: "grey",
                }}
              >
                {" "}
                <span style={{ color: "#7832dc" }}>67회</span> / 100회
              </p>
            </div>
            <div style={{ height: "30px" }}>
            <Box sx={{ padding: "6px 20px", display:'flex', alignItems:"center" }}>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "grey",                
                }}
              >
                유효기간
              </Typography>
              <Typography sx={{fontWeight:550 ,color:'#3a3a3a',ml:'6px'}}>2022.01.02 ~ 2023.01.02</Typography>
            </Box>
            </div>
          </Box>
        </Box>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleCloseMenu();
              handleOpen();
            }}
          >
            담당 강사 변경
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseMenu();
              handleOpen1();
            }}
          >
            기간 / 횟수 변경
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseMenu();
              handleOpen2();
            }}
          >
            이용 가능 지점 변경
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseMenu();
              handleOpen3();
            }}
          >
            수강권 중지 설정
          </MenuItem>
        </Menu>

        {/* modals start */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <UserModal  title={"담당 강사 변경"} handleCloseModal={handleClose}>
            <Box
       
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                mb: 2,
              }}
            >
              <Typography sx={{ width: "30%" }}>현재 강사</Typography>
              <FormControl color="info" size="small" sx={{ width: "100%" }}>
                
                <Select displayEmpty
                inputProps={{ "aria-label": "Without label" }}>
                  <MenuItem >정우성</MenuItem>
                  <MenuItem value={2}>two</MenuItem>
                  <MenuItem value={3}>three</MenuItem>
                  <MenuItem value={4}>four</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pb: 2 }}>
              <Typography sx={{ width: "30%" }}>변경 강사</Typography>
              <FormControl color="info" size="small" sx={{ width: "100%" }}>
                
                <Select displayEmpty
                inputProps={{ "aria-label": "Without label" }}>
                  <MenuItem >강사를 선택해 주세요</MenuItem>
                  <MenuItem value={2}>two</MenuItem>
                  <MenuItem value={3}>three</MenuItem>
                  <MenuItem value={4}>four</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </UserModal>
        </Modal>

        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <UserModal title={"기간/횟수 변경"} handleCloseModal={handleClose1}>
            <Box
            className="form1"
              sx={{
                display: "flex",
                alignItems: "center",
                pb:'30px'
              }}
            >
              <Typography sx={{ width: "100px" }}>기간</Typography>
              <CustomDatePicker value={startDate} onChange={n => setStartDate(n)}/>
              <Typography sx={{ml:'7px', mr:'7px'}}>
                 - 
              </Typography>
              <CustomDatePicker value={startDate} onChange={n => setStartDate(n)}/>
            </Box>

            <Box  className="form1" sx={{ display: "flex", alignItems: "center", pb: "30px" }}>
              <Typography sx={{ width: "90px" }}>전체 횟수</Typography>
              <TextField
                color="info"
                sx={{ width: "100%" }}
                size="small"
                placeholder="9999"
                id="outlined-search"
                type="search"
              />
            </Box>
            <Box  className="form1" sx={{ display: "flex", alignItems: "center", pb: 2 }}>
              <Typography sx={{ width: "90px" }}>남은 횟수</Typography>
              <TextField
                color="info"
                sx={{ width: "100%" }}
                size="small"
                placeholder="9999"
                id="outlined-search"
                type="search"
              />
            </Box>
          </UserModal>
        </Modal>

        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <UserModal
            title={"이용 가능 지점 변경"}
            handleCloseModal={handleClose2}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 1,
                mb: 1,
              }}
            >
              <Typography sx={{ml:"50px", width: "22%" }}>현재 지점 </Typography>
              <Typography sx={{ width: "100%", fontWeight: "bold" }}>
                센트리얼 필라테스 강남구청점
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center",mt:'40px'  }}>
              <Typography sx={{ml:"50px", width: "22%" }}>변경 지점</Typography>
              <FormControl
                color="info"
                size="small"
                sx={{  width: "100%" }}              >
                
                <Select 
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}>
                  <MenuItem >변경하실 지점을 선택해 주세요</MenuItem>
                  <MenuItem value={2}>two</MenuItem>
                  <MenuItem value={3}>three</MenuItem>
                  <MenuItem value={4}>four</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </UserModal>
        </Modal>

        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <UserModal title={"중지 기간 설정"} handleCloseModal={handleClose3}>
            <Box sx={{display:'flex', mb:"51px"}}>
              <Typography sx={{width:'15%', mt:"32px", fontSize:'12px'}}>기간</Typography>
              <Box >
              <Typography sx={{  fontSize: "11px", mb: 1 }}>
                중지 시작일
              </Typography>
              <CustomDatePicker value={startDate} onChange={n => setStartDate(n)}/>
              </Box>
              <Typography sx={{ml:'5px',mr:"5px", mt:"32px"}}> - </Typography>
              <Box>
                <Typography sx={{  fontSize: "11px", mb: 1 }}>수업 재개일</Typography>              
                  <CustomDatePicker value={startDate} onChange={n => setStartDate(n)}/>
              </Box>
            </Box>
            
            


            <Box sx={{ display: "flex", alignItems: "center", pb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: "-10px",
                }}
              >
                <CustomCheckbox/>
                <Typography sx={{ fontWeight: 600 }}>무기한</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pb: 2 }}>
              <Typography
                sx={{
                  fontSize: "13px",
                  width: "100%",
                  fontWeight: 600,
                }}
              >
                * 수강권 환불은 [매출 관리]에서 설정이 가능합니다.
              </Typography>
            </Box>
          </UserModal>
        </Modal>

        {/* modals end */}
      </div>

      <hr style={{ border: "1px solid #e1e1e1", marginBottom: "20px" }}/>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography
          className="title"
          sx={{ fontSize: "16px", fontWeight: "500", color: "#3a3a3a" }}
        >
          만료된 수강권 &nbsp; <span style={{ color: "#a1a1a1" }}>15</span>
        </Typography>
        <Typography className="title" sx={{ textDecoration: "underline " }}>
          전체보기
        </Typography>
      </Box>
      {/* <div
        style={{
          margin: "20px 0",
          color: "grey",
          display: "grid",
          gridTemplateColumns: "auto auto ",
          rowGap: "30px",
        }}
      >
        <Box
          sx={{
            border: "1px solid #ddd",
            width: "500px",
            height: "215px",
            p: 3,
            display: "flex",
            columnGap: "5px",
            alignItems: "center",
          }}
        >
          <div style={{ width: "70%" }}>
            <p style={{ fontSize: "12px", fontWeight: "bold" }}>
              그룹 레슨 &nbsp; 센트리얼 필라테스 선릉점
            </p>
            <Typography className="title">
              필라테스 그룹레슨 100회12개월
            </Typography>
            <p style={{ fontSize: "12px", fontWeight: "bold" }}>만료</p>
          </div>
          <div style={{ height: "170px", borderRight: "2px solid #ddd" }}></div>
          <div
            style={{
              width: "30%",
              padding: "15px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            <p>유효 기간</p>
            2022.01.02 11:32 <br /> ~ <br /> 2023.01.02 23:59
          </div>
        </Box>
        <Box
          sx={{
            border: "1px solid #ddd",
            width: "500px",
            height: "215px",
            p: 3,
            display: "flex",
            columnGap: "5px",
            alignItems: "center",
          }}
        >
          <div style={{ width: "70%" }}>
            <p style={{ fontSize: "12px", fontWeight: "bold" }}>
              그룹 레슨 &nbsp; 센트리얼 필라테스 선릉점
            </p>
            <Typography className="title">
              필라테스 그룹레슨 100회12개월
            </Typography>
            <p style={{ fontSize: "12px", fontWeight: "bold" }}>만료</p>
          </div>
          <div style={{ height: "170px", borderRight: "2px solid #ddd" }}></div>
          <div
            style={{
              width: "30%",
              padding: "15px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            <p>유효 기간</p>
            2022.01.02 11:32 <br /> ~ <br /> 2023.01.02 23:59
          </div>
        </Box>
      </div> */}
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          rowGap: "30px",
          columnGap: "20px",
          margin: "20px 0",
          opacity: "0.4",
        }}
      >
        <Box
          sx={{
            width: "340px",
            borderRadius: "10px",
            border: "1px solid #ddd  ",
          }}
        >
          <div
            style={{
              height: "100px",
              background: "#fafbfc",
              padding: "10px 0 0 20px",
              borderBottom: "1px solid #ebebeb",
              borderRadius: "10px 10px 0 0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "auto",
                justifyContent: "space-between",
              }}
            >
              {/* <Button
                variant="outlined"
                sx={{
                  borderRadius: "15px",
                  fontSize: "11px",
                  height: "22px",
                  pt: 1,
                  mr: 2,
                }}
              >
                구독중
              </Button> */}
              <p style={{ fontSize: "12px", color: "grey" }}>
                {" "}
                그룹레슨 센트리얼 필라테스 선릉점
              </p>
              {/*  <IconButton color="secondary" onClick={handleMenu}>
                <MoreVertIcon/>
              </IconButton>*/}
            </div>
            <p style={{ fontSize: "15px", fontWeight: "bold", margin: "0px" }}>
              필라테스 그룹레슨 100회 12개월
            </p>
            <p
              style={{
                float: "right",
                fontSize: "10px",
                margin: "0px 14px 0px 0px",
                color: "grey",
              }}
            >
              {" "}
              만료
            </p>
          </div>
          <div style={{ height: "30px" }}>
            <p
              style={{
                fontSize: "12px",
                color: "grey",
                margin: "0px",
                padding: "5px 0 0 20px",
              }}
            >
              유효기간 2022.01.02 11:32 ~ 2023.01.02 23:59
            </p>
          </div>
        </Box>
        <Box
          sx={{
            width: "340px",
            borderRadius: "10px",
            border: "1px solid #ddd  ",
          }}
        >
          <div
            style={{
              height: "100px",
              background: "#fafbfc",
              padding: "10px 0 0 20px",
              borderBottom: "1px solid #ebebeb",
              borderRadius: "10px 10px 0 0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "auto",
                justifyContent: "space-between",
              }}
            >
              {/* <Button
                variant="outlined"
                sx={{
                  borderRadius: "15px",
                  fontSize: "11px",
                  height: "22px",
                  pt: 1,
                  mr: 2,
                }}
              >
                구독중
              </Button> */}
              <p style={{ fontSize: "12px", color: "grey" }}>
                {" "}
                그룹레슨 센트리얼 필라테스 선릉점
              </p>
              {/* <IconButton color="secondary" onClick={handleMenu}>
                <MoreVertIcon/>
              </IconButton>*/}
            </div>
            <p style={{ fontSize: "15px", fontWeight: "bold", margin: "0px" }}>
              필라테스 그룹레슨 100회 12개월
            </p>
            <p
              style={{
                float: "right",
                fontSize: "10px",
                margin: "0px 14px 0px 0px",
                color: "grey",
              }}
            >
              {" "}
              만료
            </p>
          </div>
          <div style={{ height: "30px" }}>
            <p
              style={{
                fontSize: "12px",
                color: "grey",
                margin: "0px",
                padding: "5px 0 0 20px",
              }}
            >
              유효기간 2022.01.02 11:32 ~ 2023.01.02 23:59
            </p>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default UserTab3;
