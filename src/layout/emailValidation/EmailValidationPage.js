import React from "react";
import Navbar from "../Navbar/Navbar";
import ValidationBox from "./ValidationBox";

function EmailValidationPage() {
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
      <ValidationBox />
    </>
  );
}

export default EmailValidationPage;
