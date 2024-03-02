import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import classes from "./BaseLayout.module.css";
import SideBar from "./SideBar";

const BaseLayout = () => {
  return (
    <div className="">
      <NavBar />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
