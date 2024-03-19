import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";

const Feed = () => {
  return (
    <Grid item md={5} sm={12} sx={{ margin: { sm: "20px 50px", md: "0" } }}>
      <Outlet />
    </Grid>
  );
};

export default Feed;
