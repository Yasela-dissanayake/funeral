import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { primaryColor } from "../utils/Colors";

export default function ArticleCard() {
  return (
    <Card
      sx={{
        display: "flex",
        margin: "20px",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100, borderRadius: "10px" }}
        image="https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" fontSize="15px">
            Frazer’s Holiday Remembrance Ornaments
          </Typography>
          <Button
            endIcon={<KeyboardArrowRightIcon />}
            fontSiz="15px"
            sx={{ textTransform: "none", color: "#5A189A", padding: "0" }}
          >
            Read More
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
}
