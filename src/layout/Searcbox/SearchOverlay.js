import React from "react";
import { Grid, Container } from "@mui/material";
import Searchbox from "./Searchbox";
import Navbar from "../Navbar/Navbar";

function SearchOverlay() {
  return (
    <div
      style={{
        background: "linear-gradient( #000,#01336F)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column">
          <Grid item>
            <Navbar />
          </Grid>
          <Grid item>
            <Searchbox />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SearchOverlay;
