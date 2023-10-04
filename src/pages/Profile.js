import React from "react";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import { Card } from "@mui/material";
import ProfileCard from "../layout/ProfilePage/ProfileCard";
function Profile() {
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
