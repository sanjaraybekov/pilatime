import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export const FormInputText = ({
  name="",
  control,
  disabled,
  label,
  onChange,
  staticValue,
  placeholder,
  type = "text",
  rows,
  size="small",
  maxRows,
  InputProps,
  multiline,
  sx,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange: formOnChange, value },
        fieldState: { error },
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size={size}
          name={name}
          sx={sx}
          error={!!error}
          placeholder={placeholder}
          onChange={onChange ? onChange : formOnChange}
          value={staticValue ? staticValue : value}
          rows={rows}
          maxRows={maxRows}
          InputProps={InputProps}
          fullWidth
          multiline={multiline}
          type={type}
          disabled={disabled}
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};
