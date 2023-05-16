import React from "react";
import { Grid } from "@mui/material";
import { Paper, Button, Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import AnimationPage from "./AnimationPage";
import { useNavigate } from "react-router-dom";
import CustomCheckbox from "../components/CustomCheckbox";
import { useState } from "react";
import { setUserData } from "../actions/user";
import { authUser } from "../api/user";
import { FormInputText } from "../form-components/FormInputText";
import { useForm } from "react-hook-form";
import { useToast } from "use-toast-mui";

const defaultValues = {
  username: "",
  password: "",
};
const Login = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, control } = methods;
  const toast = useToast();

  const authFormSubmit = async (values) => {
    try {
      setLoading(true);
      const userData = await authUser(values);
      if (userData) {
        dispatch(setUserData(userData));
        setLoading(false);
        toast.success("You are successfully logged in!");
        navigate("/dashboard");
        return true;
      }
    } catch (error) {
      setLoading(false);
      toast.error("User not found!");
      console.log(error);
    }
  };

  return (
    <AnimationPage>
      <div
        style={{
          width: "100%",
          minWidth: "1920px",
          height: "auto",
          display: "flex",
          columnGap: "80px",
          backgroundColor: "#fafbfc",
        }}
      >
        <img
          src="./images/Screen.png"
          alt="spinning lady"
          style={{
            height: "100vh",
            width: "100vh",
            filter: "grayscale(100%)",
          }}
        />

        <Box sx={{ width: "44%", height: "auto" }}>
          <Typography
            sx={{
              mb: "52px",
              mt: "130px",
              fontSize: "32px",
              color: "#7832dc",
              display: "flex",
              alignItems: "center",
              fontWeight: "400",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "9px" }}
              width="28.9"
              height="37.57"
            >
              <path
                d="M14.45 0C6.47 0 0 6.47 0 14.45v23.12l7.973-10.203A14.375 14.375 0 0 0 14.45 28.9c7.981 0 14.45-6.47 14.45-14.45C28.9 6.468 22.43 0 14.45 0ZM2.658 14.45h-.486C2.173 7.668 7.67 2.17 14.45 2.17v.486C7.948 2.657 2.66 7.947 2.66 14.45Zm10.638.734v-9.82h2.305v8.352l7.57 3.529-.975 2.09-8.9-4.151Zm1.153 11.543v-.486c6.503 0 11.792-5.29 11.792-11.792h.486c0 6.78-5.497 12.278-12.278 12.278Z"
                fill="#7832dc"
                fillRule="evenodd"
                data-name="Path 6119"
              />
            </svg>
            Pilatime
          </Typography>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0px 0px 7px #0000001A",
              width: "580px",
              height: "640px",
              borderRadius: "10px",
              elevation: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "38px",
                lineHeight: "34px",
                color: theme.palette.primary.main,
                fontWeight: "100",
                mt: "100px",
                mb: "80px",
              }}
            >
              Feel the Time,
              <span style={{ fontWeight: "400", fontSize: "38px" }}>
                &nbsp;Pilatime
              </span>
            </Typography>
            <Box className="form1">
              <FormInputText
                color="info"
                control={control}
                sx={{
                  mb: "50px",
                  ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                    fontSize: "16px",
                  },
                  width: "371px",
                  height: "24px",
                }}
                name="username"
                id="standard-basic"
                placeholder="ID"
                variant="standard"
              />
              <br />
              <FormInputText
                color="info"
                control={control}
                sx={{
                  mb: "50px",
                  ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                    fontSize: "16px",
                  },
                  width: "371px",
                  height: "24px",
                }}
                name="password"
                id="standard-basic"
                placeholder="PW"
                variant="standard"
                type="password"
              />
            </Box>
            <Box
              sx={{
                width: "390px",
                display: "flex",
                alignItems: "center",
                mb: "40px",
              }}
            >
              <CustomCheckbox />
              <Typography sx={{ color: "#a1a1a1", fontSize: "12px" }}>
                아이디 저장
              </Typography>
            </Box>
            <Button
              onClick={handleSubmit(authFormSubmit)}
              size="large"
              disabled={loading}
              type="submit"
              variant="outlined"
              sx={{
                width: "370px",
                height: "60px",
                borderRadius: "10px",
                fontSize: "16px",
                "&:hover": {
                  background: theme.palette.primary.main,
                  color: "#fff",
                },
              }}
            >
              로그인
            </Button>
            <Typography
              variant="text"
              color="secondary"
              size="large"
              sx={{
                mt: "32px",
                fontSize: "18px",
                color: "#707070",
                "&:hover": { textDecoration: "underline", cursor: "default" },
              }}
            >
              회원가입
            </Typography>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              sx={{ mt: "26px" }}
            >
              <Grid
                item
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                    cursor: "default",
                  },
                  color: "#a1a1a1",
                  fontSize: "12px",
                }}
              >
                아이디 찾기
              </Grid>
              <Grid
                item
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                    cursor: "default",
                  },

                  color: "#a1a1a1",
                  fontSize: "12px",
                }}
              >
                비밀번호 찾기
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </div>
    </AnimationPage>
  );
};

export default Login;
