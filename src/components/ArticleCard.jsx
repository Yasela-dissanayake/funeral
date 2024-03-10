import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { primaryColor } from "../utils/Colors";
import Backdrop from "@mui/material/Backdrop";

export default function ArticleCard({ image, title }) {
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
        image={image}
        alt={title}
      />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", paddingTop: "0" }}>
          <Box sx={{ width: "80%", marginBottom: "5px" }}>
            <Typography component="div" fontSize="14px" fontWeight="600">
              {title}
            </Typography>
          </Box>
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
