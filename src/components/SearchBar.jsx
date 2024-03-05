import React from "react";
import Box from "@mui/material/Box";
import { primaryColor } from "../utils/Colors";
import Typography from "@mui/material/Typography";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  // position: "relative",
  height: "50%",
  alignSelf: "center",
  borderRadius: "25px",
  backgroundColor: "white",
  "&:hover": {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  // marginRight: theme.spacing(2),
  marginLeft: 0,
  // width: "100%",
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(3),
  //   width: "auto",
  // },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  // height: "50%",
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
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create("width"),

    // width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
}));

const SearchBar = () => {
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
        Obituaries
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
