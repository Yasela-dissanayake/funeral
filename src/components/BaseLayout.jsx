import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import classes from "./BaseLayout.module.css";

const BaseLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
