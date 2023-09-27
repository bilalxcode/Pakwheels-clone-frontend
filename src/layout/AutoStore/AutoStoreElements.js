import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./AutoStore";
function AutoStoreElements() {
  const [activeTab, setActiveTab] = useState("category");
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
    // width: "95%", // Set slide width to 100%
    marginBottom: "20px", // Add margin between slides
    height: "150px",
    width: "90%",
    // textAlign: "center",
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
          <li
            className={`nav-item ${activeTab === "category" ? "active" : ""}`}
          >
            <button
              style={{
                border: "1px solid grey",
                margin: "0px 10px",
                borderRadius: "10px",
              }}
              className="nav-link focus"
              onClick={() => {
                setActiveTab("category");
                toggleDropdown();
              }}
            >
              Category
            </button>
          </li>
          <li className={`nav-item ${activeTab === "make" ? "active" : ""}`}>
            <button
              style={{
                border: "1px solid grey",
                margin: "0px 10px",
                borderRadius: "10px",
              }}
              className="nav-link focus "
              onClick={() => {
                setActiveTab("make");
                toggleDropdown();
              }}
            >
              Make
            </button>
          </li>
          <li className={`nav-item ${activeTab === "brand" ? "active" : ""}`}>
            <button
              style={{
                border: "1px solid grey",
                margin: "0px 10px",
                borderRadius: "10px",
              }}
              className="nav-link focus"
              onClick={() => {
                setActiveTab("brand");
                toggleDropdown();
              }}
            >
              Brand
            </button>
          </li>
        </ul>

        {/* Render the dropdown conditionally */}
        {dropdownVisible && activeTab === "category" && (
          <div className="custom-dropdown" style={{ marginTop: "10px" }}>
            <Splide options={splideOptions}>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle} className="card">
                  <a
                    href="#"
                    title="Audio / Video Accessories &amp; Spare Parts For Sale in Pakistan"
                  >
                    <img
                      style={{ marginTop: "5vh" }}
                      alt="Audio / Video"
                      height="50"
                      loading="lazy"
                      src="https://wsa1.pakwheels.com/assets/accessory-categories-19/audio-video-d136c716652722cd7a8d3163d160cabe.png"
                    />
                    <h5 style={textStyle}> Audio / Video</h5>
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle} className="card">
                  <a
                    href="#"
                    title="Audio / Video Accessories &amp; Spare Parts For Sale in Pakistan"
                  >
                    <img
                      style={{ marginTop: "5vh" }}
                      alt="Audio / Video"
                      height="50"
                      loading="lazy"
                      src="https://wsa1.pakwheels.com/assets/accessory-categories-19/lights-electrical-a667111a91a7657615f1549c9c30ddc6.png"
                    />
                    <h5 style={textStyle}> Electrical</h5>
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle} className="card">
                  <a
                    href="#"
                    title="Audio / Video Accessories &amp; Spare Parts For Sale in Pakistan"
                  >
                    <img
                      style={{ marginTop: "5vh" }}
                      alt="Audio / Video"
                      height="50"
                      loading="lazy"
                      src="https://wsa3.pakwheels.com/assets/accessory-categories-19/car-care-6ef8da4e984537dbac85793743020987.png"
                    />
                    <h5 style={textStyle}> Car Care</h5>
                  </a>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        )}

        {dropdownVisible && activeTab === "make" && (
          <div className="custom-dropdown" style={{ marginTop: "10px" }}>
            <Splide options={splideOptions}>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle} className="card">
                  <a
                    href="#"
                    title="Audio / Video Accessories &amp; Spare Parts For Sale in Pakistan"
                  >
                    <img
                      style={{ marginTop: "5vh" }}
                      alt="Audio / Video"
                      height="50"
                      loading="lazy"
                      src="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/042/resized/Tyota.png"
                    />
                    <h5 style={textStyle}> Toyota</h5>
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle} className="card">
                  <a
                    href="#"
                    title="Audio / Video Accessories &amp; Spare Parts For Sale in Pakistan"
                  >
                    <img
                      style={{ marginTop: "5vh" }}
                      alt="Audio / Video"
                      height="50"
                      loading="lazy"
                      src="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/041/resized/Suzuki.png"
                    />
                    <h5 style={textStyle}> Suzuki</h5>
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle} className="card">
                  <a
                    href="#"
                    title="Audio / Video Accessories &amp; Spare Parts For Sale in Pakistan"
                  >
                    <img
                      style={{ marginTop: "5vh" }}
                      alt="Audio / Video"
                      height="50"
                      loading="lazy"
                      src="https://cache2.pakwheels.com/system/car_manufacturers/manufacturers/000/000/014/resized/Honda.png"
                    />
                    <h5 style={textStyle}> Honda</h5>
                  </a>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        )}

        {dropdownVisible && activeTab === "brand" && (
          <div className="custom-dropdown" style={{ marginTop: "10px" }}>
            <Splide options={splideOptions}>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle} className="card">
                  <a
                    href="#"
                    title="Audio / Video Accessories &amp; Spare Parts For Sale in Pakistan"
                  >
                    <img
                      style={{ marginTop: "5vh" }}
                      alt="Audio / Video"
                      height="50"
                      loading="lazy"
                      src="https://cache4.pakwheels.com/system/brands/logos/000/000/134/resized/vic-medium.png?1647585823"
                    />
                    <h5 style={textStyle}> Vic </h5>
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle} className="card">
                  <a
                    href="#"
                    title="Audio / Video Accessories &amp; Spare Parts For Sale in Pakistan"
                  >
                    <img
                      style={{ marginTop: "5vh" }}
                      alt="Audio / Video"
                      height="50"
                      loading="lazy"
                      src="https://cache3.pakwheels.com/assets/brands/resized/missing.png"
                    />
                    <h5 style={textStyle}> Ultima</h5>
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                {/* Add your slide content */}
                {/* Example slide content */}
                <div style={slideStyle} className="card">
                  <a
                    href="#"
                    title="Audio / Video Accessories &amp; Spare Parts For Sale in Pakistan"
                  >
                    <img
                      style={{ marginTop: "5vh" }}
                      alt="Audio / Video"
                      height="50"
                      loading="lazy"
                      src="https://cache3.pakwheels.com/assets/brands/resized/missing.png"
                    />
                    <h5 style={textStyle}>Amsoil</h5>
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

export default AutoStoreElements;
