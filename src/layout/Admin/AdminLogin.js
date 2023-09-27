import React from "react";
import { Alert, Avatar, Card, CircularProgress } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AdminLoggedIn } from "../../store/adminSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const cardStyles = {
  width: "100%",
  padding: "50px", // Added "px" to padding values
  textAlign: "center",
  background: "linear-gradient( #000,#01336F)",
};

const stepContainerStyles = {
  display: "flex",
  flexDirection: "column", // Make it a column to center vertically
  alignItems: "center",
  marginTop: "20px",
};

const stepStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = async (e) => {
    e.preventDefault();
    if (email !== "admin@gmail.com") {
      return setShowError(true);
    }
    if (password !== "admin") {
      return setShowError(true);
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/admin/logIn",
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
      if (response.status === 200) {
        dispatch(AdminLoggedIn({ isLoggedIn: true }));
        console.log(AdminLoggedIn);
        navigate("/admin/home");
        toast.success("Welcome Back Admin!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const centerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", // Center vertically within the viewport
  };

  return (
    <>
      {isLoading ? (
        <div style={centerStyle}>
          <CircularProgress />
        </div>
      ) : (
        <Card style={cardStyles}>
          <h2 style={{ color: "#FFFFFF", fontWeight: "bold" }}>Pakwheels</h2>
          <p style={{ color: "#FFFFFF" }}>Admin Login</p>
          <div style={stepContainerStyles}>
            <div style={stepStyles}>
              <Avatar
                style={{ width: "100px", height: "100px" }} // Adjust the width and height as needed
                alt="Logo"
                src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1406364553/kmsoahr21m6zogtykmsz.png"
              />
            </div>
          </div>
        </Card>
      )}
      <div className="container">
        <div className="row justify-content-center">
          <ToastContainer />

          <div className="col-md-12 p-4">
            <form onSubmit={loginHandler}>
              <div className="form-group">
                <label htmlFor="loginEmail">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  placeholder="username@email.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="log"
                style={{
                  color: "white", // Match text color with card
                  backgroundColor: "rgba(0, 19, 111, 1)", // Match background color with card
                  border: "1px solid rgba(0, 19, 111, 1)", // Match border color with card
                  cursor: "pointer",
                  borderRadius: "4px",
                  fontWeight: "600",
                  margin: "20px 0", // Add some vertical margin
                  width: "200px",
                  padding: "10px 0",
                  boxShadow: "0 0 20px rgba(0, 19, 111, 0.2)", // Match box-shadow color with card
                  transition: "0.4s",
                }}
              >
                Login
              </button>
              {showError && <Alert severity="error">Invalid Credentials</Alert>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
