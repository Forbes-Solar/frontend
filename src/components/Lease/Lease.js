import React from "react";
import {Col, Row, Button, Container} from "react-bootstrap";
import Image from "../../assets/images/tt.jpg"

const col = {
    height: "400px",
}

const text ={
    marginTop: "100px",
   color: "#FFA500",
   fontWeight: "bold",
  
}

function Lease () {
    return(
        <Container>
        <Row>
            <Col>
            <img src={Image} style={col}/>
            </Col>
            <Col className="text-center">
            <h1 style={text}>Lease to own</h1>
            <p style={{ color: "#0B093B",}}>Know more about our lease to own platform</p>
            <Button style={{backgroundColor:"#FFA500"}}>Get Started</Button>
            </Col>
        </Row>
        </Container>
    )
}

export default Lease