import React from "react";
import styled from "styled-components";
// Components
// import ClientSlider from "../Elements/ClientSlider";
import TopNavbar from "../Nav/TopNavbar"
import ServiceBox from "../Elements/ServiceBox";
// import FullButton from "../Buttons/FullButton";
import {Col , Row} from "react-bootstrap"
import Footer from "./Footer"
// import Teams from "./Teams"
// Assets
// import AddImage1 from "../../assets/img/add/1.png";
// import AddImage2 from "../../assets/img/add/2.png";
// import AddImage3 from "../../assets/img/add/3.png";
// import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    <Wrapper id="services">
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div> */}
      <TopNavbar/>
      <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font20 semiBold">A few words about company</h4>
                <h2 className="font60 extraBold">About</h2>
                <p className="font15">
                In Sub-Saharan Africa (SSA), 6 out of 10 people did not have access to electricity in 2016. This problem is not just confined to rural areas; a quarter of those without electricity in the region live in urban zones.

In Nigeria, 62 percent of under-the-grid grid households cite high connection costs as a reason they are not connected to the grid. The Center for Global Development estimates that there may be up to 95 million people living in under-the-grid areas in Nigeria, Kenya, Tanzania, Ghana and Liberia alone.

                </p>
                <br></br>
                <p className="font15">
                FSSTNL is providing Nigerian households and businesses with affordable and innovative PV
                Solar solutions such as SAS (Stand-Alone Solar), Solar Water-Pumps and Solar Freezers with
                 a flexible  lease-to-own repayment model that enables cost savings for commercial and
                  residential users, bridging the gap in access to affordable electricity in Nigeria, 

                </p>
                {/* <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => alert("clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow> */}
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src="https://5.imimg.com/data5/BA/JM/MY-4107417/1-500x500.jpg"alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src="https://i0.wp.com/benignblog.com/wp-content/uploads/2014/07/Power-Inverter-UPS-Benign-Blog.jpg?fit=600%2C600&ssl=1 " alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src="https://5.imimg.com/data5/WK/WP/MY-30120863/battery-cables-35-mm-red-and-black-500x500.jpg" alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src="https://suministrosdelsol.com/2313-large_default/agm-solar-battery-250ah-c100.jpg" alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <Row>
            <Col sm="12" md="5" className="text-center text-md-left">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Mission</h1>
            <p className="font13">
            Make acquisition of productive-use solar equipment easy and affordable 

              <br />
              to homes and micro-businesses  in Nigeria
            </p>
          </HeaderInfo>
          </Col>
          <Col sm="12" md="5" className="text-center text-md-left">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Vision</h1>
            <p className="font13">
            To become a major player in equipment lease financing of solar systems to micro businesses

            </p>
          </HeaderInfo>
          </Col>
          
          </Row>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Accountable"
                
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Respectful"
                
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Innovative"
                
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox icon="printer" title="Transparent" 
               />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        
      </div>
     
      <Footer/>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
    
  }
`;
const Advertising = styled.div`
margin-top: 50px;
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
// const ButtonsRow = styled.div`
//   @media (max-width: 860px) {
//     justify-content: space-between;
//   }
// `;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;