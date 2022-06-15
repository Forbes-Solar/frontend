import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {logoutUser} from "../../redux/authSlice"
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { toast } from "react-toastify";
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

  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
 


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
           {auth.token? (
             <>
            
            <li className="semiBold font15 pointer">
              <Link to="/" style={{ padding: "10px 30px 10px 0" }}>
               
               <DropDownLi>
          <Dropbtn><Link to="/app/">
          Hi, {auth.token.data.data.user.firstname}
          </Link>
          </Dropbtn>
          <DropDownContent>
            {" "}
            <SubA><Link  to="/app/user">My Account </Link></SubA>
            <SubA><Link  to="/app/order">Orders </Link></SubA>
            <SubA><Link  to="/app/">Inbox</Link></SubA>
            
          </DropDownContent>
        </DropDownLi>
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link to="/" style={{ padding: "10px 30px 10px 0" }} onClick={() => {
            dispatch(logoutUser(null));
            toast.warning("Logged out!", { position: "bottom-left" });
          }}>
                Logout
              </Link>
            </li>
             </> 
              
            
           ) : (
             <>
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
          </>
           )}
           
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/cart" spy={true} smooth={true} offset={-80}>
               <ShoppingCartIcon/>
               <span>{cartTotalQuantity}</span>
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



const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: white;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;



const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
 
`;


