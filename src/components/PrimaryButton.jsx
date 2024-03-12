import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const PrimaryButton = ({ text, className, ...props }) => {
  return (
    <Box className={`${className}`} {...props}>
      <Button
        variant="contained"
        onClick={() => {}}
        sx={{
          // my: 2,
          m: 0,
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
    </Box>
  );
};

export default PrimaryButton;
