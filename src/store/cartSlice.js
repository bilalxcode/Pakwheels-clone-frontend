import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [], // Initialize as an empty array
  orderQuantities: {}, // Add this if needed
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
      state.orders = state.orders.filter(
        (order) => order._id !== action.payload
      );
    },
    clearCart: (state) => {
      // Clear the cart by setting orders to an empty array
      state.orders = [];
    },
    orderToBeUpdated: (state, action) => {
      // Append the new product to the existing list of products
      state.orders = [...state.orders, action.payload.orders];
    },
    isCartEmpty: (state) => {
      return {
        ...state,
        Yes: true,
      };
    },
  },
});

export const {
  AddToCart,
  removeFromCart,
  clearCart,
  orderToBeUpdated,
  isCartEmpty,
} = cartSlice.actions;

export default cartSlice.reducer;
