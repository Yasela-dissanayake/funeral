import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <Box sx={{ margin: "50px 220px", backgroundColor: "red" }}>
      <Grid container spacing={0}>
        <Grid item>1</Grid>
        <Grid item>2</Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
