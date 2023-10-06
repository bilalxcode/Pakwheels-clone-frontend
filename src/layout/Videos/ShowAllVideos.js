import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CircularProgress } from "@mui/material";
function ShowAllVideos() {
  const [videos, setVideos] = useState([]);
  const [latestVideo, setLatestVideo] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State to track loading state

  useEffect(() => {
    // Show CircularProgress for 1 second
    const loadingTimer = setTimeout(() => {
      setIsLoading(false); // After 1 second, set isLoading to false
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Fetch all videos when the component mounts and isLoading is false
      getVideos();
    }
  }, [isLoading]);

  const getVideos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/getVideo", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const videoData = response.data;

        // Sort videos by date in descending order (newest to oldest)
        const sortedVideos = videoData.videos.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });

        // Reverse the order to make the latest video appear at the top
        const reversedVideos = [...sortedVideos].reverse();

        setVideos(reversedVideos);

        // Set the latest video as the first one
        if (reversedVideos.length > 0) {
          setLatestVideo(reversedVideos[0]);
        }
      } else {
        console.error("Failed to get Videos: " + response.data.message);
        // Handle the error, show a toast message, or perform other error handling here
      }
    } catch (error) {
      console.error("Video fetch error: " + error);
      // Handle the error, show a toast message, or perform other error handling here
    }
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      {isLoading ? ( // Show CircularProgress while isLoading is true
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <div style={{ flex: 3, margin: "1em" }}>
            {selectedVideo ? (
              <div>
                <h2 style={{ color: "#434343", fontWeight: "bold" }}>
                  Selected Video
                </h2>
                <iframe
                  width="90%"
                  height="450px" // Increase height for the latest video
                  src={`https://www.youtube.com/embed/${selectedVideo.link}`}
                  title={selectedVideo.title}
                  allowFullScreen
                  frameBorder="0"
                  style={{
                    margin: "1em 0em",
                    borderRadius: "1em",
                  }}
                ></iframe>
              </div>
            ) : latestVideo ? (
              <div>
                <h2 style={{ color: "#434343", fontWeight: "bold" }}>
                  Latest Video
                </h2>
                <iframe
                  width="90%"
                  height="450px" // Increase height for the latest video
                  src={`https://www.youtube.com/embed/${latestVideo.link}`}
                  title={latestVideo.title}
                  allowFullScreen
                  style={{
                    margin: "1em 0em",
                    borderRadius: "1em",
                  }}
                  frameBorder="0"
                ></iframe>
              </div>
            ) : null}
          </div>
          <div
            style={{
              flex: 1,
              overflowY: "scroll",
              maxHeight: "600px",
              border: "2px solid lightgrey",
              borderRadius: "0.8em",
              padding: "1em",
              margin: "1em 0em",
              marginLeft: "-5em",
            }}
          >
            <h2 style={{ color: "#434343", fontWeight: "bold" }}>All Videos</h2>
            <ul>
              {videos.map((video) => (
                <li
                  key={video.id}
                  onClick={() => handleVideoClick(video)}
                  style={{
                    cursor: "pointer",
                    margin: "1em 0em",
                    borderRadius: "1em",
                    listStyle: "none",
                  }}
                >
                  {/* Display video information here */}
                  <p>{video.title}</p>
                  <iframe
                    width="270"
                    height="200" // Reduce height for videos in the list
                    src={`https://www.youtube.com/embed/${video.link}`}
                    title={video.title}
                    allowFullScreen
                    frameBorder="0"
                    style={{
                      margin: "1em 0em",
                      borderRadius: "1em",
                    }}
                  ></iframe>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div style={{ marginTop: "3em" }}>
        <Footer />
      </div>
    </>
  );
}

export default ShowAllVideos;
