import React from "react";
import { Grid, Typography } from "@mui/material";
import BrowseCarousel from "./BrowseCarousel";

function BrowseUsedCarsOverlay() {
  return (
    <Grid
      container
      style={{
        background: "#F2F3F3",
        padding: "0px 40px",
        marginTop: "8em",
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          fontWeight="bold"
          padding="20px"
        >
          Browse Used Vehicles
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <BrowseCarousel />
      </Grid>
    </Grid>
  );
}

export default BrowseUsedCarsOverlay;
