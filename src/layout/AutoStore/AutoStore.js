import React from "react";
import AutoStoreElements from "./AutoStoreElements";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function AutoStore() {
  return (
    <Box
      sx={{
        background: "#F2F3F3",
        padding: "40px 40px",
        marginTop: "10em",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        align="center"
        fontWeight="bold"
        padding="20px 0px"
      >
        AutoStore
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AutoStoreElements />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AutoStore;
