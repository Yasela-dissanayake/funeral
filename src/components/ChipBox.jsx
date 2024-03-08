import React, { useState } from "react";
import Chip from "@mui/material/Chip";

export default function ChipBox({ icon, count }) {
  return (
    <Chip
      icon={<img src={icon} />}
      label={count}
      variant="outlined"
      sx={{ border: "none", color: "#5A189A" }}
    />
  );
}
