import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { AdsData, UsersData } from "../../store/adminSlice";
import { useDispatch, useSelector } from "react-redux";
const notClickableButtonStyle = {
  pointerEvents: "none",
  opacity: 1,
};
function DashboardContent() {
  const adsData = useSelector((state) => state.admin.AllAds);
  const usersData = useSelector((state) => state.admin.AllUsers); // Access AllUsers from the Redux store
  // Access AllAds from the Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    // Load ads when the component mounts
    getAllAds();
  }, []); // Empty dependency array to run the effect once on mount

  const getAllAds = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/admin/getEveryAd"
      );

      if (response.status === 200) {
        const ads = response.data.cars;
        const users = response.data.users;

        console.log(ads, users);
        dispatch(AdsData({ AllAds: ads }));
        dispatch(UsersData({ AllUsers: users }));

        toast.success("Ads loaded successfully");
      } else {
        toast.error("Failed to load ads: " + response.data.message);
      }
    } catch (error) {
      console.error("Loading ads error: " + error);
      toast.error("Failed to load ads: " + error.toString());
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "3em",
        background: "#F2F3F3",
      }}
    >
      {adsData && adsData.length > 0 ? (
        <div style={{ justifyContent: "center" }}>
          <Grid container spacing={4} style={{ marginTop: "35px" }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ width: "20em" }}>
                <Paper elevation={3}>
                  <CardContent
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <Typography variant="h5" component="div">
                        Total Vehicles
                      </Typography>
                      <Typography variant="h3">{adsData.length}</Typography>
                    </div>
                    <Avatar
                      alt="Car Avatar"
                      src="https://image.shutterstock.com/image-vector/set-all-transport-means-world-260nw-2223117993.jpg"
                      sx={{ width: 100, height: 100 }} // Increase the size of the Avatar
                    />
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Pending Approval (
                      {adsData.filter((ad) => ad.isApproved === null).length})
                    </Button>
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Approved ({adsData.filter((ad) => ad.isApproved).length})
                    </Button>
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Removed (
                      {adsData.filter((ad) => ad.isApproved === false).length})
                    </Button>
                  </CardActions>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ width: "20em" }}>
                <Paper elevation={3}>
                  <CardContent
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <Typography variant="h5" component="div">
                        Total Cars
                      </Typography>
                      <Typography variant="h3">{adsData.length}</Typography>
                    </div>
                    <Avatar
                      alt="Car Avatar"
                      src="https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=740&t=st=1695727547~exp=1695728147~hmac=737feb57e9ff6c540fba1b0d810f5463ad1096d0770778e8f8aaaea55a86ed42s"
                      sx={{
                        width: 100,
                        height: 100, // Increase the size of the Avatar
                      }}
                    />
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Pending Approval (
                      {adsData.filter((ad) => ad.isApproved === null).length})
                    </Button>
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Approved ({adsData.filter((ad) => ad.isApproved).length})
                    </Button>
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Removed (
                      {adsData.filter((ad) => ad.isApproved === false).length})
                    </Button>
                  </CardActions>
                </Paper>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ width: "20em" }}>
                <Paper elevation={3}>
                  <CardContent
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div style={{ flex: 1 }}>
                      <Typography variant="h5" component="div">
                        Total Bikes
                      </Typography>
                      <Typography variant="h3">{adsData.length}</Typography>
                    </div>
                    <Avatar
                      alt="Car Avatar"
                      src="https://images.vexels.com/media/users/3/152654/isolated/lists/e5694fb12916c00661195c0a833d1ba9-sports-bike-icon.png"
                      sx={{ width: 100, height: 100 }} // Increase the size of the Avatar
                    />
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Pending Approval (
                      {adsData.filter((ad) => ad.isApproved === null).length})
                    </Button>
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Approved ({adsData.filter((ad) => ad.isApproved).length})
                    </Button>
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Removed (
                      {adsData.filter((ad) => ad.isApproved === false).length})
                    </Button>
                  </CardActions>
                </Paper>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ width: "20em" }}>
                <Paper elevation={3}>
                  <CardContent
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div style={{ flex: 1 }}>
                      <Typography variant="h5" component="div">
                        Total Users
                      </Typography>
                      <Typography variant="h3">{usersData.length}</Typography>
                    </div>
                    <Avatar
                      alt="Car Avatar"
                      src="https://img.freepik.com/free-vector/people-outdoor-card_24908-55055.jpg?w=360&t=st=1695728414~exp=1695729014~hmac=440939e22e2a66bb20f95df5b0d40dcdf45cf9ebd1838e4f78979e0c778516e2"
                      sx={{ width: 100, height: 100 }} // Increase the size of the Avatar
                    />
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Pending Approval (
                      {adsData.filter((ad) => ad.isApproved === null).length})
                    </Button>
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Approved ({adsData.filter((ad) => ad.isApproved).length})
                    </Button>
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Removed (
                      {adsData.filter((ad) => ad.isApproved === false).length})
                    </Button>
                  </CardActions>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ width: "20em" }}>
                <Paper elevation={3}>
                  <CardContent
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div style={{ flex: 1 }}>
                      <Typography variant="h5" component="div">
                        Total Videos
                      </Typography>
                      <Typography variant="h3">{adsData.length}</Typography>
                    </div>
                    <Avatar
                      alt="Car Avatar"
                      src="https://static.thenounproject.com/png/897669-200.png"
                      sx={{ width: 100, height: 100 }} // Increase the size of the Avatar
                    />
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Pending Approval (
                      {adsData.filter((ad) => ad.isApproved === null).length})
                    </Button>
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Approved ({adsData.filter((ad) => ad.isApproved).length})
                    </Button>
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Removed (
                      {adsData.filter((ad) => ad.isApproved === false).length})
                    </Button>
                  </CardActions>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ width: "20em" }}>
                <Paper elevation={3}>
                  <CardContent
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div style={{ flex: 1 }}>
                      <Typography variant="h5" component="div">
                        Total Blogs
                      </Typography>
                      <Typography variant="h3">{usersData.length}</Typography>
                    </div>
                    <Avatar
                      alt="Car Avatar"
                      src="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg?w=740&t=st=1695728533~exp=1695729133~hmac=2ef379abeb6c7b2b158e271696b409d5825cf7e1adc73a33e546b79968258ec0"
                      sx={{ width: 100, height: 100 }} // Increase the size of the Avatar
                    />
                  </CardContent>

                  <CardActions
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Pending Approval (
                      {adsData.filter((ad) => ad.isApproved === null).length})
                    </Button>
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Approved ({adsData.filter((ad) => ad.isApproved).length})
                    </Button>
                    <Button
                      style={notClickableButtonStyle}
                      size="small"
                      color="primary"
                    >
                      Removed (
                      {adsData.filter((ad) => ad.isApproved === false).length})
                    </Button>
                  </CardActions>
                </Paper>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <Typography variant="body2">No data available</Typography>
      )}
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#E7232D",
          textAlign: "center",
        }}
      >
        <Typography variant="caption" color="textSecondary">
          &copy; 2023 PAKWHEELS
        </Typography>
      </footer>
    </div>
  );
}

export default DashboardContent;