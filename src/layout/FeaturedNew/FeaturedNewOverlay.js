import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import FeaturedNew from "./FeaturedNew";

function FeaturedNewOverlay() {
  return (
    <div
      style={{
        background: "#F2F3F3",
        padding: "40px",
        marginTop: "10em",
      }}
    >
      <Grid item xs={12} sm={6}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          fontWeight="bold"
          padding="20px 0px"
        >
          Featured Cars
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FeaturedNew />
        </Grid>
      </Grid>
    </div>
  );
}

export default FeaturedNewOverlay;
