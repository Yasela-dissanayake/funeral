import React from "react";
import PostCard from "../components/PostCard";
import { userData } from "../data/Data";
import Box from "@mui/material/Box";
import BasicDatePicker from "../components/BasicDatePicker";
import Grid from "@mui/material/Grid";
import SearchBar from "../components/SearchBar";
import SearchBox from "../components/SearchBox";
import PrimaryButton from "../components/PrimaryButton";

const Obituaries = () => {
  return (
    <div>
      <Grid container>
        <Grid item md={4}>
          <SearchBox height="80%" placeholder="Name / Keyword" />
        </Grid>
        <Grid container justifyContent="space-evenly" md={8}>
          <Grid item md>
            <BasicDatePicker placeholder="From" />
          </Grid>
          <Grid item md>
            <BasicDatePicker placeholder="To" />
          </Grid>
          <Grid item md>
            <PrimaryButton text="Search" />
          </Grid>
        </Grid>
      </Grid>
      {userData.map((user) => (
        <Box mb={3}>
          <PostCard
            key={user.id}
            name={user.name}
            born={user.born}
            died={user.died}
            notice={user.notice}
            date={user.date}
            location={user.location}
            message={user.message}
            image={user.img}
          />
        </Box>
      ))}
    </div>
  );
};

export default Obituaries;
