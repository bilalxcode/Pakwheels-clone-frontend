import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./HomeWidgetModal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SignUp, login } from "../../store/authenticationSlice";
import { Deactivate } from "../../store/navbarSlice";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { ToastContainer, toast } from "react-toastify";

const HomeWidgetModal = ({ isOpen, closeModal }) => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [registrationError, setRegistrationError] = useState(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const ClientId =
    "857582053843-uhnd2vrnefg570aim0e4h754kcgdims8.apps.googleusercontent.com";

  // In your component, use the selector to access userVerified
  const overlayClassName = "custom-overlay";

  const customModalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      width: "30%",
      minWidth: "30%",
      maxWidth: "500px",
      maxHeight: "90%",
      margin: "auto",
      padding: "20px",
      borderRadius: "15px",
    },
  };

  const toggleLoginForm = () => {
    setRegistrationError("");
    setShowLoginForm(!showLoginForm);
  };
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(email);
  }
  const loginHandler = async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!isValidEmail(email)) {
      return setRegistrationError("Invalid Email");
    } else {
      if (password === "") {
        return setRegistrationError("Invalid password");
      }
    }

    try {
      setIsLoading(true);

      // Send a POST request to your login endpoint on the server
      const response = await axios.post(
        "http://localhost:8080/auth/logIn",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login response:", response.data); // Log the response data
      setRegistrationError("");
      console.log("Login successful");

      const jwtToken = response.data.token;
      const user = response.data.user;
      console.log("before Login Data:", { user: user, token: jwtToken });

      dispatch(login({ user, token: jwtToken }));
      dispatch(Deactivate());

      document.cookie = `jwtToken=${jwtToken}; path=/; max-age=3600`;

      console.log("data sent" + document.cookie);
      console.log("after Login Data:", { user: user, token: jwtToken });

      setTimeout(() => {
        setIsLoading(false); // Set loading to false
        closeModal(); // Close the modal after the delay
      }, 2000);
      navigate("/"); // Redirect to the home page
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        if (error.response.status === 400) {
          if (error.response.data.error === "Email not found") {
            setRegistrationError("Email not found");
            console.log("email not found");
          } else if (error.response.data.error === "Invalid password") {
            setRegistrationError("Invalid password");
            console.log("password not found");
          } else if (error.response.data.error === "User is banned") {
            setRegistrationError("You are banned ❌");
            console.log("user is banned");
          }
        } else if (error.response.status === 500) {
          setRegistrationError("An error occurred during login.");
        } else {
          setRegistrationError("An unexpected error occurred.");
        }
      } else {
        setRegistrationError("An unexpected error occurred.");
      }

      setIsLoading(false);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (confirmPassword !== password) {
      return setRegistrationError("Password doesn't match!");
    }
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/sign-up",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setRegistrationError("");
      console.log("Registration successful");
      if (response.status === 200) {
        setIsLoading(false);

        navigate("/verify");
      } else {
        setIsLoading(false);

        console.error("Verification failed with status code:", response.status);
        setRegistrationError(response.status.error);
      }

      // setTimeout(() => {
      //   setIsLoading(false); // Set loading to false
      //   closeModal(); // Close the modal after the delay
      // }, 2000);
    } catch (error) {
      console.error("Registration error:", error);

      if (
        error.response &&
        error.response.data.error === "Email already taken"
      ) {
        console.log("email taken");

        setRegistrationError("Email already taken");
      } else if (
        error.response &&
        error.response.data.error ===
          "Password must be at least 8 characters long and contain at least one capital letter and one special character."
      ) {
        console.log("invalid password");

        setRegistrationError(
          "Password must be at least 8 characters long and contain at least one capital letter and one special character."
        );
      } else {
        setRegistrationError("An error occurred during registration.");
      }
      setIsLoading(false);
    }
  };
  const handleModalClose = () => {
    setRegistrationError("");
    closeModal();
  };
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const onSuccess = async (res) => {
    const { googleId, imageUrl, email, name, givenName, familyName } =
      res.profileObj;

    console.log("user sign in success", res.profileObj);

    // Store the name and email in component state
    setUserName(name);
    setUserEmail(email);

    if (!isValidEmail(email)) {
      return toast.error("Invalid Email");
    }

    console.log("user name", userName, "email", userEmail);

    const response = await axios.post(
      "http://localhost:8080/auth/saveGoogleUser",
      {
        userName: userName,
        userEmail: userEmail,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log("sign in successfully");
      setRegistrationError("");
      console.log("Login successful");

      const jwtToken = response.data.token;
      const user = response.data.user;

      console.log("response Data:", { user: user, token: jwtToken });

      dispatch(login({ user, token: jwtToken }));
      dispatch(Deactivate());

      document.cookie = `jwtToken=${jwtToken}; path=/; max-age=3600`;
      closeModal(); // Close the modal after the delay
    } else {
      setRegistrationError("Sign in error");
    }
  };
  const onFailure = (res) => {
    console.log("user sign in failed", res);
    setRegistrationError("Sign in error");
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: ClientId,
        scope: "",
        prompt: "select_account", // Set prompt to "select_account"
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModalClose} // Call handleModalClose when the modal is closed
      contentLabel="Example Modal"
      style={customModalStyle}
    >
      <div className="container">
        <ToastContainer />
        <div className="row justify-content-center">
          <div className="col-md-12">
            {isLoading ? ( // Show loading text when isLoading is true
              <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : showLoginForm ? (
              <>
                <form onSubmit={loginHandler}>
                  <h2 className="text-center text-primary font-weight-bold">
                    Login
                  </h2>
                  <div className="form-group">
                    <label htmlFor="loginEmail">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="loginEmail"
                      placeholder="username@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="loginPassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="loginPassword"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Log In
                  </button>
                  <div className="mt-3 text-center">
                    <div id="signInButton">
                      <GoogleLogin
                        clientId={ClientId}
                        buttonText="Login With Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={true}
                      ></GoogleLogin>
                    </div>
                  </div>

                  {registrationError && (
                    <div className="alert alert-danger mt-3">
                      {registrationError}
                    </div>
                  )}
                  <div className="mt-3 text-center">
                    <button className="btn btn-link" onClick={toggleLoginForm}>
                      Don't have an account? Sign Up
                    </button>
                  </div>
                </form>
              </>
            ) : (
              !showLoginForm &&
              (isLoading ? (
                <div>
                  <CircularProgress></CircularProgress>
                </div>
              ) : (
                <form onSubmit={handleRegistration}>
                  <h2 className="text-center text-primary font-weight-bold">
                    Sign Up
                  </h2>

                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your full name here"
                      name="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signupEmail">Email Address</label>
                    <input
                      required
                      type="email"
                      className="form-control"
                      id="signupEmail"
                      placeholder="username@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      required
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Set a new password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Enter your password again"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                  {registrationError && (
                    <div className="alert alert-danger mt-3">
                      {registrationError}
                    </div>
                  )}
                  <div className="mt-3 text-center">
                    <button className="btn btn-link" onClick={toggleLoginForm}>
                      Already have an account? Log In
                    </button>
                  </div>
                </form>
              ))
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HomeWidgetModal;
