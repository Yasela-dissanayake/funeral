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
        mr: 2,
        color: "#5A189A",
        display: "block",
        borderRadius: 8,
        // border: 2,
        borderColor: "#5A189A",
        "&:hover": {
          bgcolor: "#5A189A",
          border: 1,
          borderColor: "#5A189A",
          color: "white",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;
