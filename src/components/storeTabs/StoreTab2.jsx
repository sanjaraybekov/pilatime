import React from "react";
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import TimeSelector from "./TimeSelector";
import CustomCheckbox from "../CustomCheckbox";
import { FormInputText } from "../../form-components/FormInputText";
import { useForm } from "react-hook-form";
import { FormInputRadio } from "../../form-components/FormInputRadio";
import FormInputCEditor from "../../form-components/FormInputCEditor";
import { useState } from "react";
import { FormInputMultiCheckbox } from "../../form-components/FormInputMultiCheckbox";
import { createPointIntro, getFacilityList } from "../../api/point";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useToast } from "use-toast-mui";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { scriptUrl } from "../../constants/constants";
import MySearchIcon from "../MySearchIcon";
import { getCoordinatesByAddress } from "../../api/nominatium";

const options = [
  {
    label: "휴무",
    value: false,
  },
  {
    label: "영업",
    value: true,
  },
];

function StoreTab2({setSelectedTab}) {
  const user = useSelector((state) => state.user.user);
  const methods = useForm();
  const { handleSubmit, control, setValue, getValues } = methods;
  const [facilities, setFacilities] = useState();
  const toast = useToast();
  const [address, setAddress] = useState("");
  const open = useDaumPostcodePopup(scriptUrl);

  const submit = async (values) => {
    const newFactilities = facilities.map((facility) => {
      if (values.facilityPoint.includes(facility.facilityName)) {
        return { name: facility.facilityName, yesNot: true };
      }
      return { name: facility.facilityName, yesNot: false };
    });
    await createPointIntro(
      {
        ...values,
        facilityPoint: newFactilities,
        userId: user.storeCreateUserId ? user.storeCreateUserId : user.id,
      },
      user.token
    ).then((res) => {
      toast.success("Point created successfully!");
      setSelectedTab(4);
    });
  };

  const handleComplete = async (data) => {
    await getCoordinatesByAddress(data.addressEnglish).then((data) => {
      setValue("loc1", data[0].coordinate.latitude);
      setValue("loc2", data[0].coordinate.longitude);
      setAddress(data[0].address);
    });
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  useEffect(() => {
    getFacilityList(user.token).then(({ data }) => {
      setFacilities(data);
    });
  }, [user.token]);

  return (
    <div>
      <Typography
        sx={{ mb: "30px", mt: "30px", fontSize: "16px", fontWeight: 500 }}
      >
        매장 소개
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: "16px",
        }}
      >
        <Typography sx={{ mb: "10px", width: "10%", fontWeight: 500 }}>
          매장명
        </Typography>
        <FormInputText
          color="info"
          control={control}
          sx={{
            width: "480px",
          }}
          name="storeName"
          placeholder="www.asdf.co.kr"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: "16px",
        }}
      >
        <Typography sx={{ mt: "10px", width: "10%", fontWeight: 500 }}>
          매장 소개 요약
        </Typography>
        <FormInputText
          color="info"
          control={control}
          sx={{
            width: "480px",
          }}
          rows={2}
          maxRows={2}
          multiline
          inputProps={{ maxLength: "70", maxRows: 2 }}
          name="storeSummary1"
          placeholder="매장 소개를 입력하여 주세요.(70자 이내)"
        />
        <Typography sx={{ mt: 4, pl: "8px", fontSize: "11px" }}>
          {" "}
          (0/70)
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ mt: "10px", width: "10%", fontWeight: 500 }}>
          위치 안내
        </Typography>
        <TextField
          onMouseOver={(e) => (e.target.style.cursor = "pointer")}
          color="info"
          style={{ background: "#fff", width: "480px" }}
          rows={2}
          maxRows={2}
          value={address.addressLine1}
          multiline
          placeholder="위치 안내를 입력하여 주세요.(70자 이내)"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleClick}>
                <p
                  style={{
                    color: "#A1A1A1",
                    margin: "0 14px 0 0",
                    fontSize: "10px",
                  }}
                >
                  도로명, 지번, 건물명 검색
                </p>
                <MySearchIcon />
              </InputAdornment>
            ),
            maxLength: "70",
            maxRows: 2,
          }}
        />
        <Typography sx={{ mt: 4, pl: "8px", fontSize: "11px" }}>
          {" "}
          (0/70)
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: "6px",
        }}
      >
        <Typography sx={{ width: "10%" }}></Typography>
        <Box>
          <FormControlLabel control={<CustomCheckbox />} label="주소와 동일" />
        </Box>
      </Box>
      <Box sx={{ display: "flex", mb: "16px" }}>
        <Typography sx={{ fontWeight: 500, width: "10%" }}>
          영업 시간
        </Typography>
        <Box
          sx={{
            width: "655px",
            p: "20px 30px",
            display: "flex",
            flexDirection: "column",
            rowGap: "5px",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", columnGap: "5px" }}>
            <Typography sx={{ mr: 3, fontSize: "13px" }}>월</Typography>
            <FormInputRadio
              name="workTime.m_openClose"
              control={control}
              options={options}
              sx={{ ml: "24px" }}
              row
            />
            <TimeSelector name="m" setValue={setValue} getValues={getValues} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", columnGap: "5px" }}>
            <Typography sx={{ mr: 3 }}>화</Typography>
            <FormInputRadio
              name="workTime.tu_openClose"
              control={control}
              options={options}
              sx={{ ml: "24px" }}
              row
            />
            <TimeSelector name="tu" setValue={setValue} getValues={getValues} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", columnGap: "5px" }}>
            <Typography sx={{ mr: 3 }}>수</Typography>
            <FormInputRadio
              name="workTime.wen_openClose"
              control={control}
              options={options}
              sx={{ ml: "24px" }}
              row
            />
            <TimeSelector
              name="wen"
              setValue={setValue}
              getValues={getValues}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", columnGap: "5px" }}>
            <Typography sx={{ mr: 3 }}>목</Typography>
            <FormInputRadio
              name="workTime.thur_openClose"
              control={control}
              options={options}
              sx={{ ml: "24px" }}
              row
            />
            <TimeSelector
              name="thur"
              setValue={setValue}
              getValues={getValues}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", columnGap: "5px" }}>
            <Typography sx={{ mr: 3 }}>금</Typography>
            <FormInputRadio
              name="workTime.fri_openClose"
              control={control}
              options={options}
              sx={{ ml: "24px" }}
              row
            />
            <TimeSelector
              name="fri"
              setValue={setValue}
              getValues={getValues}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", columnGap: "5px" }}>
            <Typography sx={{ mr: 3 }}>토</Typography>
            <FormInputRadio
              name="workTime.sat_openClose"
              control={control}
              options={options}
              sx={{ ml: "24px" }}
              row
            />
            <TimeSelector
              name="sat"
              setValue={setValue}
              getValues={getValues}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", columnGap: "5px" }}>
            <Typography sx={{ mr: 3 }}>일</Typography>
            <FormInputRadio
              name="workTime.sun_openClose"
              control={control}
              options={options}
              sx={{ ml: "24px" }}
              row
            />
            <TimeSelector
              name="sun"
              setValue={setValue}
              getValues={getValues}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: "16px",
        }}
      >
        <Typography sx={{ fontWeight: 500, mb: 2, mt: 2, width: "10%" }}>
          매장 소개 요약
        </Typography>
        <FormInputText
          color="info"
          control={control}
          sx={{ width: "653px" }}
          rows={6}
          maxRows={6}
          multiline
          inputProps={{ maxLength: "200", maxRows: 6 }}
          placeholder="이용 안내를 입력하여 주세요.(200자 이내)"
          name="storeSummary2"
        />
        <Typography sx={{ mt: 15, pl: "8px", fontSize: "11px" }}>
          {" "}
          (0/200)
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: "16px",
        }}
      >
        <Typography sx={{ mb: 2, mt: 2, width: "10%", fontWeight: 500 }}>
          시설 안내
        </Typography>
        <Box
          sx={{
            height: "130px",
            width: "653px",
            p: "16px 81px 20px 20px",
            border: "1px solid #e1e1e1",
            borderRadius: "5px",
          }}
        >
          <FormInputMultiCheckbox
            name="facilityPoint"
            control={control}
            sx={{
              label: {
                marginLeft: 0,
                width: "max-content",
                marginRight: "10px",
                marginBottom: "10px",
                position: "relative",
                whiteSpace: "nowrap",
                color: "#fff",
              },
              legend: { display: "none" },
              "span.MuiCheckbox-root": {
                padding: 0,
                position: "absolute",
                width: "100%",
                background: "#FAFBFC",
                height: "100%",
                borderRadius: "15px",
                "&.Mui-checked": {
                  background: "#914beb",
                  "&+span": {
                    color: "#fff",
                  },
                },
              },
              span: {
                padding: "8px 20px",
                zIndex: 5,
                color: "#914BEB",
                fontSize: "13px",
              },
              svg: {
                display: "none",
              },
              input: { display: "none" },
            }}
            options={facilities?.map((item) => ({
              label: item.facilityName,
              value: item.facilityName,
            }))}
            setValue={setValue}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: "16px",
        }}
      >
        <Typography sx={{ mb: 2, mt: 2, width: "10%", fontWeight: 500 }}>
          매장 소개 상세
        </Typography>

        <FormInputCEditor
          setValue={setValue}
          sx={{ width: "923px", height: "425px" }}
          control={control}
          name="storeIntroDet"
        />
      </Box>
      <Divider sx={{ pt: "20px", mb: "12.5px", color: "#e1e1e1" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          columnGap: "6px",
          pb: "60px",
        }}
      >
        <Button
          sx={{
            p: "12px 37px 11px 37px",
            borderRadius: "15px",
            height: "36px",
            width: "100px",
            background: "#f7f7f7",
            color: "#9a9a9a",
            "&:hover": { background: "#ddd" },
          }}
        >
          취소
        </Button>
        <Button
          onClick={handleSubmit(submit)}
          sx={{
            p: "12px 56px 11px 55px",
            borderRadius: "15px",
            height: "36px",
            width: "137px",
            background: "#faf7fe",
            color: "#914beb",
            "&:hover": { background: "#914BEB", color: "#fff" },
          }}
        >
          저장
        </Button>
      </Box>
    </div>
  );
}

export default StoreTab2;
