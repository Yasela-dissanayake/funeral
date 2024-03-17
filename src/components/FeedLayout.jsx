import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";

const Feed = () => {
  return (
    <Grid md={5} sm={12}>
      <Outlet />
    </Grid>
  );
};

export default Feed;
