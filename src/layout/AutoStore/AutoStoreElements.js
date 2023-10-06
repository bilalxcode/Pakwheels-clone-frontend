import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios"; // Import axios

import { Activate } from "../../store/navbarSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function AutoStoreElements() {
  const [activeTab, setActiveTab] = useState("category");
  const [dropdownVisible, setDropdownVisible] = useState(true);
  const [categories, setCategories] = useState([]); // State variable for categories

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible); // Toggle the dropdown visibility
  };

  useEffect(() => {
    // Fetch categories when the component mounts
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/admin/getCategory"
      );

      if (response.status === 200) {
        const categoriesData = response.data.categories;
        setCategories(categoriesData);
      } else {
        console.error("Failed to load categories: " + response.data.message);
      }
    } catch (error) {
      console.error("Loading categories error: " + error);
    }
  };

  const splideOptions = {
    type: "loop",
    perPage: 3,
    perMove: 1,
  };

  const slideStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Center vertically
    textAlign: "center",
    padding: "10px 20px", // Increased padding
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
    height: "200px", // Increased height
    width: "95%", // Increased width
  };
  const imageContainerStyle = {
    background: "linear-gradient(to bottom, #E7232D, #012D62)", // Replace with your desired colors
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "1.5em",
    borderRadius: "1em",
  };

  const textStyle = {
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better visibility
  };

  const AutoStoreNavigate = (e) => {
    e.preventDefault();
    dispatch(Activate({ user: "AutoStore" }));

    navigate("/autostore");
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box mt={2}>
          <Splide options={splideOptions}>
            {categories.map((category, index) => (
              <SplideSlide key={index}>
                <div style={slideStyle} className="card">
                  <a
                    href="/autostore"
                    onClick={AutoStoreNavigate}
                    title={`Category: ${category.name}`}
                  >
                    <div style={imageContainerStyle}>
                      <Typography variant="h6" style={textStyle}>
                        {category.name}
                      </Typography>
                    </div>
                  </a>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AutoStoreElements;
