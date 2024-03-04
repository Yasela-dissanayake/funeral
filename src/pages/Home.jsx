import React from "react";
import SideBar from "../components/SideBar";
import Stack from "@mui/material/Stack";
import RightBar from "../components/RightBar";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <SideBar />
      <Feed />
      <RightBar />
    </Stack>
  );
};

export default Home;
