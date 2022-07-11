import React from "react";

import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

import Projects from "../components/Projects/Projects"
import Lease from "../components/Lease/Lease";

const col1 = {
    marginTop:" 200px",
    color: "#0B093B",
    fontWeight: "bold",
}

const Landing = () => {
  return (

    
    <div className="">
      
      <div className="hero-box">
        <Container>
          <Row>
          <Col sm="12" md="5" className="text-center text-md-left">
              <div className="mt-3 mb-5 ">
                <h1 className="display-4  box-seven" style={col1}>
                Sustainable <br />
                Renewable Energy
                </h1>
                <p className= "" style={{ fontSize: "1.0rem",  color: "#0B093B"}}>
                #1 Solar rent to own service provider for micro-businesses in Nigeria!
                </p>
               
               
              </div>
            </Col>
            <Col sm="12" md="7">
            {/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.lorentz.de/wp-content/uploads/2016/05/lorentz-pv-modules-lc300-p72-600x600.jpg" alt="office" style={{zIndex: 9}}
/>

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}

<img
      className="d-block w-100"
      src="https://www.lorentz.de/wp-content/uploads/2016/05/lorentz-pv-modules-lc300-p72-600x600.jpg" alt="office" style={{zIndex: 9}}
/>
            </Col>
            
          </Row>
        </Container>
      </div>
      
<div class="container">
  <div class="row">
    <div class="col-sm">
    <Col className="text-center text-md-left">
              <div className="mt-3 mb-5 ">
                <h1 className="display-4  box-seven" style={{}}>
                About
               </h1>
                <p className= "" style={{ fontSize: "1.0rem",  color: "#0B093B"}}>
                There are still 600 million people worldwide that don’t have access to electricity, 
                and over 1 billion people suffer from blackout once in a while. Forbes Renewables
                 was born with the permanent mission to change that, by providing clean, cheaper,
                  no interrupted solar power
                 to families, business, government organisations etc, one at a time!.
                </p>
               
               
              </div>
            </Col>
    </div>
    <div class="col-sm">
    <div class="container">
  <div class="row">
    <div class="col">
    <img src="https://5.imimg.com/data5/BA/JM/MY-4107417/1-500x500.jpg" class="img-thumbnail" alt="..."/>
    </div>
    <div class="col"> <img src="https://i0.wp.com/benignblog.com/wp-content/uploads/2014/07/Power-Inverter-UPS-Benign-Blog.jpg?fit=600%2C600&ssl=1" class="img-thumbnail" alt="..."/>
    </div>
    <div class="w-100"></div>
    <div class="col"> <img src="https://5.imimg.com/data5/WK/WP/MY-30120863/battery-cables-35-mm-red-and-black-500x500.jpg" class="img-thumbnail" alt="..."/>
    </div>
    <div class="col">
    <img src="https://suministrosdelsol.com/2313-large_default/agm-solar-battery-250ah-c100.jpg" class="img-thumbnail" alt="..."/>
    </div>
  </div>
</div>
    </div>
  </div>
  </div>
     <Projects />
     <Lease />
   
    </div>

  );
};

export default Landing;