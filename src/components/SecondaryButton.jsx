import React from "react";
import Button from "@mui/material/Button";

const SecondaryButton = ({ text }) => {
  return (
    <Button
      variant="outlined"
      onClick=""
      sx={{
        my: 2,
        px: 3,
        color: "#5A189A",
        display: "block",
        borderRadius: 8,
        border: 2,
        borderColor: "#5A189A",
      }}
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;
