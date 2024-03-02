import React from "react";
import Button from "@mui/material/Button";

const PrimaryButton = ({ text, className }) => {
  return (
    <div className={`${className}`}>
      <Button
        variant="contained"
        onClick=""
        sx={{
          my: 2,
          px: 3,
          color: "white",
          display: "block",
          borderRadius: 8,
          bgcolor: "#5A189A",
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default PrimaryButton;
