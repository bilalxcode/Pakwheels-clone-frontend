import React from "react";
import Navbar from "../layout/Navbar/Navbar";
import CarAdCard from "../layout/PostCarAd/CarAdCard";
import BikeAdCard from "../layout/PostBikeAd/BikeAdCard";

function SellCarPage() {
  return (
    <>
      <div
        style={{
          background: "linear-gradient( #000,#01336F)",
          padding: "0px 40px",
          height: "25vh",
        }}
      >
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row", // Set the direction to row
          justifyContent: "center",
          alignItems: "center",
          height: "80vh", // Adjust the height as needed
        }}
      >
        <div style={{ marginRight: "20px" }}>
          <CarAdCard />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <BikeAdCard />
        </div>
      </div>
    </>
  );
}

export default SellCarPage;
