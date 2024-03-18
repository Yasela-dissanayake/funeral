import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import Stack from "@mui/material/Stack";
import RightBar from "./RightBar";
import FeedLayout from "./FeedLayout";
import Box from "@mui/material/Box";
import basebg from "../assets/images/basebg.png";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";

const BaseLayout = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fefefe",
        backgroundImage: `url(${basebg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <NavBar />
      <SearchBar />
      {/* <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        paddingRight="220px"
        marginTop={5}
      >
        <SideBar />
        <FeedLayout />
        <RightBar />
      </Stack> */}
      <Grid
        // direction="row"
        gap={3}
        justifyContent="center"
        // paddingRight="220px"
        marginTop={5}
        container
      >
        <SideBar />
        <FeedLayout />
        <RightBar />
      </Grid>
      <Footer />
    </Box>
  );
};

export default BaseLayout;
