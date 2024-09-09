import { createSlice } from "@reduxjs/toolkit";

import {
  fetchOrders, 
  deleteOrder  
} from "./operations";

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.orders = action.payload;
      })
      .addCase(deleteOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.orders = state.orders.filter(
          (order) => order._id !== action.payload._id
        );
      })  
  },
});

const { reducer: ordersReducer } = ordersSlice;
export default ordersReducer;
