import React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FaceBook from "../assets/icons/fb.svg";
import Twitter from "../assets/icons/twitter.svg";
import Instagram from "../assets/icons/insta.svg";
import YouTube from "../assets/icons/youtube.svg";

const SocialMediaList = () => {
  return (
    <Grid ml={2}>
      <IconButton aria-label="facebook">
        <img src={FaceBook} />
      </IconButton>
      <IconButton aria-label="twitter">
        <img src={Twitter} />
      </IconButton>
      <IconButton aria-label="instagram">
        <img src={Instagram} />
      </IconButton>
      <IconButton aria-label="youtube">
        <img src={YouTube} />
      </IconButton>
    </Grid>
  );
};

export default SocialMediaList;
