import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const Feed = () => {
  return (
    <Box flex={5} bgcolor="red">
      <Outlet />
    </Box>
  );
};

export default Feed;
