import axios from "axios";

import { publicRequest } from "../requestMethods";
import {getOrderStart , getOrderSuccess, getOrderFailure}  from "./OrderSlice"


const API_URL = "https://forbessolar.herokuapp.com/api/products/auth";

export const signup = (name, password, email) => {
  return axios
    .post(API_URL + "/register", {
      name,
      password,
      email,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data)
      return response.data;
    });
};

export const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
console.log(response.data)
      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const getOrders = async (dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await publicRequest.get("/products/products");
    dispatch(getOrderSuccess(res.data));
  } catch (err) {
    dispatch(getOrderFailure());
  }
};

