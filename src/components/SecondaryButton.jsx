import React from "react";
import Button from "@mui/material/Button";
import GlobalButton from "./GlobalButton";
import { primaryColor, secondaryColor, transparent } from "../utils/Colors";

const SecondaryButton = ({ text }) => {
  return (
    <GlobalButton
      text={text}
      bgColor={secondaryColor}
      borderColor={transparent}
      textColor={primaryColor}
      hoverBgColor={secondaryColor}
    />
  );
};

export default SecondaryButton;
