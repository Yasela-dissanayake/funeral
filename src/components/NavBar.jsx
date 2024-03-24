import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  primaryColor,
  primaryDarkColor,
  transparent,
  textWhite,
} from "../utils/Colors";
import Grid from "@mui/material/Grid";
import GlobalButton from "./GlobalButton";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

// imported navbar from MUI components

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        width: "100%",
        paddingRight: { xs: "20px", md: "200px" },
        paddingLeft: { xs: "20px", md: "200px" },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          margin: 0,
          minWidth: "100%",
        }}
      >
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* main logo text */}
          <Grid
            container
            width="25%"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Grid item lg={12}>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#"
                sx={{
                  // display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: "-0.1rem",
                  color: "#5A189A",
                  textDecoration: "none",
                }}
              >
                Funeral page.
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography
                noWrap
                component="a"
                href="#"
                sx={{
                  // display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 400,
                  letterSpacing: "0rem",
                  color: "#343437",
                  textDecoration: "none",
                  fontSize: "12px",
                }}
              >
                Making Memories Live
              </Typography>
            </Grid>
          </Grid>

          {/* mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#5A189A"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Favourites</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">List your business</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">News feed</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#5A189A",
              textDecoration: "none",
            }}
          >
            Funeral page.
          </Typography>

          {/* nav buttons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                // flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
              }}
            >
              <IconButton
                aria-label="favourite"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: { primaryColor },
                  display: "flex",
                  mr: 1,
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
              <div className="justify-center">
                <GlobalButton
                  bgColor={primaryDarkColor}
                  text="LIST YOUR BUSINESS"
                  borderColor={primaryDarkColor}
                  hoverVBorderColor={primaryDarkColor}
                  hoverBgColor={transparent}
                  hoverTextColor={primaryDarkColor}
                />
              </div>
              <div className="justify-center ">
                <GlobalButton
                  bgColor={transparent}
                  text="NEWS FEED"
                  textColor={primaryColor}
                  borderColor={primaryDarkColor}
                  hoverVBorderColor={primaryDarkColor}
                  hoverBgColor={primaryDarkColor}
                  hoverTextColor={textWhite}
                />
              </div>
              {/* <GlobalButton
              bgColor={primaryColor}
              text="NEWS FEED"
              borderColor={primaryColor}
              hoverVBorderColor={primaryColor}
              hoverBgColor={transparent}
              hoverTextColor={primaryColor}
            /> */}
            </Box>

            {/* avatar */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0gYR-As9-_w2_fjRc895mD_91WQ5p7N_9Q&usqp=CAU"
                  />
                </IconButton>
              </Tooltip>
              {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
