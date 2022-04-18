import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
           
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/about" spy={true} smooth={true} offset={-80}>
                About
              </Link>
            </li>
            
            
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/products" spy={true} smooth={true} offset={-80}>
                Products
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/contact" spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link to="/login" style={{ padding: "10px 30px 10px 0" }}>
                Log in
              </Link>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <Link to="/Register" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Get Started
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/cart" spy={true} smooth={true} offset={-80}>
               <ShoppingCartIcon/>
              </Link>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


