import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import axios from "axios";

function FeaturedNew() {
  const [carAds, setCarAds] = useState([]);

  useEffect(() => {
    async function fetchCarAds() {
      try {
        const response = await axios.get(
          "http://localhost:8080/admin/getEveryAd"
        );
        if (response.status === 200) {
          const ads = response.data.cars;
          console.log(ads);

          // Filter out newly launched and upcoming cars
          const filteredCarAds = ads.filter(
            (ad) => !ad.isNewlyLaunched && !ad.isUpcoming
          );
          // Sort by date (assuming you have a date property in your ad data)
          filteredCarAds.sort((a, b) => new Date(b.date) - new Date(a.date));
          // Take the latest 3 car ads
          const latestCarAds = filteredCarAds.slice(0, 3);
          setCarAds(latestCarAds);
        } else {
          console.error("Failed to fetch car ads: " + response.data.message);
        }
      } catch (error) {
        console.error("Error fetching car ads: " + error);
      }
    }

    fetchCarAds();
  }, []);

  const splideOptions = {
    type: "loop",
    perPage: 3,
    perMove: 1,
  };

  // Rest of your code remains the same
  const slideStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "5px 10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "95%", // Set slide width to 100%
    marginBottom: "20px", // Add margin between slides
  };

  const textStyle = {
    color: "blue",
    marginTop: "0.5em",
  };

  const priceStyle = {
    color: "green",
    fontSize: "14px",
  };

  const locationStyle = {
    color: "grey",
  };

  const imageStyle = {
    width: "200px", // Set a fixed width
    height: "150px", // Set a fixed height
    objectFit: "cover", // Maintain aspect ratio and crop if needed
  };

  return (
    <div className="container">
      <div className="nav-tabs-main mb-4">
        <ul className="nav nav-tabs">{/* ... (rest of your code) */}</ul>
        {/* Render the dropdown conditionally */}
        <div className="custom-dropdown" style={{ marginTop: "10px" }}>
          <Splide options={splideOptions}>
            {carAds.map((ad, index) => (
              <SplideSlide key={index}>
                <div style={slideStyle}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", position: "relative" }}
                  >
                    <img
                      src={
                        ad.images && ad.images.length > 0
                          ? `http://localhost:8080/${ad.images[0].replace(
                              /\\/g,
                              "/"
                            )}`
                          : "" // Handle the case where ad.images is undefined or empty
                      }
                      alt={`Image ${index + 1}`}
                      style={imageStyle}
                    />

                    <h5 style={textStyle}>{ad.modelName}</h5>
                    <p style={priceStyle}>{ad.price}</p>
                    <p style={locationStyle}>{ad.city}</p>
                  </a>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default FeaturedNew;
