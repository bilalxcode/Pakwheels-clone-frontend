import React, { useState } from "react";
import axios from "axios";
import {
  SignUp,
  login,
  userEmailVerified,
  userLoggedIn,
} from "../../store/authenticationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import HomeWidgetModal from "../Homewidget/HomeWidgetModal";

function ValidationBox() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loadingState, setLoadingstate] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [userVerified, setUserVerified] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // New state to control login modal

  const [formValues, setFormValues] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const concatenatedValue = Object.values(formValues).join(""); // Combine all input values
    console.log("Code Value:", concatenatedValue);
    setLoadingstate(true); // Set loading to true when the request is sent
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/verify",
        {
          concatenatedValue: concatenatedValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("API Response:", response); // Log the entire response object

      // Set loading to false as soon as the response comes
      setLoadingstate(false);

      if (response.status === 200) {
        // Verification successful
        console.log("email Verification successful");
        console.log("API Response:", response.data);

        const jwtToken = response.data.jwttoken;
        const user = response.data.user;
        console.log(jwtToken, user);
        // max-age is set to 1 hour (3600 seconds)
        setUserVerified(true);

        dispatch(userEmailVerified());
        setShowLoginModal(true);
      } else if (response.status === 400) {
        // Log the response data to check if there's an error message
        console.error("Validation error response:", response.data);

        if (response.data && response.data.error) {
          setValidationError(response.data.error); // Set validation error message
        } else {
          setValidationError("Invalid Code"); // Default error message
        }

        console.error("Verification failed with status code:", response.status);
      }
    } catch (error) {
      // Set loading to false on error
      setLoadingstate(false);
      setValidationError("Invalid Code");
      console.error("verification error:", error);
    }
  };

  return (
    <div className=" m-5 d-flex justify-content-center align-items-center vh-100">
      {loadingState ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      ) : showLoginModal ? ( // Show only the login modal when showLoginModal is true
        <HomeWidgetModal
          isOpen={showLoginModal}
          closeModal={() => setShowLoginModal(false)}
        />
      ) : (
        <div
          style={{
            width: "20rem",
            border: "1px solid grey",
            padding: "20px 15px",
            borderRadius: "10px",
            boxShadow: "5px 10px 18px #888888",
          }}
        >
          <form onSubmit={handleSubmit}>
            <h4
              class="text-center mb-4"
              style={{ color: "#233D7B", fontWeight: "bold" }}
            >
              Enter your code
            </h4>
            <p class="text-center mb-4">
              Please enter the Code received on your email for verification.
            </p>
            <div className="d-flex mb-3">
              {Array.from({ length: 6 }, (_, i) => (
                <input
                  key={i}
                  type="tel"
                  name={`code${i + 1}`}
                  maxLength="1"
                  pattern="[0-9]"
                  value={formValues[`code${i + 1}`]}
                  onChange={handleInputChange}
                  className="form-control"
                  style={{ margin: "0px 5px" }}
                  required
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-100 btn btn-primary"
              style={{ background: "#318F3A" }}
            >
              Verify account
            </button>
            {validationError && (
              <div className="alert alert-danger mt-3">{validationError}</div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}

export default ValidationBox;
