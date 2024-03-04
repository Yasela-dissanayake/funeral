import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import classes from "./BaseLayout.module.css";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";

const BaseLayout = () => {
  return (
    <div className="">
      <NavBar />
      <SearchBar />
      {/* <SideBar /> */}
      <Outlet />
    </div>
  );
};

export default BaseLayout;
