import React from "react";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import { Card } from "@mui/material";
import ProfileCard from "../layout/ProfilePage/ProfileCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Activate } from "../store/navbarSlice";
function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Activate({ user: null }));
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <ProfileCard />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Profile;
