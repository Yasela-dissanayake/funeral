import React, { useState } from "react";
import { TextField } from "@mui/material"; // Import TextField
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function MyDatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default MyDatePicker;
