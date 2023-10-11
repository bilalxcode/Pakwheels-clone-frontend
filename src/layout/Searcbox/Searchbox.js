import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, MenuItem, Select, Button } from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Activate } from "../../store/navbarSlice";
import { useDispatch } from "react-redux";

function Searchbox() {
  const [cities, setCities] = useState([]);
  const [engineCapacityOptions, setEngineCapacityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(""); // Store selected city
  const [selectedPriceRange, setSelectedPriceRange] = useState(["", ""]); // Store selected price range as [minPrice, maxPrice]
  const [selectedEngineCapacity, setSelectedEngineCapacity] = useState(""); // Store selected engine capacity

  useEffect(() => {
    getAllAds();
  }, []);

  const getAllAds = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/admin/getEveryAd"
      );

      if (response.status === 200) {
        const Defaultads = response.data.cars;
        const ads = Defaultads.filter((ad) => ad.isApproved);
        const uniqueCities = Array.from(
          new Set(ads.map((ad) => ad.city))
        ).filter((city) => city);

        const uniqueEngineCapacities = Array.from(
          new Set(ads.map((ad) => ad.engineCapacity))
        ).filter((engineCapacity) => engineCapacity);

        setCities(uniqueCities);
        setEngineCapacityOptions(uniqueEngineCapacities);
      } else {
        toast.error("Failed to load ads: " + response.data.message);
      }
    } catch (error) {
      console.error("Loading ads error: " + error);
      toast.error("Failed to load ads: " + error.toString());
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearch = () => {
    // Build the query parameters string
    const queryParams = new URLSearchParams();
    if (selectedCity) {
      queryParams.append("city", selectedCity);
    }
    if (selectedPriceRange[0] !== "" && selectedPriceRange[1] !== "") {
      // Append the selected price range as "minPrice-maxPrice"
      const priceRange = `${selectedPriceRange[0]}-${selectedPriceRange[1]}`;
      queryParams.append("price", priceRange);
    }
    if (selectedEngineCapacity) {
      queryParams.append("engineCapacity", selectedEngineCapacity);
    }

    // Construct the full URL with query parameters
    const searchUrl = `/used-cars?${queryParams.toString()}`;
    dispatch(Activate({ user: "Used Cars" }));
    localStorage.setItem("ActiveTab", "Used Cars");
    // Navigate to the search URL
    navigate(searchUrl, {
      state: {
        city: selectedCity,
        price: selectedPriceRange,
        engineCapacity: selectedEngineCapacity,
      },
    });

    setSelectedCity("");
    setSelectedPriceRange(["", ""]);
    setSelectedEngineCapacity("");
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Grid item xs={12} sm={10} md={10} lg={10}>
        <Typography
          variant="h3"
          align="center"
          style={{ color: "#fff", marginTop: "-1em" }}
        >
          Find Used Cars in Pakistan
        </Typography>
        <Typography
          variant="body1"
          align="center"
          style={{ color: "#fff", padding: "1em" }}
        >
          With thousands of cars, we have just the right one for you
        </Typography>
        <Box mt={2} style={{ marginTop: "2em" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <label style={{ color: "#fff" }}>Available In</label>
              <Select
                style={{ width: "14em", backgroundColor: "white" }}
                name="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={3}>
              <label style={{ color: "#fff" }}>Price range</label>
              <div style={{ display: "flex" }}>
                <Select
                  style={{ width: "7em", backgroundColor: "white" }}
                  name="minPrice"
                  value={selectedPriceRange[0]}
                  onChange={(e) =>
                    setSelectedPriceRange([
                      e.target.value,
                      selectedPriceRange[1],
                    ])
                  }
                >
                  <MenuItem value="">Min</MenuItem>
                  <MenuItem value="5">5 Lacs</MenuItem>
                  <MenuItem value="10">10 Lacs</MenuItem>
                  <MenuItem value="20">20 Lacs</MenuItem>
                  <MenuItem value="40">40 Lacs</MenuItem>
                  <MenuItem value="60">60 Lacs</MenuItem>
                  <MenuItem value="80">80 Lacs</MenuItem>
                </Select>
                <Select
                  style={{
                    width: "7em",
                    backgroundColor: "white",
                    marginLeft: "0.2em",
                  }}
                  name="maxPrice"
                  value={selectedPriceRange[1]}
                  onChange={(e) =>
                    setSelectedPriceRange([
                      selectedPriceRange[0],
                      e.target.value,
                    ])
                  }
                >
                  <MenuItem value="">Max</MenuItem>
                  <MenuItem value="10">10 Lacs</MenuItem>
                  <MenuItem value="20">20 Lacs</MenuItem>
                  <MenuItem value="40">40 Lacs</MenuItem>
                  <MenuItem value="60">60 Lacs</MenuItem>
                  <MenuItem value="80">80 Lacs</MenuItem>
                  <MenuItem value="100">100 Lacs</MenuItem>

                  {/* Add other price options */}
                </Select>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <label style={{ color: "#fff" }}>Engine Capacity</label>
              <Select
                style={{ width: "14em", backgroundColor: "white" }}
                name="engineCapacity"
                value={selectedEngineCapacity}
                onChange={(e) => setSelectedEngineCapacity(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {engineCapacityOptions.map((engineCapacity) => (
                  <MenuItem key={engineCapacity} value={engineCapacity}>
                    {engineCapacity}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={3} style={{ marginTop: "2em" }}>
              <Button
                variant="contained"
                fullWidth
                color="success"
                startIcon={<i className="fa fa-search"></i>}
                style={{ padding: "1em", outline: "none", border: "none" }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Searchbox;
