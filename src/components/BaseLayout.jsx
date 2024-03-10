import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import Stack from "@mui/material/Stack";
import RightBar from "../components/RightBar";
import FeedLayout from "./FeedLayout";
import Box from "@mui/material/Box";

const BaseLayout = () => {
  return (
    <Box sx={{ backgroundColor: "#fefefe" }}>
      <NavBar />
      <SearchBar />
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        paddingRight="160px"
        marginTop={5}
      >
        <SideBar />
        <FeedLayout />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default BaseLayout;
