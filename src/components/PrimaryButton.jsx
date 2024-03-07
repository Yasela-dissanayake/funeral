import React from "react";
import Button from "@mui/material/Button";
import { primaryColor } from "../utils/Colors";

const PrimaryButton = ({ text, className, ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      <Button
        variant="contained"
        onClick={() => {}}
        sx={{
          my: 2,
          px: 3,
          mr: 2,
          border: 1,
          borderColor: "#5A189A",
          color: "white",
          display: "block",
          borderRadius: 8,
          bgcolor: "#5A189A",
          textTransform: "none",
          "&:hover": {
            bgcolor: "transparent",
            border: 1,
            borderColor: "#5A189A",
            color: "#5A189A",
          },
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default PrimaryButton;
