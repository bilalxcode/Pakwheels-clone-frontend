import React from "react";
import AutoStoreElements from "./AutoStoreElements";

function AutoStore() {
  return (
    <div>
      <div
        className="container-fluid"
        style={{
          background: "#F2F3F3",
          padding: "40px 40px",
          height: "70vh",
          marginTop: "10px",
        }}
      >
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ fontWeight: "bold", padding: "20px" }}>
              Auto Store Car Parts & Accessories
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <AutoStoreElements />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoStore;
