import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Sms from "../icons/sms.svg";
import { primaryColor } from "../utils/Colors";

export default function IconLabelButtons() {
  const [count, setCount] = useState(5);

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={<img src={Sms} />}
        sx={{
          borderRadius: "25px",
          borderColor: "#BFB1EE",
          color: "#5A189A",
          padding: "0px",
          backgroundColor: "#F8F2FD",

          "&:hover": {
            borderColor: "#5A189A",
          },
        }}
      >
        {count}
      </Button>
    </Stack>
  );
}
