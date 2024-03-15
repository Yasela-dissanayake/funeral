import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SocialMediaList from "./SocialMediaList";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ margin: "50px 220px" }}>
      <Grid
        container
        justifyContent="space-between"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={10}>
          <SocialMediaList />
        </Grid>
        <Grid container xs={2} textAlign="center">
          <Grid item xs={4}>
            <NavLink
              to="#"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography fontSize={14} color="text.secondary">
                Blog
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={4}>
            <NavLink
              to="#"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography fontSize={14} color="text.secondary">
                Help / FAQ
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={4}>
            <NavLink
              to="#"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography fontSize={14} color="text.secondary">
                Contact Us
              </Typography>
            </NavLink>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Typography fontSize={14} color="text.secondary" ml={3}>
            ©2021 www.funreralspage.com. All rights reserved.
          </Typography>
        </Grid>
        <Grid container xs={3} textAlign="center">
          <Grid item xs={4}>
            <NavLink
              to="#"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography fontSize={14} color="text.secondary">
                Cookie Policy
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={4}>
            <NavLink
              to="#"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography fontSize={14} color="text.secondary">
                Privacy Policy
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={4}>
            <NavLink
              to="#"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography fontSize={14} color="text.secondary">
                Terms & Conditions
              </Typography>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
