import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller } from "react-hook-form";

export const FormInputRadio = ({ name, control, options, row = false }) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };
  return (
    <FormControl component="fieldset">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <RadioGroup
            key={value}
            defaultValue={value}
            onChange={onChange}
            row={row}
          >
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};
