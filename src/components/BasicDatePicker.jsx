import * as React from "react";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

export default function BasicDatePicker({ placeholder }) {
  const [cleared, setCleared] = React.useState(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <DemoItem>
          <DatePicker
            label={
              <Typography fontSize={14} fontWeight={600} color="black">
                {placeholder}
              </Typography>
            }
            sx={{
              // width: 120,
              ".MuiOutlinedInput-root": {
                borderRadius: "30px",
                backgroundColor: "#F0F0F0",
                height: "80%",
              },
            }}
            slotProps={{
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
          />
        </DemoItem>

        {cleared && (
          <Alert
            sx={{ position: "absolute", bottom: 0, right: 0 }}
            severity="success"
          >
            Field cleared!
          </Alert>
        )}
      </Box>
    </LocalizationProvider>
  );
}
