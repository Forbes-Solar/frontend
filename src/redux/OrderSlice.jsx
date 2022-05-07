import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import {  userRequest } from "../requestMethods"


export const createOrder= createAsyncThunk(
    "orders/createOrder",
    async (values, { rejectWithValue }) => {
      try {
        const order = await  userRequest.post('/orders/order' )
  
        localStorage.setItem("order", order.data);
  
        return order.data;
      } catch (error) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      }
    }
  );