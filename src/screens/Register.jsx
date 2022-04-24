import { useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import  { registerUser } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
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
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
   
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(registerUser(user));
  };
  return (
    <Container>
      <TopNavbar/>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit ={handleSubmit}>
          <Input placeholder="name" onChange={(e) => setUser({ ...user, name: e.target.value })}/>
          <Input placeholder="last name" onChange={(e) => setUser({ ...user, lastname: e.target.value })} />
         
          <Input placeholder="email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
          <Input placeholder="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
          <Input placeholder="confirm password" onChange={(e) => setUser({ ...user, password: e.target.value })}/>
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
