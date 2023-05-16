import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Box } from "@mui/material";
import { Controller } from "react-hook-form";

export default function FormInputCEditor({
  name,
  sx,
  control,
  setValue,
  data,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <Box sx={sx}>
          <CKEditor
            editor={ClassicEditor}
            config={{
              language: "kr",
            }}
            data={data ? data : ""}
            onChange={(event, editor) => {
              const data = editor.getData();
              setValue(name, data);
            }}
          />
        </Box>
      )}
    />
  );
}
