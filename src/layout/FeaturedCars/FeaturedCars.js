import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Import Splide CSS

function FeaturedCars() {
  const splideOptions = {
    type: "loop",
    perPage: 3,
    perMove: 1,
  };

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
  };

  const priceStyle = {
    color: "green",
    fontSize: "14px",
  };

  const locationStyle = {
    color: "grey",
  };

  const imageStyle = {
    maxWidth: "100%", // Reduce the width of the image
    height: "auto", // Maintain aspect ratio
  };

  const featuredTagStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "5px 10px",
    position: "absolute",
    top: "10px",
    left: "10px",
    borderRadius: "5px",
    zIndex: "1",
  };

  return (
    <div className="container">
      <Splide options={splideOptions}>
        <SplideSlide>
          <div style={slideStyle}>
            <a
              href="#"
              style={{ textDecoration: "none", position: "relative" }}
            >
              <div style={featuredTagStyle}>Featured</div>
              <img
                src="https://cache4.pakwheels.com/ad_pictures/8588/Slide_toyota-corolla-gli-vvti-automatic-2014-85884015.webp"
                alt="Image 1"
                style={imageStyle}
              />
              <h5 style={textStyle}>Toyota Corolla</h5>
              <p style={priceStyle}>PKR 2,500,000</p>
              <p style={locationStyle}>Karachi</p>
            </a>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={slideStyle}>
            <a
              href="#"
              style={{ textDecoration: "none", position: "relative" }}
            >
              <div style={featuredTagStyle}>Featured</div>
              <img
                src="https://cache1.pakwheels.com/ad_pictures/8918/Slide_hyundai-tucson-awd-a-t-ultimate-2022-89183036.webp"
                alt="Image 1"
                style={imageStyle}
              />
              <h5 style={textStyle}>Hyundai Tucson</h5>
              <p style={priceStyle}>PKR 6,500,000</p>
              <p style={locationStyle}>Lahore</p>
            </a>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={slideStyle}>
            <a
              href="#"
              style={{ textDecoration: "none", position: "relative" }}
            >
              <div style={featuredTagStyle}>Featured</div>
              <img
                src="https://cache1.pakwheels.com/ad_pictures/8879/Slide_toyota-land-cruiser-cygnus-2004-88794871.webp"
                alt="Image 1"
                style={imageStyle}
              />
              <h5 style={textStyle}>Toyota Land Cruiser</h5>
              <p style={priceStyle}>PKR 10,500,000</p>
              <p style={locationStyle}>Multan</p>
            </a>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default FeaturedCars;
