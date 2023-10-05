import React from "react";
import Navbar from "../Navbar/Navbar";

const errorPageStyle = {
  padding: "40px 0",
  background: "#fff",
  fontFamily: "'Arvo', serif",
};

const bgStyle = {
  backgroundImage:
    "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
  height: "400px",
  backgroundPosition: "center",
};

const h1Style = {
  fontSize: "80px",
};

const h3Style = {
  fontSize: "80px",
};

const linkStyle = {
  color: "#fff",
  padding: "10px 20px",
  background: "#39ac31",
  margin: "20px 0",
  display: "inline-block",
};
const centerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh", // Adjust the height as needed
};

function ErrorPage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={centerStyle}>
        <section style={errorPageStyle} className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="col-sm-10 col-sm-offset-1 text-center">
                  <div style={bgStyle} className="four_zero_four_bg">
                    <h1 style={h1Style} className="text-center">
                      404
                    </h1>
                  </div>

                  <div className="contant_box_404">
                    <h3 style={h3Style} className="h2">
                      Look like you're lost
                    </h3>

                    <p>the page you are looking for is not available!</p>

                    <a href="/" style={linkStyle} className="link_404">
                      Go to Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ErrorPage;
