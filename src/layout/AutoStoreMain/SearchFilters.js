import React, { useEffect, useState } from "react";
import {
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

function SearchFilters({
  filterOptions,
  setFilterOptions,
  getAllAds,
  categories,
  selectedCategory,
  setSelectedCategory, // Receive the function to update selected category
}) {
  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
    setSelectedCategory(selectedCategoryId); // Update the selected category state
  };

  const applyFilter = () => {
    setFilterOptions({ ...filterOptions, category: selectedCategory });
    getAllAds();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "15em",
        padding: "2em",
        background: "#F2F3F3",
        margin: "0.5em",
        borderRadius: "0.5em",
      }}
    >
      <Typography variant="outlined" style={{ fontWeight: "bold" }}>
        Filter Products:
      </Typography>


      <FormControl fullWidth variant="outlined" style={{ marginTop: "0.5em" }}>
        <label>Category</label>
        <Select
          name="category"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <MenuItem value="">All</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category._id} value={category._id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SearchFilters;
