import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";

const DATE_FORMAT = "YYYY/MM/DD";

export const FormInputDate = ({ name, renderInput, sx, control, variant }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            fullWidth
            sx={sx}
            inputFormat={DATE_FORMAT}
            variant={variant}
            autoOk
            renderInput={renderInput}
            {...field}
          />
        )}
      />
    </LocalizationProvider>
  );
};
