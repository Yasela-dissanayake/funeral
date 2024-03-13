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

const RightBar = () => {
  return (
    <Box
      flex={2}
      // border="solid 1px #e4e2e2 "
      // borderRadius="10px"
    >
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
      <Box
        mt={3}
        sx={{
          backgroundImage: `url(${cardbg})`,
          height: "28%",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      >
        <Typography variant="body1" color="initial">
          HElo
        </Typography>
      </Box>
    </Box>
  );
};

export default RightBar;
