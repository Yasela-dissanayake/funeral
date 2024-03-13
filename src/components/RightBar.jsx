import React from "react";
import Box from "@mui/material/Box";
import ArticleCard from "./ArticleCard";
import { articles } from "../data/Data";
import Button from "@mui/material/Button";
import { primaryColor } from "../utils/Colors";
import CardMedia from "@mui/material/CardMedia";
import cardbg from "../assets/images/cardbg.png";
import Typography from "@mui/material/Typography";
import SecondaryButton from "./SecondaryButton";
import cardlogo from "../assets/images/cardlogo.png";
import PrimaryButton from "./PrimaryButton";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const RightBar = () => {
  return (
    <Box flex={2}>
      <Box
        border="solid 1px #e4e2e2 "
        borderRadius="10px"
        pb={2}
        sx={{ backgroundColor: "white" }}
      >
        <Box>
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              image={article.image}
            />
          ))}
        </Box>
        <Box pl={2}>
          <SecondaryButton text="View All Stories" />
        </Box>
      </Box>
      {/* <Box
        mt={3}
        p={4}
        sx={{
          backgroundImage: `url(${cardbg})`,
          height: "28%",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      >
        <Box>
          <img src={cardlogo} />
          <Typography>We Are Here For You...</Typography>
          <p>
            Venenatis, quis risus justo, nisl, lorem venenatis. Nunc, pulvinar
            amet in odio ac tellus
          </p>
          <PrimaryButton text="Contact Us" />
        </Box>
      </Box> */}

      <ImageList sx={{ width: 500, height: 450 }}>
        <ImageListItem>
          <img src={cardbg} alt="background" />
          <ImageListItemBar
            title="Title"
            subtitle="Sub Title"
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                // aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default RightBar;
