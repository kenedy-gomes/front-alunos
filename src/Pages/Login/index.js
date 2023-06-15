import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { AuthContext } from "../../Contexts/AuthContext";
import useAuth from "../../hooks/useAuth";
const URL = "http://localhost:8080/alunos/login";

const Login = () => {
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URL, { email, password });
      console.log(response.data);
      if ((email, password)) {
        setTimeout(() => {
          login();
        }, 1000);
        toast.success("Login efetuado com sucesso!");
        login(response.data);
        window.location.href = "/listagem";
      }
    } catch (error) {
      toast.error("Email ou Password incorreto!", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });
    login(email, password);
  };

  return (
    <ContainerGroup>
      <div className="h1">
        <FormGroup>
          <Title>Login</Title>
          <P>Email</P>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ex: João@gmail.com"
          />

          <P>Password</P>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ex: 123456789"
          />

          <Button
            onClick={handleSubmit}
            margin="0.5em 0em 0em 0em"
            width="100%"
            colorScheme="teal"
            size="md"
          >
            Sign In
          </Button>

          <Link>
            Ainda não possui cadastro? <a href="/register">Register</a>
          </Link>
        </FormGroup>
      </div>
    </ContainerGroup>
  );
};

export default Login;

const FormGroup = styled.section`
  padding: 2em;
  background-color: white;
  border-radius: 8px;
  width: 450px;
  Input {
    margin: 0em 0em 0.5em 0em;
  }
`;

const ContainerGroup = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dcdcdc;
`;

const P = styled.p`
  color: #4682b4;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 600;
  font-size: 18px;
`;

const Title = styled.h1`
  display: flex;
  font-size: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0em 2em 1em 2em;
  color: #4682b4;
`;

const Link = styled.p`
  text-align: right;
  a {
    text-decoration: underline;
  }
`;
