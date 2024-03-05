import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import classes from "./BaseLayout.module.css";
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
