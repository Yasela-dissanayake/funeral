import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { primaryColor } from "../utils/Colors";
import Typography from "@mui/material/Typography";
import { TitleContext } from "../context/TitleContext";
import SearchBox from "./SearchBox";

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
      paddingRight="160px"
      py={1}
    >
      <Typography
        color="white"
        fontWeight="600"
        fontSize="22px"
        alignSelf="center"
      >
        {pageTitle}
      </Typography>

      <SearchBox width={460} height="60%" placeholder="Search…" />
    </Box>
  );
};

export default SearchBar;
