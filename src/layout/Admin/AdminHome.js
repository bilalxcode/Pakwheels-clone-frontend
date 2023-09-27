import React, { useState, useEffect } from "react";
import DashboardContent from "./DashboardContent";
import clsx from "clsx";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Avatar,
  Card,
  CardContent,
  Grid,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import StoreIcon from "@mui/icons-material/Store";
import YouTubeIcon from "@mui/icons-material/YouTube";
import BookIcon from "@mui/icons-material/Book";
import UsersView from "./UsersView";

const drawerWidth = 300;

const AdminHome = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    localStorage.getItem("selectedMenuItem") || "Dashboard"
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (text) => {
    setSelectedMenuItem(text);
    localStorage.setItem("selectedMenuItem", text); // Store the selected menu item in local storage
  };

  useEffect(() => {
    // Add event listener to close the drawer on outside click
    const handleOutsideClick = (e) => {
      if (open && e.target.closest(".appBar") === null) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <div
        className={clsx("appBar", {
          appBarShift: open,
        })}
      >
        <AppBar
          style={{ background: "linear-gradient( #000,#01336F)" }}
          position="fixed"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx("menuButton", open && "hide")}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {selectedMenuItem === "Dashboard"
                ? "Pakwheels Admin Dashboard"
                : selectedMenuItem}
            </Typography>
            <div style={{ marginLeft: "auto" }}>
              <Avatar src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1406364553/kmsoahr21m6zogtykmsz.png" />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: "drawerPaper",
        }}
      >
        <div className="drawerHeader" style={{ marginTop: "20px" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            "Dashboard",
            "Users",
            "Vehicles",
            "AutoStore",
            "Videos",
            "Blogs",
          ].map((text, index) => (
            <ListItem
              button
              key={text}
              selected={selectedMenuItem === text}
              onClick={() => handleMenuItemClick(text)}
            >
              <ListItemIcon>
                {index === 0 && <DashboardIcon />}
                {index === 1 && <PeopleAltIcon />}
                {index === 2 && <DriveEtaIcon />}
                {index === 3 && <StoreIcon />}
                {index === 4 && <YouTubeIcon />}
                {index === 5 && <BookIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List style={{ position: "absolute", bottom: 0, width: "100%" }}>
          {["Log Out"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index === 0 && <MeetingRoomIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx("content", {
          contentShift: open,
        })}
      >
        <div className="drawerHeader" />
        {selectedMenuItem === "Dashboard" && <DashboardContent />}
        {selectedMenuItem === "Users" && <UsersView />}
        {selectedMenuItem === "Vehicles" && (
          <Typography paragraph>Vehicles Content</Typography>
        )}
      </main>
    </div>
  );
};

export default AdminHome;
