import { useEffect, useState }  from "react";
import styled from "styled-components";
import  { loginUser } from "../redux/authSlice";
import { mobile } from "../responsive";
import TopNavbar from "../components/Nav/TopNavbar";
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://5.imimg.com/data5/BL/DP/YB/SELLER-32885320/solor-panels-500x500.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;




  const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
  
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  
    useEffect(() => {
      if (auth.token) {
        navigate("/products");
      }
    }, [auth.token, navigate]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
     
      dispatch(loginUser(user));
    };
  return (
    <Container>
      <TopNavbar/>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit }>
          <Input
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Button >
          {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
          </Button>
          {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;