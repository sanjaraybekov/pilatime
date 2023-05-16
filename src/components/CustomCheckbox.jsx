import React, { useState, useEffect } from "react";
import { Checkbox } from "@mui/material";
// import {useTheme} from "@mui/material/styles";

const CustomCheckbox = (props) => {
  // const theme = useTheme();
  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);
  const [checked, setChecked] = useState(!!props.checked);
  return (
    <div style={{ position: "relative", width: "37.5px" }}>
      <Checkbox
        name={props.name}
        checked={checked}
        onClick={props.onChange || (() => setChecked((p) => !p))}
        className="custom-checkbox"
        sx={{ color: "#914beb" }}
        style={{ opacity: 0, zIndex: 2 }}
        {...props}
      />
      <img
        src={checked ? "/images/checked.svg" : "/images/unchecked.svg"}
        alt="checkbox"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default CustomCheckbox;
