import React from "react";

// import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

// Screens
import Landing from "./screens/Landing.jsx";
import ProductList from "./screens/ProductList.jsx";
import Product from "./screens/Product.jsx";
import Cart from "./screens/Cart.jsx";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import Services from "./components/Sections/Services"
import Contact from "./components/Sections/Contact"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    
    <Router>
     
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<Services />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/login" element={ <Login/> } />
      </Routes>
    </Router>
  );
}

export default App;

