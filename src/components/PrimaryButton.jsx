import React from "react";
import GlobealButton from "./GlobalButton.jsx";
import { primaryColor, transparent } from "../utils/Colors.js";

const PrimaryButton = ({ text }) => {
  return (
    <GlobealButton
      bgColor={primaryColor}
      text={text}
      borderColor={primaryColor}
      hoverVBorderColor={primaryColor}
      hoverBgColor={transparent}
      hoverTextColor={primaryColor}
    />
  );
};

export default PrimaryButton;
