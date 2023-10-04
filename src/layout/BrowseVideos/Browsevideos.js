import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios"; // Import axios
import { toast } from "react-toastify";

function Browsevideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/getVideo", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const videos = response.data.videos;
        setVideos(videos);
      } else {
        toast.error("Failed to get Videos: " + response.data.message);
      }
    } catch (error) {
      console.error("Video fetch error: " + error);
      toast.error("Failed to Get videos: " + error.toString());
    }
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
    justifyContent: "center", // Center vertically
    textAlign: "center",
    padding: "8em", // Increased padding
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
    height: "200px", // Increased height
    width: "95%", // Increased width
  };
  const imageContainerStyle = {
    background: "linear-gradient(to bottom, #E7232D, #012D62)", // Replace with your desired colors
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "1.5em",
    borderRadius: "1em",
  };

  const textStyle = {
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better visibility
  };

  return (
    <Grid container style={{ marginTop: "10em", background: "#F2F3F3" }}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          fontWeight="bold"
          padding="20px"
        >
          Latest Videos
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box mt={2}>
          <Splide options={splideOptions}>
            {videos.map((video, index) => (
              <SplideSlide key={index}>
                <div style={slideStyle} className="card">
                  <a
                    href={video.link}
                    title={video.desc}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <iframe
                      style={{ borderRadius: "15px" }}
                      src={`https://www.youtube.com/embed/${video.link}`}
                      title={video.desc}
                      allowFullScreen
                    ></iframe>
                    <p>{video.desc}</p>
                  </a>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Browsevideos;
