import React from "react";
import GlobalButton from "./GlobalButton.jsx";
import { primaryColor, transparent } from "../utils/Colors.js";

const PrimaryButton = ({ text, marginTop }) => {
  return (
    <GlobalButton
      bgColor={primaryColor}
      text={text}
      borderColor={primaryColor}
      hoverVBorderColor={primaryColor}
      hoverBgColor={transparent}
      hoverTextColor={primaryColor}
      marginTop={marginTop}
    />
  );
};

export default PrimaryButton;
