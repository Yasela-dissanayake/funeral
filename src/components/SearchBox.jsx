import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";

const SearchBox = ({ width, height, placeholder }) => {
  return (
    <Box
      bgcolor="#f0f0f0"
      alignSelf="center"
      justifyContent="space-between"
      display="flex"
      padding="2px 15px"
      width={width}
      height={height}
      borderRadius="30px"
    >
      <InputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        sx={{
          color: "black",
          "& .MuiInputBase-input": {
            paddingLeft: `calc(1em + ${8})`,
          },
          fontSize: "14px",
        }}
      />
      <Box
        sx={{
          padding: "5px 15px",
          // pointerEvents: "none",
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
  );
};

export default SearchBox;
