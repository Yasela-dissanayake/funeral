import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { primaryColor } from "../utils/Colors";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { TitleContext } from "../context/TitleContext";

const Search = styled("div")(({ theme }) => ({
  height: "50%",
  alignSelf: "center",
  borderRadius: "25px",
  backgroundColor: "white",
  "&:hover": {},
  marginLeft: 0,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: "5px 15px",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

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
      <Typography color="white" fontWeight="600" fontSize="22px">
        {pageTitle}
      </Typography>
      <Search>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </Search>
    </Box>
  );
};

export default SearchBar;
