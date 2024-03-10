import React from "react";
import Box from "@mui/material/Box";
import ArticleCard from "./ArticleCard";
import { articles } from "../data/Data";
import Button from "@mui/material/Button";
import { primaryColor } from "../utils/Colors";
import CardMedia from "@mui/material/CardMedia";
import cardbg from "../assets/images/cardbg.png";
import Typography from "@mui/material/Typography";

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
        <Box sx={{ px: 2 }}>
          <Button
            variant="contained"
            onClick={() => {}}
            sx={{
              my: 2,
              boxShadow: "none",
              color: primaryColor,
              display: "block",
              borderRadius: 8,
              bgcolor: "#F2E4FF",
              textTransform: "none",
              width: "100%",
              border: 1,
              borderColor: "transparent",
              "&:hover": {
                bgcolor: "transparent",
                border: 1,
                borderColor: "#5A189A",
                color: "#5A189A",
              },
            }}
          >
            View All Stories
          </Button>
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
