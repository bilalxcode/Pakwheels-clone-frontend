import React from "react";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import MyAdsPofile from "../layout/MyAds/MyAdsPofile";
import AllAdsPreview from "../layout/MyAds/AllAdsPreview";

function Myads() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "70vh",
        background: "#F2F3F3",
      }}
    >
      <div>
        <Navbar />
      </div>
      <div
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <MyAdsPofile />
        <AllAdsPreview />
        <Footer />
      </div>
    </div>
  );
}

export default Myads;
