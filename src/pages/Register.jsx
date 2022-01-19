import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../Responsive";
const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
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
  const [fn, setFN] = useState("");
  const [ln, setLN] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [err, setErr] = useState("");
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state?.user);
  const handleClick = (e) => {
    e.preventDefault();
    if (!fn || !ln || !username || !email || !password || !cPassword) {
      setErr("please give all information");
      return;
    } else if (cPassword !== password) {
      setErr("Sorry! Password doesn't match");
      return;
    } else {
      register(dispatch, { username, email, password });
      navigate(from);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form onSubmit={handleClick}>
          <Input placeholder="name" onChange={(e) => setFN(e.target.value)} />
          <Input
            placeholder="last name"
            onChange={(e) => setLN(e.target.value)}
          />
          <Input
            placeholder="user name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="confirm password"
            onChange={(e) => setCPassword(e.target.value)}
          />
          <span style={{ margin: "8px 0px", color: "red" }}>{err}</span>
          <Agreement>
            By creating an account,I consent to the processing of my personal
            data in accordance with thr <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
