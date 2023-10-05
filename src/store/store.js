// store.js
import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice";
import adminReducer from "./adminSlice";
import navbarReducer from "./navbarSlice";
const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    admin: adminReducer,
    navbar: navbarReducer,
  },
});

export default store;
