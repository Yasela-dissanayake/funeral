import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SocialMediaList from "./SocialMediaList";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Footer = () => {
  return (
    <Box sx={{ margin: { xs: "30px 40px", md: "50px 220px" } }}>
      <Grid
        container
        justifyContent="space-between"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          container
          xs={12}
          sm={6}
          md={4}
          justifyContent={{ xs: "center", sm: "start" }}
        >
          <SocialMediaList />
        </Grid>
        <Grid
          container
          xs={12}
          sm={6}
          textAlign="end"
          justifyContent={{ xs: "center", sm: "end" }}
        >
          <List>
            <ListItem>
              <NavLink
                to="#"
                style={{
                  textDecoration: "none",
                }}
              >
                <ListItemText
                  secondary="Blog"
                  sx={{ ml: 2, color: "text.secondary" }}
                />
              </NavLink>
              <NavLink
                to="#"
                style={{
                  textDecoration: "none",
                }}
              >
                <ListItemText
                  secondary="Help / FAQ"
                  sx={{ ml: 2, color: "text.secondary" }}
                />
              </NavLink>
              <NavLink
                to="#"
                style={{
                  textDecoration: "none",
                }}
              >
                <ListItemText
                  secondary="Contact Us"
                  sx={{ ml: 2, color: "text.secondary" }}
                />
              </NavLink>
            </ListItem>
          </List>
        </Grid>
        <Grid
          container
          xs={12}
          sm={4}
          justifyContent={{ xs: "center", sm: "start" }}
        >
          <Typography fontSize={14} color="text.secondary" ml={3}>
            ©2021 www.funreralspage.com. All rights reserved.
          </Typography>
        </Grid>
        <Grid
          container
          xs={12}
          sm={8}
          textAlign="end"
          justifyContent={{ xs: "center", sm: "end" }}
        >
          <List>
            <ListItem>
              <NavLink
                to="#"
                style={{
                  textDecoration: "none",
                }}
              >
                <ListItemText
                  secondary="Cookie Policy"
                  sx={{ ml: 2, color: "text.secondary" }}
                />
              </NavLink>
              <NavLink
                to="#"
                style={{
                  textDecoration: "none",
                }}
              >
                <ListItemText
                  secondary="Privacy Policy"
                  sx={{ ml: 2, color: "text.secondary" }}
                />
              </NavLink>
              <NavLink
                to="#"
                style={{
                  textDecoration: "none",
                }}
              >
                <ListItemText
                  secondary="Terms & Conditions"
                  sx={{ ml: 2, color: "text.secondary" }}
                />
              </NavLink>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
