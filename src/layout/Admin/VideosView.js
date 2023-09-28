import React, { useState } from "react";
import {
  Paper,
  Tabs,
  Tab,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function VideosView() {
  const [value, setValue] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");
  const [videos, setVideos] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const isUrlValid = (url) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleUploadVideo = async () => {
    if (isUrlValid(videoUrl)) {
      try {
        const response = await axios.post(
          "http://localhost:8080/admin/adVideo",
          {
            videoUrl: videoUrl,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          toast.success("Video Uploaded Successfully");
        } else {
          toast.error("Failed to Upload Video: " + response.data.message);
        }
      } catch (error) {
        console.error("Video Upload error: " + error);
        toast.error("Failed to upload video: " + error.toString());
      }
      setOpenDialog(false);
    } else {
      toast.error(
        "Invalid URL. Please enter a valid URL starting with 'http' or 'https'."
      );
    }
  };
  const getVideos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/getVideo", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const videos = response.data.videos;
        setVideos(videos); // Remove the extra array wrapping
      } else {
        toast.error("Failed to get Videos: " + response.data.message);
      }
    } catch (error) {
      console.error("Video fetch error: " + error);
      toast.error("Failed to Get videos: " + error.toString());
    }
  };

  const openAddVideoDialog = () => {
    setOpenDialog(true);
  };

  const closeAddVideoDialog = () => {
    setOpenDialog(false);
  };

  const handleDeleteVideo = (url) => {
    const updatedVideos = videos.filter((video) => video !== url);
    setVideos(updatedVideos);
  };

  return (
    <div style={{ marginTop: "1em", padding: "1em" }}>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={openAddVideoDialog}
            style={{
              marginTop: "5em",
              position: "absolute",
              top: "1em",
              right: "1em",
            }}
          >
            Add New Video
          </Button>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginTop: "3em" }}>
            <Tabs value={value} onChange={handleTabChange}>
              <Tab
                style={{
                  fontSize: "1em",
                  outline: "none",
                }}
                label="Currently Live Videos"
              />
            </Tabs>
            <TableContainer
              component={Paper}
              style={{
                marginTop: "1em",
                width: "100%",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Video</TableCell>
                    <TableCell>Actions</TableCell>
                    <TableCell>Video</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <ToastContainer />
                <TableBody>
                  {videos.map((video) => (
                    <TableRow key={video}>
                      <TableCell>
                        <iframe
                          title={`Video ${video}`}
                          width="360"
                          height="215"
                          src={video}
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => handleDeleteVideo(video)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                      {videos.indexOf(video) + 1 < videos.length ? (
                        <React.Fragment>
                          <TableCell>
                            <iframe
                              title={`Video ${
                                videos[videos.indexOf(video) + 1]
                              }`}
                              width="360"
                              height="215"
                              src={videos[videos.indexOf(video) + 1]}
                              frameBorder="0"
                              allowFullScreen
                            ></iframe>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outlined"
                              color="secondary"
                              onClick={() =>
                                handleDeleteVideo(
                                  videos[videos.indexOf(video) + 1]
                                )
                              }
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </React.Fragment>
                      ) : (
                        <TableCell></TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
      </Grid>

      <Dialog
        open={openDialog}
        onClose={closeAddVideoDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Video</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the URL of the video you want to add.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="videoUrl"
            label="Video URL"
            type="url"
            fullWidth
            value={videoUrl}
            onChange={handleVideoUrlChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAddVideoDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default VideosView;
