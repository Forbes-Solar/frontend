import React from 'react';
import {Row, Col, Container, Form, Button} from "react-bootstrap"
import Lease from "../components/Lease/Lease";
function Contact () {
    return (
        <Container>
          <h1 className='text-center' style={{ color: "#0B093B",}}>Contact Us</h1>
        <Row>
            <Col sm="12" md="5" >
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="John Doe" />
  </Form.Group>
 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button>Submit</Button>
</Form>
            </Col>
            <Col sm="12" md="7" className='text-center'>
              <h4>Address</h4>
              <p>No1 Kingsley Ebenyi Street Apo Abuja</p>
              <h4>Phone</h4>
              <p>08069707200, 08079398930</p>
              <h4>Email</h4>
              <p>info@fsstnl.com</p>
            </Col>
        </Row>
        <Lease/>
        </Container>
    )
}

export default Contact