import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentButton from "./CommentButton";
import Box from "@mui/material/Box";
import ChipBox from "../components/ChipBox";
import Eye from "../assets/icons/eye.svg";
import Rose from "../assets/icons/rose.svg";
import Candle from "../assets/icons/candle.svg";
import Flowers from "../assets/icons/flowers.svg";
import Ribbon from "../assets/icons/ribbon.svg";
import { primaryColor } from "../utils/Colors";
import PrimaryButton from "./PrimaryButton";
import Grid from "@mui/material/Grid";
import Location from "../assets/icons/location.svg";
import MoreMenu from "./MoreMenu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Divider from "@mui/material/Divider";
import FaceBook from "../assets/icons/fb.svg";
import Twitter from "../assets/icons/twitter.svg";
import Instagram from "../assets/icons/insta.svg";
import YouTube from "../assets/icons/youtube.svg";
import Services from "../assets/icons/funeralservices.svg";

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
  const initialRoseCount = 10;
  const initialCandleCount = 65;
  const initialFlowerCount = 98;
  const initialRibbonCount = 5;

  const [expanded, setExpanded] = React.useState(false);
  const [roseCount, setRoseCount] = useState(initialRoseCount);
  const [candleCount, setCandleCount] = useState(initialCandleCount);
  const [flowerCount, setFlowerCount] = useState(initialFlowerCount);
  const [ribbonCount, setRibbonCount] = useState(initialRibbonCount);
  const [viewCount, setViewCount] = useState(1096);
  const [favourite, setFavourite] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleRoseCount = () => {
    setRoseCount(
      roseCount === initialRoseCount ? roseCount + 1 : initialRoseCount
    );
  };

  const handleCandleCount = () => {
    setCandleCount(
      candleCount === initialCandleCount ? candleCount + 1 : initialCandleCount
    );
  };

  const handleFlowerCount = () => {
    setFlowerCount(
      flowerCount === initialFlowerCount ? flowerCount + 1 : initialFlowerCount
    );
  };

  const handleRibbonCount = () => {
    setRibbonCount(
      ribbonCount === initialRibbonCount ? ribbonCount + 1 : initialRibbonCount
    );
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
      sx={{ maxWidth: "100%", boxShadow: "none", border: "solid 1px #e4e2e2" }}
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
        avatar={<Avatar aria-label="recipe" src={image} />}
        action={
          <Box display="inline-flex">
            <PrimaryButton text="Donate" />
            <Box aria-label="settings" mt={2}>
              <MoreMenu />
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
            <Grid lg={12} display="inline-flex">
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
            <Grid display="block" lg={12}>
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
        <Grid mr={3}>
          <Typography variant="body2">
            <a href="#">Bibliography</a>
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <CardActions disableSpacing>
        <Grid container display="inline-flex" justifyContent="space-between">
          <Grid>
            <IconButton aria-label="rose" onClick={handleRoseCount}>
              <ChipBox icon={Rose} count={roseCount} />
            </IconButton>
            <IconButton aria-label="candle" onClick={handleCandleCount}>
              <ChipBox icon={Candle} count={candleCount} />
            </IconButton>
            <IconButton aria-label="flowers" onClick={handleFlowerCount}>
              <ChipBox icon={Flowers} count={flowerCount} />
            </IconButton>
            <IconButton aria-label="ribbon" onClick={handleRibbonCount}>
              <ChipBox icon={Ribbon} count={ribbonCount} />
            </IconButton>
          </Grid>
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
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
