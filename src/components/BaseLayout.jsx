import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import Stack from "@mui/material/Stack";
import RightBar from "../components/RightBar";
import FeedLayout from "./FeedLayout";

const BaseLayout = () => {
  return (
    <div className="">
      <NavBar />
      <SearchBar />
      <Stack direction="row" spacing={2} justifyContent="center">
        <SideBar />
        <FeedLayout />
        <RightBar />
      </Stack>
    </div>
  );
};

export default BaseLayout;
