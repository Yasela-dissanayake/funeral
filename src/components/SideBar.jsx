import React, { useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { sidebarItems } from "../data/Data";
import { NavLink } from "react-router-dom";
import { TitleContext } from "../context/TitleContext";
import Typography from "@mui/material/Typography";

const SideBar = () => {
  const { updateTitle } = useContext(TitleContext);

  const handleTitle = (title) => {
    updateTitle(title);
    console.log("this is from handle" + title);
  };

  return (
    <Box
      flex={2}
      sx={{
        width: "100%",
        maxWidth: 360,
        paddingLeft: "160px",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          {sidebarItems &&
            sidebarItems.map((item) => (
              <NavLink
                to={item.path}
                key={item.id}
                onClick={() => handleTitle(item.name)}
                style={{
                  textDecoration: "none",
                  color: ({ isActive }) => (isActive ? "green" : "black"),
                  backgroundColor: ({ isActive }) =>
                    isActive ? "blue" : "transparent",
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <img src={item.icon} alt={item.name} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          sx={{ color: "black", textDecoration: "none" }}
                        >
                          {item.name}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
        </List>
      </nav>
    </Box>
  );
};

export default SideBar;
