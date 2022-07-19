import React from 'react';
import Lease from "../components/Lease/Lease";
import {Col, Container, Row} from 'react-bootstrap'
import {Bank2, Check2, Archive, DoorOpen} from 'react-bootstrap-icons'

const h1 = {
    textAlign: 'center',
    paddingTop: '100px', 
     color: "#0B093B"
}

const icons ={
    color: "#0B093B",
    height: '100px', 
    width: '100px'
}

const p = {
    height: '200px',
    width: '100%'
}

function About() {
return (
    <>
<Container>
<Row>
    <Col sm="12" md="5" className="text-left text-md-left">
    <h1 style={h1}>About Us</h1>
    <p style={{ color: "#0B093B",}} className="text-left" >In Sub-Saharan Africa (SSA), 6 out of 10 people did not have access to electricity in 2016. This problem is not just confined to rural areas; a quarter of those without electricity in the region live in urban zones. In Nigeria, 62 percent of under-the-grid grid households cite high connection costs as a reason they are not connected to the grid. The Center for Global Development estimates that there may be up to 95 million people living in under-the-grid areas in Nigeria, Kenya, Tanzania, Ghana and Liberia alone.
    FSSTNL is providing Nigerian households and businesses with affordable and innovative PV Solar solutions such as SAS (Stand-Alone Solar), Solar Water-Pumps and Solar Freezers with a flexible lease-to-own repayment model that enables cost savings for commercial and residential users, bridging the gap in access to affordable electricity in Nigeria
    </p>
    </Col>
    <Col>
    <img
      className="d-block w-100"
      src="https://www.lorentz.de/wp-content/uploads/2016/05/lorentz-pv-modules-lc300-p72-600x600.jpg" alt="office" style={{zIndex: 9}}/>
    </Col>
</Row>

<Row>
    <Col sm="12" md="7" className="text-center text-md-left">
    <h1 style={{ color: "#0B093B",}}>Our Mission</h1>
    <p style={{ color: "#0B093B",}}>Make acquisition of productive-use solar equipment easy and affordable
to homes and micro-businesses in Nigeria</p>
    </Col>
    <Col className="text-center text-md-left">
    <h1 style={{ color: "#0B093B",}} >Our Vision</h1>
    <p style={{ color: "#0B093B",}}>To become a major player in equipment lease financing of solar systems to micro businesses</p>
    </Col>
</Row>
</Container>
<div class="container ">
  <div class="row">
    <div class="col-sm text-center" >
        <Bank2 style={icons}></Bank2>
    <h4>Acountable</h4>
    </div>
    <div class="col-sm text-center">
        <Check2 style={icons}></Check2>
    <h4>Respectful</h4>
    </div>
    <div class="col-sm text-center" >
        <Archive style={icons} ></Archive>
    <h4>innovative</h4>
    </div>
    <div class="col-sm text-center">
        <DoorOpen style={icons}></DoorOpen>
    <h4>Transparent</h4>
    </div>
  </div>
</div>
<Lease/>
  
</>

)
}

export default About