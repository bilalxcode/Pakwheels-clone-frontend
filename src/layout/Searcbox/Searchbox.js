import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import SearchInput from "./SearchInput";

function Searchbox() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Grid item xs={12} sm={10} md={10} lg={10}>
        <Typography variant="h3" align="center" style={{ color: "#fff" }}>
          Find Used Cars in Pakistan
        </Typography>
        <Typography
          variant="body1"
          align="center"
          style={{ color: "#fff", padding: "1em" }}
        >
          With thousands of cars, we have just the right one for you
        </Typography>
        <Box mt={2}>
          <SearchInput />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Searchbox;
