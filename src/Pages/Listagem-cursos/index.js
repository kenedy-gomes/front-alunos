import styled from "styled-components";
import axios from "axios";

import ads from "../../imgs/ads.jpg";
import { useQuery } from "react-query";
import Header from "../../Components/Header";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext } from "react";

const Listagem = () => {
  async function fetchData() {
    const response = await axios.get("http://localhost:8080/cursos");
    return response.data;
  }

  const { data, isLoading, error } = useQuery("cursos", fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Header />
      <H1>Cursos</H1>

      <ContainerMapping>
        {data.map((item) => (
          <ContainerGroup key={item.id}>
            <img src={ads} alt="ads" />
            {item.name}
          </ContainerGroup>
        ))}
      </ContainerMapping>
    </Container>
  );
};

export default Listagem;

const ContainerMapping = styled.div`
  margin: 40px 40px;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const ContainerGroup = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 10px;
  margin: 20px 10px 20px 0px;
  background-color: #4682b4;
  color: white;
  border-radius: 10px;
`;

const H1 = styled.h1`
  margin-top: 40px;
  width: 100%;
  text-align: center;
  color: #4682b4;
  font-size: 30px;
  font-weight: bold;
`;
