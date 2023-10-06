import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [], // Initialize as an empty array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      // Append the new product to the existing list of products
      state.orders = [...state.orders, action.payload.orders];
    },
    removeFromCart: (state, action) => {
      // Filter out the product with the matching orderId
      state.orders = state.orders.filter((order) => order._id !== action.payload);
    },
  },
});

export const { AddToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
