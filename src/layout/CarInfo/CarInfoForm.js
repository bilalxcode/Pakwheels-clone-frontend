import {
  ButtonBase,
  Checkbox,
  CircularProgress,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done"; // Import the tick emoji icon
import Button from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CarInfoForm({ carCreated, setCarCreated, setCar }) {
  const user = useSelector((state) => state.authentication.user);
  const userId = user._id;

  const [formData, setFormData] = useState({
    city: "",
    modelName: "",
    registeredIn: "",
    color: "",
    mileage: "",
    price: "",
    description: "",
    engineType: "",
    transmission: "",
    engineCapacity: "",
    assembly: "",
  });
  const [selectedFeatures, setSelectedFeatures] = useState([]); // State to hold selected features
  //   const [carCreated, setCarCreated] = useState(false); // State to hold selected features
  const [isLoading, setIsLoading] = useState(false); // State to control the loader

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log("Form Data :", formData);
    console.log("Features :", selectedFeatures);
    console.log(userId);

    try {
      setIsLoading(true); // Show the loader

      // Simulate a 2-second delay for demonstration purposes
      setTimeout(async () => {
        // Send a POST request to your server
        const response = await axios.post(
          "http://localhost:8080/ad/post-car-ad",
          {
            formData,
            selectedFeatures,
            userId,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setIsLoading(false); // Hide the loader
          toast.success("Step 1 Completed"); // Display a success message
          setCarCreated(true);
          console.log("car created without approval");
          const carData = response.data.car;
          setCar(carData);
          console.log(carData);
        } else {
          setIsLoading(false); // Hide the loader

          //   alert(response.data.error);
          toast.error(response.data.error);
        }
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      toast.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleColorChange = (event) => {
    setFormData({ ...formData, color: event.target.value });
  };

  const handleEngineType = (event) => {
    setFormData({ ...formData, engineType: event.target.value });
  };
  const handleEngineCapacity = (event) => {
    setFormData({ ...formData, engineCapacity: event.target.value });
  };
  const handleTransmission = (event) => {
    setFormData({ ...formData, transmission: event.target.value });
  };
  const handleAssembly = (event) => {
    setFormData({ ...formData, assembly: event.target.value });
  };

  const handleFeatureChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedFeatures([...selectedFeatures, value]);
    } else {
      setSelectedFeatures(
        selectedFeatures.filter((feature) => feature !== value)
      );
    }
  };

  const features = [
    "Front Camera",
    "Air Bags",
    "Air Conditioning",
    "Alloy Rims",
    "AM/FM Radio",
    "CD Player",
    "Cassette Player",

    "Cool Box",
  ];

  return (
    <div className="container mt-5 ">
      <div
        className="card p-4"
        style={{
          width: "100%",
          height: "100%",
          border: "2px solid lightgrey",
          borderStyle: "outset", // Center horizontally
        }}
      >
        <div className="card-content">
          <h2 style={{ color: "#333333" }}>Step 1: Car Information</h2>
          <p>(All fields marked with * are mandatory)</p>
          <ToastContainer />

          <form onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <select
                    className="form-control"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                  >
                    <option value="">Select City</option>
                    <option value="lahore">Lahore</option>
                    <option value="karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label htmlFor="modelName">Model Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="modelName"
                    name="modelName"
                    required
                    value={formData.modelName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label htmlFor="registeredIn">Registered In *</label>
                  <select
                    className="form-control"
                    id="registeredIn"
                    name="registeredIn"
                    required
                    value={formData.registeredIn}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Region</option>
                    <option value="Un-Registered">Un-Registered</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Sindh">Sindh</option>
                    <option value="KPK">KPK</option>
                    <option value="Balochistan">Balochistan</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label htmlFor="color">Exterior Color *</label>
                  <select
                    className="form-control"
                    id="color"
                    name="color"
                    required
                    value={formData.color}
                    onChange={handleColorChange}
                  >
                    <option value="">Select Color</option>
                    <option
                      value="White"
                      style={{ color: "black", backgroundColor: "white" }}
                    >
                      White
                    </option>
                    <option
                      value="Black"
                      style={{ color: "white", backgroundColor: "black" }}
                    >
                      Black
                    </option>
                    <option
                      value="GunMetallic"
                      style={{ color: "white", backgroundColor: "#2a3439" }}
                    >
                      Gun Metallic
                    </option>
                    <option
                      value="Silver"
                      style={{ color: "white", backgroundColor: "#808080" }}
                    >
                      Silver
                    </option>
                    <option
                      value="Blue"
                      style={{ color: "white", backgroundColor: "#0000FF" }}
                    >
                      Blue
                    </option>
                    <option
                      value="Red"
                      style={{ color: "white", backgroundColor: "#FF0000" }}
                    >
                      Red
                    </option>
                    <option
                      value="Green"
                      style={{ color: "white", backgroundColor: "#008000" }}
                    >
                      Green
                    </option>
                    <option
                      value="Navy"
                      style={{ color: "white", backgroundColor: "#000080" }}
                    >
                      Navy
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label htmlFor="Engine">Engine Type *</label>
                  <select
                    className="form-control"
                    id="engine"
                    name="engine"
                    required
                    value={formData.engineType}
                    onChange={handleEngineType}
                  >
                    <option value="">Engine Type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                    <option value="LPG">LPG</option>
                    <option value="CNG">CNG</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label htmlFor="engineCapacity">Engine Capacity * (cc)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="engineCapacity"
                    name="engineCapacity"
                    required
                    value={formData.engineCapacity}
                    onChange={handleEngineCapacity}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label htmlFor="Transmission">Transmission *</label>
                  <select
                    className="form-control"
                    id="transmission"
                    name="transmission"
                    required
                    value={formData.transmission}
                    onChange={handleTransmission}
                  >
                    <option value="">Transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label htmlFor="Assembly">Assembly *</label>
                  <select
                    className="form-control"
                    id="Assembly"
                    name="Assembly"
                    required
                    value={formData.assembly}
                    onChange={handleAssembly}
                  >
                    <option value="">Assembly</option>
                    <option value="Local">Local</option>
                    <option value="Imported">Imported</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label htmlFor="mileage">Mileage *</label>
                  <input
                    type="number"
                    className="form-control"
                    id="mileage"
                    name="mileage"
                    min="1"
                    max="1000000"
                    required
                    value={formData.mileage}
                    onChange={handleInputChange}
                  />
                  <small className="form-text">
                    Enter valid mileage (1-1000000)
                  </small>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="form-group">
                  <label htmlFor="Features">Features</label>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      border: "2px solid lightgrey",
                      padding: "20px",
                      maxWidth: "300px",
                      margin: "0 auto",
                      borderRadius: "10px",
                      borderStyle: "outset", // Center horizontally
                      // Limit the maximum width
                    }}
                  >
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        style={{
                          width: "50%", // 2 items per row (50% / 2)
                          padding: "0px",
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="primary"
                              checked={selectedFeatures.includes(feature)}
                              onChange={handleFeatureChange}
                              value={feature}
                            />
                          }
                          label={feature}
                          labelPlacement="end"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12">
                <div className="form-group">
                  <label
                    htmlFor="price"
                    style={{ fontWeight: "bold", color: "#318F3A" }}
                  >
                    Price *
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    required
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12">
                <div className="form-group">
                  <label htmlFor="description">Add Description *</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="4"
                    required
                    placeholder="Describe Your Car..."
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            {isLoading ? (
              <CircularProgress size={32} /> // Show the loader
            ) : carCreated ? (
              <DoneIcon fontSize="large" style={{ color: "green" }} /> // Show the tick emoji
            ) : (
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CarInfoForm;