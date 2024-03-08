import React from "react";
import PostCard from "../components/PostCard";
import { userData } from "../data/Data";
import Box from "@mui/material/Box";

const Obituaries = () => {
  return (
    <div>
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
