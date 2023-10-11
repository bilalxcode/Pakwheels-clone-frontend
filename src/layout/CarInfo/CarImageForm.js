import React, { useEffect, useState } from "react";
import { Avatar, Button, CircularProgress } from "@mui/material";
import { Form, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import DoneIcon from "@mui/icons-material/Done"; // Import the tick emoji icon
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CarImageForm({ carCreated, car }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(-1);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [imageSent, setImageSent] = useState(false); // State for loading indicator
  const [alertSeverity, setAlertSeverity] = useState("warning");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false); // State for showing the alert
  const navigate = useNavigate();

  const handleImageUpload = async (event) => {
    const files = event.target.files;
    const newUploadedFiles = [];
    const formData = new FormData(); // Create FormData here

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageSrc = e.target.result;
        setSelectedImages((prevSelectedImages) => [
          ...prevSelectedImages,
          { src: imageSrc, isMain: prevSelectedImages.length === 0 },
        ]);

        newUploadedFiles.push({ file, isMain: newUploadedFiles.length === 0 });

        if (newUploadedFiles.length === files.length) {
          // All files have been read and added to state
          setUploadedFiles(newUploadedFiles);

          // Now you can log formData here, and it should work
          console.log("FormData after appending files:", formData);
        }
      };

      reader.readAsDataURL(file);

      // Append the file to FormData
      formData.append(`image${i}`, file);
    }
  };
  const [image, setImage] = useState();

  const onInputChange = (event) => {
    const files = event.target.files;
    const newUploadedFiles = [];
    const newSelectedImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newUploadedFiles.push({ file, isMain: false });

      // Create a URL for each selected image to display a preview
      const imageURL = URL.createObjectURL(file);
      newSelectedImages.push({ src: imageURL, isMain: false });
    }

    setSelectedImages((prevSelectedImages) => [
      ...prevSelectedImages,
      ...newSelectedImages,
    ]);

    setUploadedFiles((prevUploadedFiles) => [
      ...prevUploadedFiles,
      ...newUploadedFiles,
    ]);
  };

  const submitImage = async (e) => {
    e.preventDefault();

    if (!carCreated) {
      // Display an alert to the user to submit car info form first
      // setAlertSeverity("warning");
      // setAlertMessage("Please submit the car info form first.");
      // setShowAlert(true); // Set showAlert to true to display the alert
      toast.error("Please submit the car info form first."); // Display a success message

      setSelectedImages([]);
      setUploadedFiles([]);
      return;
    }
    if (uploadedFiles.length <= 2) {
      // setAlertSeverity("warning");
      // setAlertMessage("Please choose minimum 3 images.");
      // setShowAlert(true); // Set showAlert to true to display the alert
      toast.error("Please choose minimum 3 images."); // Display a success message

      return;
    }
    setShowAlert(false);
    setIsLoading(true);
    const formData = new FormData();

    uploadedFiles.forEach((fileData, index) => {
      formData.append("images[]", fileData.file); // Use the same field name "images[]"
    });

    formData.append("car", JSON.stringify(car));

    try {
      const response = await axios.post(
        "http://localhost:8080/ad/car-images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Images uploaded successfully");
        setImageSent(true);
        toast.success("Step 2 Completed"); // Display a success message

        setTimeout(() => {
          setIsLoading(false);
        }, 2000); // Set loading state to false when the request is completed
      }
    } catch (error) {
      setIsLoading(false);

      console.error("Error uploading images:", error);
      setAlertSeverity("error");
      setAlertMessage("Error uploading images. Please try again.");
      setShowAlert(true);
      toast.error("Error uploading images. Please try again."); // Display a success message
      // Set showAlert to true to display the alert
    }
  };

  const handleSubmit = async () => {
    if (uploadedFiles.length === 0) {
      // Show the alert if no images are chosen
      setShowAlert(true);
      return; // Don't proceed with the submission
    }
    setShowAlert(false);

    const formData = new FormData();
    // Append each uploaded file to the FormData
    uploadedFiles.forEach((fileData, index) => {
      formData.append(`image${index}`, fileData.file);
    });

    try {
      console.log("Client formData:", formData);

      const response = await axios.post(
        "http://localhost:8080/ad/car-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the correct content type
          },
        }
      );

      if (response.status === 200) {
        console.log("Images uploaded successfully");
        // Handle the response from the server as needed
      } else {
        // Handle non-200 status codes here
        console.error("Image upload failed with status code:", response.status);
        setAlertSeverity("error");
        setAlertMessage("Image upload failed. Please try again.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  const handleSetMainImage = (index) => {
    setMainImageIndex(index);
  };

  return (
    <div className="container my-5">
      <div
        className="card p-4"
        style={{
          width: "100%",
          border: "2px solid lightgrey",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "130%",
          borderStyle: "outset", // Center horizontally
        }}
      >
        <div className="card-content">
          <h2 style={{ color: "#333333" }}>Step 2: Upload Images</h2>
          <p>Photos should be in 'jpeg, jpg, png, gif' format only.</p>

          <div className="form-group">
            {!imageSent && (
              <label htmlFor="imageUpload" className="btn btn-primary">
                Add Images
                <input
                  type="file"
                  id="imageUpload"
                  name="images"
                  accept="image/jpeg, image/jpg, image/png, image/gif"
                  style={{ display: "none" }}
                  multiple
                  // onChange={handleImageUpload}
                  onChange={onInputChange}
                />
              </label>
            )}
            <ToastContainer />

            {selectedImages.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {selectedImages.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: "10px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      borderRadius: "5px",
                      marginRight: "10px",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={`Image ${index}`}
                      style={{
                        maxWidth: "100px",
                        maxHeight: "100px",
                        marginBottom: "5px",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
            {showAlert && (
              <Alert severity={alertSeverity}>
                <AlertTitle>
                  {alertSeverity === "error" ? "Error" : "Warning"}
                </AlertTitle>
                {alertMessage}
              </Alert>
            )}
            {selectedImages.length === 0 && <p>No file chosen</p>}
            <small>
              <span style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Tick"
                  src="https://img.freepik.com/free-vector/green-double-circle-check-mark_78370-1749.jpg?w=740&t=st=1695133203~exp=1695133803~hmac=138fe4f59033b858ba29f89d6f574988d937349c516f6f78cb5c3bfd770570bf"
                  sx={{ width: 24, height: 24, m: 1 }}
                />
                Adding at least 8 pictures improves the chances for a quick
                sale.
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Tick"
                  src="https://img.freepik.com/free-vector/green-double-circle-check-mark_78370-1749.jpg?w=740&t=st=1695133203~exp=1695133803~hmac=138fe4f59033b858ba29f89d6f574988d937349c516f6f78cb5c3bfd770570bf"
                  sx={{ width: 24, height: 24, m: 1 }}
                />
                Adding clear Front, Back, and Interior pictures of your car
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Tick"
                  src="https://img.freepik.com/free-vector/green-double-circle-check-mark_78370-1749.jpg?w=740&t=st=1695133203~exp=1695133803~hmac=138fe4f59033b858ba29f89d6f574988d937349c516f6f78cb5c3bfd770570bf"
                  sx={{ width: 24, height: 24, m: 1 }}
                />
                Increases the quality of your Ad and gets you noticed more.
              </span>
            </small>
          </div>

          {isLoading ? (
            // Show loading indicator while isLoading is true
            <CircularProgress />
          ) : imageSent ? (
            // Show the DoneIcon when imageSent is true
            <DoneIcon fontSize="large" style={{ color: "green" }} />
          ) : (
            // Show the Submit button when neither isLoading nor imageSent is true
            <Button
              onClick={submitImage}
              style={{ outline: "none", border: "none" }}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarImageForm;
