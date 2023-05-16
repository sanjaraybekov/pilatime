import React from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarIcon from "./CalendarIcon";
import { TextField } from "@mui/material";
import { days } from "./data";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CustomDatePicker = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} dateFormats={{ monthAndYear: 'YYYY. MM' }}>
      <DatePicker
        inputFormat="YYYY/MM/DD"
        value={value}
        onChange={onChange}
        components={{ OpenPickerIcon: CalendarIcon }}
        componentsProps={{ actionBar: { actions: ['today'] } }}
        dayOfWeekFormatter={e => <span style={{ fontSize: '12px', letterSpacing: '0px', color: '#C6C6C6' }}>{days[e]}</span>}
        showDaysOutsideCurrentMonth={true}
        renderInput={(params) => (
          <TextField
            color="info"
            size="small"
            sx={{
              // width: "10vw",
              "& .css-i4bv87-MuiSvgIcon-root": {
                fill: "#914beb !important",
              },
            }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
