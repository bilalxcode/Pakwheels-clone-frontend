import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  AllAds: [],
  AllUsers: [], // Initialize AllAds as an empty array
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    AdminLoggedIn: (state, action) => {
      return {
        ...state,
        isLoggedIn: action.payload.user,
      };
    },
    AdminLoggedOut: (state, action) => {
      return {
        ...state,
        isLoggedIn: false,
      };
    },
    AdsData: (state, action) => {
      return {
        ...state,
        AllAds: action.payload.AllAds, // Update AllAds with the provided ads array
      };
    },
    UsersData: (state, action) => {
      return {
        ...state,
        AllUsers: action.payload.AllUsers, // Update AllAds with the provided ads array
      };
    },
  },
});

export const { AdminLoggedIn, AdminLoggedOut, AdsData, UsersData } =
  adminSlice.actions;

export default adminSlice.reducer;
