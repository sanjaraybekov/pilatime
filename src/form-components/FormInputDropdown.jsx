import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

export const FormInputDropdown = ({
  name,
  control,
  sx,
  options,
  placeholder,
  disabledItem = <></>,
}) => {
  const generateSingleOptions = (value) => {
    return options.map((option) => {
      return (
        <MenuItem
          key={option.value}
          selected={option.value === value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"}>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select
            displayEmpty
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            sx={sx}
            key={value}
          >
            {disabledItem}
            {generateSingleOptions(value)}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
