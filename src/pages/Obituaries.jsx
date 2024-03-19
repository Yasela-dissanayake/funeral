import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import { userData } from "../data/Data";
import Box from "@mui/material/Box";
import BasicDatePicker from "../components/BasicDatePicker";
import Grid from "@mui/material/Grid";
import SearchBox from "../components/SearchBox";
import SecondaryButton from "../components/SecondaryButton";
import UsePagination from "../components/Pagination";
import advertisement1 from "../assets/images/advertisement1.png";

const Obituaries = () => {
  const [adIndex, setAdIndex] = useState(null);
  const [userDataArray, setUserDataArray] = useState([]);

  useEffect(() => {
    setUserDataArray(userData);
    const randomIndex = Math.floor(Math.random() * userData.length - 1) + 1;
    setAdIndex(randomIndex);
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item md={4} display="flex" alignItems="center">
          <SearchBox height="60%" placeholder="Name / Keyword" />
        </Grid>
        <Grid container justifyContent="space-evenly" spacing={2} md={8}>
          <Grid item md ml={2}>
            <BasicDatePicker placeholder="From" />
          </Grid>
          <Grid item md>
            <BasicDatePicker placeholder="To" />
          </Grid>
          <Grid item md>
            <SecondaryButton text="Search" />
          </Grid>
        </Grid>
      </Grid>
      {userData.map((user, index) => (
        <React.Fragment key={user.id}>
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
          </Box>{" "}
          {adIndex === index && (
            <Box mb={3}>
              <div>
                <img
                  src={advertisement1}
                  alt="background"
                  style={{ width: "100%" }}
                />
              </div>
            </Box>
          )}
        </React.Fragment>
      ))}
      <Box display="flex" justifyContent="end">
        <UsePagination />
      </Box>
    </div>
  );
};

export default Obituaries;
