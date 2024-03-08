import React from "react";
import Box from "@mui/material/Box";
import ArticleCard from "./ArticleCard";

const RightBar = () => {
  return (
    <Box flex={3} border="solid 1px #e4e2e2 " borderRadius="10px">
      <ArticleCard />
    </Box>
  );
};

export default RightBar;
