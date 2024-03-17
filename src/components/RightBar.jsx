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

      <Box sx={{ display: "flex", marginTop: "20px" }}>
        <img src={cardbg} alt="background" style={{ width: "100%" }} />
      </Box>
    </Box>
  );
};

export default RightBar;
