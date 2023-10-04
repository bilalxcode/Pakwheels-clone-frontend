import React from "react";
import { Grid, TextField, Select, MenuItem, Button, Box } from "@mui/material";
const inputStyle = {
  background: "#fff",
  borderRadius: "1em",
  boxShadow: "none !important", // Remove the focus border
  "&:focus": {
    boxShadow: "none !important", // Remove the focus border
  },
};

function SearchInput() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Car Make or Model"
          style={inputStyle}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Select variant="outlined" fullWidth style={inputStyle}>
          <MenuItem value="">Select City</MenuItem>
          <optgroup label="Popular Cities">
            <MenuItem value="city1">City 1</MenuItem>
            <MenuItem value="city2">City 2</MenuItem>
          </optgroup>
          <optgroup label="Other Cities">
            <MenuItem value="other1">Other City 1</MenuItem>
            <MenuItem value="other2">Other City 2</MenuItem>
          </optgroup>
        </Select>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Select variant="outlined" fullWidth style={inputStyle}>
          <MenuItem value="">Price Range (in lacs)</MenuItem>
          <MenuItem value="5">5 lacs</MenuItem>
          <MenuItem value="10">10 lacs</MenuItem>
          <MenuItem value="15">15 lacs</MenuItem>
          <MenuItem value="20">20 lacs</MenuItem>
          <MenuItem value="25">25 lacs</MenuItem>
          <MenuItem value="30">30 lacs</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Button
          variant="contained"
          fullWidth
          color="success"
          startIcon={<i className="fa fa-search"></i>}
          style={{ padding: "1em" }}
        >
          Search
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={2}
        >
          <Button
            variant="outlined"
            style={{
              borderColor: "white",
              color: "white",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Advance Filter &gt;
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SearchInput;
