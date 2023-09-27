import React from "react";
import ReactPlayer from "react-player";

function Videos(props) {
  return (
    <div
      className="col-md-4 mb-1  p-5 "
      style={{
        borderRadius: "5px",
        padding: "10px 20px",
        background: "#F2F3F3",
      }}
    >
      <div
        className="pb-2"
        style={{
          borderRadius: "5px",
          padding: "20px 20px",
          background: "#fff",
        }}
      >
        <div className="player-wrapper ">
          <ReactPlayer
            url={props.link} // Replace with your video URL
            width="300px"
            height="200px"
            controls // Display video controls (play, pause, volume, etc.)
          />
          <a href="#">
            <h5 className="mt-2 ">{props.desc}</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Videos;
