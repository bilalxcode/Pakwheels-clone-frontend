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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Activate } from "../../store/navbarSlice";
import NavHeader from "./NavHeader";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false); // For dialog state
  const dispatch = useDispatch();
  const isHomePage = location.pathname === "/";

  const activeTab = useSelector((state) => state.navbar.activeTab);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const sellCarOpener = (e) => {
    e.preventDefault();
    navigate("/sell-vehicle/post-ad");
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    dispatch(Activate({ user: option }));

    // Navigate to the corresponding route when an option is clicked
    switch (option) {
      case "Used Cars":
        navigate("/used-cars");
        break;
      case "Used Bikes":
        navigate("/used-bikes");
        break;
      case "AutoStore":
        navigate("/autostore");
        break;
      case "Videos":
        navigate("/videos");
        break;
      case "More":
        // Open the dialog for "More" option
        handleDialogOpen();
        break;
      default:
        break;
    }
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
            boxShadow: "none",
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
                      boxShadow: "none",
                      border:
                        activeTab === "Used Cars" ? "1px solid white" : "none",
                      color: activeTab === "Used Cars" ? "red" : "white",
                    }}
                    onClick={() => handleOptionClick("Used Cars")}
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
                      boxShadow: "none",
                      border:
                        activeTab === "Used Bikes" ? "1px solid white" : "none",
                      color: activeTab === "Used Bikes" ? "red" : "white",
                    }}
                    onClick={() => handleOptionClick("Used Bikes")}
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
                      boxShadow: "none",
                      border:
                        activeTab === "AutoStore" ? "1px solid white" : "none",
                      color: activeTab === "AutoStore" ? "red" : "white",
                    }}
                    onClick={() => handleOptionClick("AutoStore")}
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
                      boxShadow: "none",
                      border:
                        activeTab === "Videos" ? "1px solid white" : "none",
                      color: activeTab === "Videos" ? "red" : "white",
                    }}
                    onClick={() => handleOptionClick("Videos")}
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
                      boxShadow: "none",
                      border: activeTab === "More" ? "1px solid white" : "none",
                      color: activeTab === "More" ? "red" : "white",
                    }}
                    onClick={() => handleOptionClick("More")}
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
                    boxShadow: "none",
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
                    <MenuItem
                      onClick={() => handleOptionClick("Used Cars")}
                      style={{
                        border:
                          activeTab === "Used Cars"
                            ? "1px solid white"
                            : "none",
                        color: activeTab === "Used Cars" ? "red" : "black",
                      }}
                    >
                      Used Cars
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleOptionClick("Used Bikes")}
                      style={{
                        border:
                          activeTab === "Used Bikes"
                            ? "1px solid white"
                            : "none",
                        color: activeTab === "Used Bikes" ? "red" : "black",
                      }}
                    >
                      Used Bikes
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleOptionClick("AutoStore")}
                      style={{
                        border:
                          activeTab === "AutoStore"
                            ? "1px solid white"
                            : "none",
                        color: activeTab === "AutoStore" ? "red" : "black",
                      }}
                    >
                      AutoStore
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleOptionClick("Videos")}
                      style={{
                        border:
                          activeTab === "Videos" ? "1px solid white" : "none",
                        color: activeTab === "Videos" ? "red" : "black",
                      }}
                    >
                      Videos
                    </MenuItem>
                    <MenuItem
                      onClick={handleDialogOpen}
                      style={{
                        border:
                          activeTab === "More" ? "1px solid white" : "none",
                        color: activeTab === "More" ? "red" : "black",
                      }}
                    >
                      More
                    </MenuItem>
                  </Menu>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>

      {/* Dialog for "More" option */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Coming Soon</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            This feature is coming soon. Stay tuned!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Navbar;
