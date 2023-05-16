import React from "react";
import { Controller } from "react-hook-form";
import { TextareaAutosize } from "@mui/material";

export const FormInputTextArea = ({
  name,
  control,
  disabled,
  label,
  placeholder,
  style,
  minRows,
  maxRows,
  rows,
  multiline
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextareaAutosize
          helperText={error ? error.message : null}
          size="small"
          style={style}
          error={!!error}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          fullWidth
          maxRows={maxRows}
          multiline={multiline}
          rows={rows}
          minRows={minRows}
          disabled={disabled}
          label={label}
        />
      )}
    />
  );
};
