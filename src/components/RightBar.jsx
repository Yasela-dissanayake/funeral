import React from "react";
import Box from "@mui/material/Box";
import ArticleCard from "./ArticleCard";
import { articles } from "../data/Data";
import cardbg from "../assets/images/cardbg.png";
import SecondaryButton from "./SecondaryButton";

import Grid from "@mui/material/Grid";

const RightBar = () => {
  return (
    <Grid
      item
      md={3}
      sm={12}
      sx={{
        display: { sm: "flex", md: "block" },
        margin: { sm: "20px 50px", md: "0" },
        maxWidth: { md: "330px" },
      }}
    >
      <Grid
        item
        sm={6}
        md={12}
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
      </Grid>

      <Grid
        item
        sm={6}
        md={12}
        sx={{
          display: "flex",
          margin: { sm: "0 0 0 20px ", md: "20px 0 0 0" },
        }}
      >
        <img src={cardbg} alt="background" style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default RightBar;
