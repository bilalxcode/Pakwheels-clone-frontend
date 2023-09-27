// store.js
import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice";
import adminReducer from "./adminSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    admin: adminReducer,
  },
});

export default store;
