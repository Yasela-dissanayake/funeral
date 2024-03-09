import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MoreMenu from "./MoreMenu";
import { primaryColor } from "../utils/Colors";
import ReactionsBar from "./ReactionsBar";

const SingleComment = ({ name, timestamp, message, image }) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={image}
            sx={{ height: "60px", width: "60px" }}
          />
        }
        action={
          <Box display="inline-flex">
            <Typography
              alignSelf="start"
              pt={1}
              color="#BFBFBF"
              fontSize="12px"
            >
              {`${timestamp} minutes ago`}
            </Typography>
            <Box aria-label="settings">
              <MoreMenu size="20px" color="#696A6C" />
            </Box>
          </Box>
        }
        title={
          <Typography color="black" fontWeight="700">
            {name}
          </Typography>
        }
        subheader={
          <Grid container>
            <Grid display="block" lg={12}>
              <Typography
                color="#868282"
                fontSize="12px"
                sx={{ marginTop: "3px" }}
              >
                {message}
              </Typography>
              <ReactionsBar size="30px" />
            </Grid>
          </Grid>
        }
      />
      <Box>
        <hr />
      </Box>
    </Card>
  );
};

export default SingleComment;
