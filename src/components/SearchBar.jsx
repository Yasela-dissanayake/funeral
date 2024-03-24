import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { primaryDarkColor } from "../utils/Colors";
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
      bgcolor={primaryDarkColor}
      height={70}
      mt={1}
      pl={{ xs: "50px", md: "235px" }}
      alignSelf="center"
      display="flex"
      textAlign="center"
      justifyContent="space-between"
      paddingRight={{ xs: "30px", md: "220px" }}
      alignItems="center"
      py={1}
    >
      <Typography
        color="white"
        fontWeight="600"
        fontSize="22px"
        alignSelf="center"
        marginRight={{ xs: "20px", md: "0" }}
      >
        {pageTitle}
      </Typography>

      <SearchBox width={460} height="60%" placeholder="Search…" />
    </Box>
  );
};

export default SearchBar;
