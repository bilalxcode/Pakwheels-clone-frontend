import React, { useState, useEffect } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Hidden,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import NavHeader from "./NavHeader";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const isHomePage = location.pathname === "/";

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const sellCarOpener = (e) => {
    e.preventDefault();
    navigate("/sell-vehicle/post-ad");
  };

  return (
    <>
      <div
        style={{
          background: isHomePage
            ? "transparent"
            : "linear-gradient( #000,#01336F)",
          padding: "0px 40px",
          height: "25vh",
        }}
      >
        <NavHeader />
        <hr
          style={{
            backgroundColor: "gray",
            height: "1px",
            border: "none",
            margin: "0px",
            marginBottom: "10px",
          }}
        />

        <AppBar
          position="static"
          color="transparent"
          style={{
            borderRadius: "1em",
            boxShadow: "none", // Remove shadow effect
          }}
        >
          <Toolbar>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs>
                <a href="/">
                  <img
                    src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-b8b4c00b25fde9cc8f514dc4947c266a.svg"
                    alt="logo"
                    width="150"
                    height="40"
                  />
                </a>
              </Grid>
              <Hidden smDown>
                <Grid item xs>
                  <Button
                    variant="contained"
                    style={{
                      background: "transparent",
                      borderRadius: "10px",
                      height: "40px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Used Cars
                  </Button>
                </Grid>
                <Grid item xs>
                  <Button
                    variant="contained"
                    style={{
                      background: "transparent",
                      borderRadius: "10px",
                      height: "40px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Used Bikes
                  </Button>
                </Grid>
                <Grid item xs>
                  <Button
                    variant="contained"
                    style={{
                      background: "transparent",
                      borderRadius: "10px",
                      height: "40px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    AutoStore
                  </Button>
                </Grid>
                <Grid item xs>
                  <Button
                    variant="contained"
                    style={{
                      background: "transparent",
                      borderRadius: "10px",
                      height: "40px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Videos
                  </Button>
                </Grid>
                <Grid item xs>
                  <Button
                    variant="contained"
                    style={{
                      background: "transparent",
                      borderRadius: "10px",
                      height: "40px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    More
                  </Button>
                </Grid>
              </Hidden>
              <Grid item xs>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#B73439",
                    borderRadius: "10px",
                    height: "40px",
                    color: "white",
                    textAlign: "center",
                    boxShadow: "none", // Remove shadow effect
                  }}
                  onClick={sellCarOpener}
                >
                  Post An Ad
                </Button>
              </Grid>
              <Hidden mdUp>
                <Grid item xs>
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMobileMenuOpen}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    anchorEl={mobileMenuAnchor}
                    keepMounted
                    open={Boolean(mobileMenuAnchor)}
                    onClose={handleMobileMenuClose}
                  >
                    <MenuItem onClick={handleMobileMenuClose}>
                      Used Cars
                    </MenuItem>
                    <MenuItem onClick={handleMobileMenuClose}>
                      Used Bikes
                    </MenuItem>
                    <MenuItem onClick={handleMobileMenuClose}>
                      AutoStore
                    </MenuItem>
                    <MenuItem onClick={handleMobileMenuClose}>Videos</MenuItem>
                    <MenuItem onClick={handleMobileMenuClose}>More</MenuItem>
                  </Menu>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default Navbar;
