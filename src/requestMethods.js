import axios from "axios";

const BASE_URL = "https://forbessolar.herokuapp.com/api";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("token"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const token = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { 'Authorization' : `Bearer ${'token'}`},
});

