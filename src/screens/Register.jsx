import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import  AuthService  from "../redux/apiCalls";

import TopNavbar from "../components/Nav/TopNavbar";
import { useNavigate } from "react-router-dom";

const Container = styled.div`TopNavbar
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://nextlightenergy.com/wp-content/uploads/2021/06/solar-power-the-good-and-the-bad-nextlight-solor-panels-provider-1.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
  
    const navigate = useNavigate();
  
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        await AuthService.signup(email, password, name, username, lastName).then(
          (response) => {
            // check for token and user already exists with 200
              console.log("Sign up successfully", response);
            // navigate("/");
            // window.location.reload();
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <Container>
      <TopNavbar/>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit ={handleSignup}>
          <Input placeholder="name" onChange={(e) => setName(e.target.value)} />
          <Input placeholder="last name" onChange={(e) => setLastName(e.target.value)} />
          <Input placeholder="username"onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <Input placeholder="confirm password" onChange={(e) => setPassword(e.target.value)} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">Sign up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
