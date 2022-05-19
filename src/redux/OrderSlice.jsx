import { createAsyncThunk } from "@reduxjs/toolkit";
import {url, setHeaders} from "./api"
import axios from "axios";
// import {  userRequest } from "../requestMethods"


export const createOrder= createAsyncThunk(
    "orders/createOrder",
    async (values, { rejectWithValue }) => {
      try {
        const order =   await axios.post(`${url}/orders/order`, setHeaders());
       return order.data;
      } catch (error) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      }
    }
  );