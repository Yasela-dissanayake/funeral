import React, { useState } from "react";
import Chip from "@mui/material/Chip";

export default function ChipBox({ icon, count, size }) {
  return (
    <Chip
      icon={<img src={icon} width={size} />}
      label={count}
      variant="outlined"
      sx={{ border: "none", color: "#5A189A", fontSize: "16px" }}
    />
  );
}
