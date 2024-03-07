import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentButton from "./CoommentButton";
import Box from "@mui/material/Box";
import ChipBox from "../components/ChipBox";
import Eye from "../icons/eye.svg";
import Rose from "../icons/rose.svg";
import Candle from "../icons/candle.svg";
import Flowers from "../icons/flowers.svg";
import Ribbon from "../icons/ribbon.svg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard() {
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

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box justifyContent="space-between">
          <Box>
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
          </Box>
          <Box>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
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
          </Box>
        </Box>
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
