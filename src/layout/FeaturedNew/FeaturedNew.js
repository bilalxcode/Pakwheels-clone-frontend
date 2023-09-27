import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// import "./FeaturedNew.css"; // You can create a CSS file for styling

function FeaturedNew() {
  const [activeTab, setActiveTab] = useState("popular");
  const [dropdownVisible, setDropdownVisible] = useState(true);

  const toggleDropdown = () => {
    setDropdownVisible(true);
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

  return (
    <div className="container">
      <div className="nav-tabs-main mb-4">
        <ul className="nav nav-tabs">
          <li className={`nav-item ${activeTab === "popular" ? "active" : ""}`}>
            <button
              style={{
                border: "1px solid grey",
                margin: "0px 10px",
                borderRadius: "10px",
              }}
              className="nav-link focus"
              onClick={() => {
                setActiveTab("popular");
                toggleDropdown();
              }}
            >
              Popular
            </button>
          </li>
          <li
            className={`nav-item ${activeTab === "upcoming" ? "active" : ""}`}
          >
            <button
              style={{
                border: "1px solid grey",
                margin: "0px 10px",
                borderRadius: "10px",
              }}
              className="nav-link focus"
              onClick={() => {
                setActiveTab("upcoming");
                toggleDropdown();
              }}
            >
              Upcoming
            </button>
          </li>
          <li
            className={`nav-item ${
              activeTab === "newlyLaunched" ? "active" : ""
            }`}
          >
            <button
              style={{
                border: "1px solid grey",
                margin: "0px 10px",
                borderRadius: "10px",
              }}
              className="nav-link focus"
              onClick={() => {
                setActiveTab("newlyLaunched");
                toggleDropdown();
              }}
            >
              Newly Launched
            </button>
          </li>
        </ul>

        {/* Render the dropdown conditionally */}
        {dropdownVisible && activeTab === "popular" && (
          <div className="custom-dropdown" style={{ marginTop: "10px" }}>
            <Splide options={splideOptions}>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", position: "relative" }}
                  >
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
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", position: "relative" }}
                  >
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
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", position: "relative" }}
                  >
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
            </Splide>
          </div>
        )}

        {dropdownVisible && activeTab === "upcoming" && (
          <div className="custom-dropdown" style={{ marginTop: "10px" }}>
            <Splide options={splideOptions}>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", position: "relative" }}
                  >
                    <img
                      src="https://cache3.pakwheels.com/system/car_generation_pictures/6067/medium/6_-_PNG.png?1637580605"
                      alt="Image 1"
                      style={imageStyle}
                    />
                    <h5 style={textStyle}>MG</h5>
                    <p style={priceStyle}>PKR 2,500,000</p>
                    <p style={locationStyle}>Karachi</p>
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", position: "relative" }}
                  >
                    <img
                      src="https://cache3.pakwheels.com/system/car_generation_pictures/6067/medium/6_-_PNG.png?1637580605"
                      alt="Image 1"
                      style={imageStyle}
                    />
                    <h5 style={textStyle}>MG</h5>
                    <p style={priceStyle}>PKR 2,500,000</p>
                    <p style={locationStyle}>Karachi</p>
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", position: "relative" }}
                  >
                    <img
                      src="https://cache3.pakwheels.com/system/car_generation_pictures/6067/medium/6_-_PNG.png?1637580605"
                      alt="Image 1"
                      style={imageStyle}
                    />
                    <h5 style={textStyle}>MG</h5>
                    <p style={priceStyle}>PKR 2,500,000</p>
                    <p style={locationStyle}>Karachi</p>
                  </a>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        )}

        {dropdownVisible && activeTab === "newlyLaunched" && (
          <div className="custom-dropdown" style={{ marginTop: "10px" }}>
            <Splide options={splideOptions}>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", position: "relative" }}
                  >
                    <img
                      src="https://cache1.pakwheels.com/system/car_generation_pictures/7250/medium/f.jpg?1667212296"
                      alt="Image 1"
                      style={imageStyle}
                    />
                    <h5 style={textStyle}>Vezel</h5>
                    <p style={priceStyle}>PKR 2,500,000</p>
                    <p style={locationStyle}>Karachi</p>
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", position: "relative" }}
                  >
                    <img
                      src="https://cache1.pakwheels.com/system/car_generation_pictures/7250/medium/f.jpg?1667212296"
                      alt="Image 1"
                      style={imageStyle}
                    />
                    <h5 style={textStyle}>Vezel</h5>
                    <p style={priceStyle}>PKR 2,500,000</p>
                    <p style={locationStyle}>Karachi</p>
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", position: "relative" }}
                  >
                    <img
                      src="https://cache1.pakwheels.com/system/car_generation_pictures/7250/medium/f.jpg?1667212296"
                      alt="Image 1"
                      style={imageStyle}
                    />
                    <h5 style={textStyle}>Vezel</h5>
                    <p style={priceStyle}>PKR 2,500,000</p>
                    <p style={locationStyle}>Karachi</p>
                  </a>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeaturedNew;
