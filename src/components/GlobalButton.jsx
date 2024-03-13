import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const PrimaryButton = ({
  text,
  borderColor,
  textColor,
  hoverBgColor,
  bgColor,
  hoverVBorderColor,
  hoverTextColor,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ height: "100%" }}
    >
      <Button
        variant="contained"
        onClick={() => {}}
        sx={{
          m: 0,
          px: 3,
          mr: 2,
          border: 1,
          borderColor: borderColor,
          color: textColor,
          borderRadius: 8,
          bgcolor: bgColor,
          textTransform: "none",
          "&:hover": {
            bgcolor: hoverBgColor,
            border: 1,
            borderColor: hoverVBorderColor,
            color: hoverTextColor,
          },
        }}
      >
        {text}
      </Button>
    </Box>
  );
};

export default PrimaryButton;
