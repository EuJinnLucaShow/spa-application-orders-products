import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://orders-products-backend.onrender.com";

export const fetchOrders = createAsyncThunk("items", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/items");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteOrder = createAsyncThunk(
  "items/:id",
  async (_id, thunkAPI) => {
    try {
      const response = await axios.delete(`/items/${_id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
