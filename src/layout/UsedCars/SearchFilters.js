import React, { useEffect, useState } from "react";
import {
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function SearchFilters({ filterOptions, setFilterOptions }) {
  const [adsData, setAdsData] = useState([]);
  const [cities, setCities] = useState([]);
  const [engineCapacity, setEngineCapacity] = useState([]);
  const [engineCapacityOptions, setEngineCapacityOptions] = useState([]);
  const [transmissionOptions, setTransmissionOptions] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);

  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    getAllAds();
  }, []);
  const getAllAds = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/admin/getEveryAd"
      );

      if (response.status === 200) {
        const ads = response.data.cars;
        const uniqueCities = Array.from(
          new Set(ads.map((ad) => ad.city))
        ).filter((city) => city);
        const uniqueProvinces = Array.from(
          new Set(ads.map((ad) => ad.registeredIn))
        ).filter((province) => province);
        const uniqueEngineCapacities = Array.from(
          new Set(ads.map((ad) => ad.engineCapacity))
        ).filter((engineCapacity) => engineCapacity);
        const uniqueTransmissions = Array.from(
          new Set(ads.map((ad) => ad.transmission))
        ).filter((transmission) => transmission);
        const uniqueColors = Array.from(
          new Set(ads.map((ad) => ad.color))
        ).filter((color) => color);

        setAdsData(ads);
        setCities(uniqueCities);
        setProvinces(uniqueProvinces);
        setEngineCapacityOptions(uniqueEngineCapacities);
        setTransmissionOptions(uniqueTransmissions);
        setColorOptions(uniqueColors);
      } else {
        toast.error("Failed to load ads: " + response.data.message);
      }
    } catch (error) {
      console.error("Loading ads error: " + error);
      toast.error("Failed to load ads: " + error.toString());
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterOptions((prevFilterOptions) => ({
      ...prevFilterOptions,
      [name]: value,
    }));
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
        Filter Ads:
      </Typography>

      <ToastContainer />

      {/* SEARCH BY KEYWORD */}
      {/* <FormControl fullWidth variant="outlined">
        <label>SEARCH BY KEYWORD</label>
        <input type="text" name="keyword" placeholder="e.g. Honda in Lahore" />
      </FormControl> */}

      {/* CITY */}

      <FormControl fullWidth variant="outlined" style={{ marginTop: "0.5em" }}>
        <label>Available In</label>
        <Select
          name="city"
          onChange={handleFilterChange}
          value={filterOptions.city}
        >
          <MenuItem value="">All</MenuItem>
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* PROVINCE */}
      <FormControl fullWidth variant="outlined" style={{ marginTop: "0.5em" }}>
        <label>Registered In</label>
        <Select
          name="province"
          onChange={handleFilterChange}
          value={filterOptions.province}
        >
          <MenuItem value="">All</MenuItem>
          {provinces.map((province) => (
            <MenuItem key={province} value={province}>
              {province}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" style={{ marginTop: "0.5em" }}>
        <label>Engine Capacity</label>
        <Select
          name="engineCapacity"
          onChange={handleFilterChange}
          value={filterOptions.engineCapacity}
        >
          <MenuItem value="">All</MenuItem>
          {engineCapacityOptions.map((capacity) => (
            <MenuItem key={capacity} value={capacity}>
              {capacity}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" style={{ marginTop: "0.5em" }}>
        <label>Transmission</label>
        <Select
          name="transmission"
          onChange={handleFilterChange}
          value={filterOptions.transmission}
        >
          <MenuItem value="">All</MenuItem>
          {transmissionOptions.map((transmission) => (
            <MenuItem key={transmission} value={transmission}>
              {transmission}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" style={{ marginTop: "0.5em" }}>
        <label>Color</label>
        <Select
          name="color"
          onChange={handleFilterChange}
          value={filterOptions.color}
        >
          <MenuItem value="">All</MenuItem>
          {colorOptions.map((color) => (
            <MenuItem key={color} value={color}>
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* MAKE */}
      {/* <FormControl fullWidth variant="outlined">
        <label>MAKE</label>
        <Select
          name="make"
          onChange={handleFilterChange}
          value={filterOptions.make}
        >
          <MenuItem value="">All</MenuItem>
          {makes.map((make) => (
            <MenuItem key={make} value={make}>
              {make}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}

      {/* PRICE RANGE */}
      {/* ... */}
      {/* Add other filter options as needed */}

      {/* Apply Filter Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={getAllAds}
        style={{ marginTop: "1em" }}
      >
        Apply Filter
      </Button>
    </div>
  );
}

export default SearchFilters;