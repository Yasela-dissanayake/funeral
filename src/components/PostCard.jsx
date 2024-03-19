import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentButton from "./CommentButton";
import Box from "@mui/material/Box";
import ChipBox from "../components/ChipBox";
import Eye from "../assets/icons/eye.svg";
import { primaryColor } from "../utils/Colors";
import Location from "../assets/icons/location.svg";
import MoreMenu from "./MoreMenu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Divider from "@mui/material/Divider";
import Services from "../assets/icons/funeralservices.svg";
import ReactionsBar from "./ReactionsBar";
import SingleComment from "./SingleComment";
import { userComments } from "../data/Data";
import PrimaryButton from "./PrimaryButton";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SendIcon from "@mui/icons-material/Send";
import SocialMediaList from "./SocialMediaList";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard({
  name,
  born,
  died,
  notice,
  date,
  location,
  message,
  image,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [viewCount, setViewCount] = useState(1096);
  const [favourite, setFavourite] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavourite = () => {
    if (!favourite) {
      setFavourite(true);
    } else {
      setFavourite(false);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: "100%",
        boxShadow: "none",
        border: "solid 1px #e4e2e2",
        borderRadius: "10px",
      }}
    >
      <Grid container pt={2} pb={2} pl={1} alignItems="center">
        <img src={Services} />
        <Typography display="inline-flex" fontSize="15px" ml={1}>
          Posted By
          <Typography fontSize="15px" fontWeight="600" ml={1}>
            Family Funeral Services
          </Typography>
        </Typography>
      </Grid>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={image}
            sx={{ height: "80px", width: "80px" }}
          />
        }
        action={
          <Box display="inline-flex">
            <PrimaryButton text="Donate" marginTop={2} />
            <Box aria-label="settings" mt={2}>
              <MoreMenu size="25px" color="#696A6C" />
            </Box>
          </Box>
        }
        title={
          <Typography color={primaryColor} fontWeight="700">
            {name}
          </Typography>
        }
        subheader={
          <Grid container>
            <Grid sm={12} sx={{ display: { md: "block", lg: "inline-flex" } }}>
              <Typography fontSize="11px" color="text.secondary">
                Born:
              </Typography>
              <Typography fontSize="11px" fontWeight="500" color="black">
                {born}
              </Typography>
              <Typography
                fontSize="11px"
                color="text.secondary"
                sx={{ marginLeft: "10px" }}
              >
                Died:
              </Typography>
              <Typography fontSize="11px" fontWeight="500" color="black">
                {died}
              </Typography>
            </Grid>
            <Grid display="block" md={12}>
              <Typography
                fontWeight="600"
                color="black"
                fontSize="13px"
                sx={{ marginTop: "3px" }}
              >
                {notice}
              </Typography>
            </Grid>
            <Grid display="inline-flex">
              <Typography fontSize="13px" color={primaryColor}>
                {`${date} days ago`}
              </Typography>
              <Box sx={{ marginLeft: "10px", marginRight: "5px" }}>
                <img src={Location} />
              </Box>
              <Typography fontSize="13px" color={primaryColor}>
                {location}
              </Typography>
            </Grid>
          </Grid>
        }
        sx={{ backgroundColor: "#FAF5FF" }}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {message} <a href="#">Read more</a>
        </Typography>
      </CardContent>
      <Grid container display="inline-flex" justifyContent="space-between">
        <SocialMediaList />
        <Grid mr={3}>
          <Typography variant="body2">
            <a href="#">Bibliography</a>
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <CardActions disableSpacing>
        <Grid container display="inline-flex" justifyContent="space-between">
          <ReactionsBar size="35px" />
          <Grid>
            <IconButton aria-label="add to favorites">
              {favourite ? (
                <FavoriteIcon onClick={handleFavourite} />
              ) : (
                <FavoriteBorderIcon
                  sx={{ color: { primaryColor } }}
                  onClick={handleFavourite}
                />
              )}
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <CommentButton />
            </ExpandMore>

            <ChipBox icon={Eye} count={viewCount} />
          </Grid>
        </Grid>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ backgroundColor: "#F9F9F9", padding: "0" }}>
          {userComments.map((comment) => (
            <Box>
              <SingleComment
                name={comment.name}
                message={comment.message}
                timestamp={comment.timestamp}
                image={comment.image}
              />
              <hr color="white" />
            </Box>
          ))}
        </CardContent>

        <Box sx={{ margin: "24px 37px" }}>
          <Box
            bgcolor="#F0F0F0"
            alignSelf="center"
            justifyContent="space-between"
            display="flex"
            width="100%"
            borderRadius="30px"
            margin="auto"
          >
            <InputBase
              placeholder="Write a comment"
              inputProps={{ "aria-label": "search" }}
              sx={{
                color: "#C9C6C6",
                fontSize: "16px",
                marginLeft: "30px",
              }}
            />
            <Box
              sx={{
                padding: "5px 15px",
                alignSelf: "center",
                display: "inline-block",
                textAlign: "center",
                justifyContent: "space-between",
                rotate: "-60deg",
              }}
            >
              <IconButton onClick={() => {}}>
                <SendIcon color="black" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Collapse>
    </Card>
  );
}
