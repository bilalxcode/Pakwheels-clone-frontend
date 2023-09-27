import React from "react";
import Videos from "./Videos";

function Browsevideos() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          background: "#FFF",
          padding: "40px 40px",
          height: "90vh",
          marginTop: "50px",
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <h3 style={{ fontWeight: "bold", padding: "20px" }}>
              Browse Our Videos
            </h3>
          </div>
          <div className="col-md-6 text-right">
            <a
              href="#"
              style={{
                textDecoration: "underline",
                marginTop: "20px !important",
              }}
            >
              View All Videos
            </a>
          </div>
        </div>
        <div className="row">
          <Videos
            link={"https://www.youtube.com/watch?v=o7pf4ITEBQ0"}
            desc={"Video 2 Description"}
          />
          <Videos
            link={"https://www.youtube.com/watch?v=o7pf4ITEBQ0"}
            desc={"Video 2 Description"}
          />
          <Videos
            link={"https://www.youtube.com/watch?v=o7pf4ITEBQ0"}
            desc={"Video 3 Description"}
          />
        </div>
      </div>
    </>
  );
}

export default Browsevideos;
