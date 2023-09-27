// useAuth.js
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authenticationSlice";
import axios from "axios";

const getCookie = (name) => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
};

const decodeToken = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );

  return JSON.parse(jsonPayload);
};
const useAuth = () => {
  const [userObject, setUser] = useState(null);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the JWT token exists in the cookie
    const jwtToken = getCookie("jwtToken"); // Implement getCookie function

    if (jwtToken) {
      // Decode the JWT token and extract user information
      const decodedToken = decodeToken(jwtToken); // Implement decodeToken function
      const userObject = decodedToken.user;

      // Ensure that userObject is defined before attempting to access _id
      if (userObject && userObject._id) {
        const userId = userObject._id;

        const fetchUserData = async () => {
          try {
            // Send a POST request to your login endpoint on the server
            const response = await axios.post(
              "http://localhost:8080/auth/getUser",
              {
                userId,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            console.log("Response:", response.data);
            const userData = response.data;

            if (response.status === 200) {
              dispatch(login({ user: userData, token: jwtToken }));
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };

        fetchUserData();
      } else {
        console.log("Invalid userObject or _id");
      }
    } else {
      console.log("Invalid Cookie");
    }
  }, [dispatch]);

  return user;
};

export default useAuth;
