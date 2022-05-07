import React from "react";
import "./App.css";
// import { Helmet } from "react-helmet";
// import { useState, useEffect } from "react";

// Screens
import Landing from "./screens/Landing.jsx";
import ProductList from "./screens/ProductList.jsx";
import Product from "./screens/Product.jsx";
import Cart from "./screens/Cart.jsx";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import AppLayout from "./screens/AppLayout"
import Blank from "./screens/Blank"
import User from "./screens/user/User"
import FeaturedInfo from "./screens/featuredInfo/FeaturedInfo"
import Services from "./components/Sections/Services"
import Contact from "./components/Sections/Contact"
import {loadUser} from "./redux/authSlice";
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);


  return (
    
    <Router>
     <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<Services />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/login" element={ <Login/> } />
        <Route path= "/logout" element = {<logOut/>} />
        <Route path= "*" element = {<Landing />} />
        <Route path='/app' element={<AppLayout />}>
                    <Route index element={<Blank />} />
                    <Route path='/app/started' element={<FeaturedInfo />} />
                    <Route path='/app/calendar' element={<Blank />} />
                    <Route path='/app/user' element={<User />} />
                    <Route path='/app/order' element={<Blank />} />
                </Route>
      </Routes>
    </Router>
  );
}

export default App;

