import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AdminLoggedIn, AdminLoggedOut } from "../../store/adminSlice";
import { useNavigate } from "react-router-dom";

const AdminAuthentication = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    console.log("checking token", token);

    if (token) {
      dispatch(AdminLoggedIn({ token: token }));
    } else {
      dispatch(AdminLoggedOut());
    }
  }, [dispatch]);

  return null;
};

export default AdminAuthentication;
