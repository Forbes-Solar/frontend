import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Projects from "../components/Sections/Projects";


import Blog from "../components/Sections/Blog";
import Footer from "../components/Sections/Footer"
// import ProductList from "./ProductList"


export default function Landing() {
  return (
    <>
    
      <TopNavbar />
      <Header />
      <Projects />
      <Blog/>
      <Footer />
    </>
  );
}


