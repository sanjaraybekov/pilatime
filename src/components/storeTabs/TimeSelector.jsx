import React from "react";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { timer } from "../../constants/constants";

const TimeSelector = ({
  name = "",
  setValue = () => {},
  getValues = () => {},
}) => {
  const startTime = `${name}_startTime`;
  const endTime = `${name}_endTime`;
  const [timeData, setTimeData] = useState({
    sHour: "00",
    sMin: "00",
    eHour: "00",
    eMin: "00",
  });

  useEffect(() => {
    setValue("workTime", {
      ...getValues("workTime"),
      [startTime]: `${timeData.sHour}:${timeData.sMin}`,
      [endTime]: `${timeData.eHour}:${timeData.eMin}`,
    });
  }, [timeData]);

  function valueSetter(e) {
    setTimeData({
      ...timeData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <Select
        sx={{ width: 82, height: 40, mr: "5px" }}
        defaultValue="00"
        name="sHour"
        MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
        onChange={valueSetter}
      >
        {timer.hours.map((i) => (
          <MenuItem value={i}>{i}</MenuItem>
        ))}
      </Select>
      :
      <Select
        sx={{ width: 82, height: 40, ml: "5px" }}
        defaultValue="00"
        name="sMin"
        MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
        onChange={valueSetter}
      >
        {timer.minutes.map((i) => (
          <MenuItem value={i}>{i}</MenuItem>
        ))}
      </Select>
      <div style={{ margin: "0 12px" }}>~</div>
      <Select
        sx={{ width: 82, height: 40, mr: "5px" }}
        defaultValue="00"
        name="eHour"
        MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
        onChange={valueSetter}
      >
        {timer.hours.map((i) => (
          <MenuItem value={i}>{i}</MenuItem>
        ))}
      </Select>
      :
      <Select
        sx={{ width: 82, height: 40, ml: "5px" }}
        defaultValue="00"
        name="eMin"
        MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
        onChange={valueSetter}
      >
        {timer.minutes.map((i) => (
          <MenuItem value={i}>{i}</MenuItem>
        ))}
      </Select>
    </>
  );
};

export default TimeSelector;
