import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    AdminLoggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token; // Update the 'token' property
    },
    AdminLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.token = null; // Clear the 'token' when logging out
    },
  },
});

export const { AdminLoggedIn, AdminLoggedOut } = adminSlice.actions;

export default adminSlice.reducer;
