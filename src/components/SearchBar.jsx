import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { primaryColor } from "../utils/Colors";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { TitleContext } from "../context/TitleContext";
import IconButton from "@mui/material/IconButton";

const SearchBar = () => {
  const { pageTitle } = useContext(TitleContext);

  if (!pageTitle) {
    return null;
  }

  console.log(pageTitle);
  return (
    <Box
      bgcolor={primaryColor}
      height={70}
      mt={1}
      pl="160px"
      alignSelf="center"
      display="flex"
      textAlign="center"
      justifyContent="space-between"
    >
      <Typography
        color="white"
        fontWeight="600"
        fontSize="22px"
        alignSelf="center"
      >
        {pageTitle}
      </Typography>

      <Box
        bgcolor="white"
        alignSelf="center"
        justifyContent="space-between"
        display="flex"
        padding="2px 15px"
        width="460px"
        borderRadius="25px"
        marginRight="160px"
      >
        <InputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          sx={{
            color: "inherit",
            "& .MuiInputBase-input": {
              paddingLeft: `calc(1em + ${8})`,
            },
            fontSize: "14px",
          }}
        />
        <Box
          sx={{
            padding: "5px 15px",
            pointerEvents: "none",
            alignSelf: "center",
            display: "inline-block",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton color="#111827" onClick={() => {}}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
