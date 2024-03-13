import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const GlobalButton = ({
  text,
  borderColor,
  textColor,
  hoverBgColor,
  bgColor,
  hoverVBorderColor,
  hoverTextColor,
  marginTop,
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
          mt: marginTop,
          border: 1,
          borderColor: borderColor,
          color: textColor,
          borderRadius: 8,
          bgcolor: bgColor,
          textTransform: "none",
          boxShadow: "none",
          width: "100%",
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

export default GlobalButton;
