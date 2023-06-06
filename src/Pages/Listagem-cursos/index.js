import styled from "styled-components";
import Header from "../../Components/Header";

const Listagem = () => {
  return (
    <Container>
      <ContainerGroup className="container-header">
        <Header />
      </ContainerGroup>
      <ContainerCursos>
        <h1>Cursos Disponiveis</h1>
        <ul>
          <li>
            <a href="/">Curso 1</a>
          </li>
          <li>
            <a href="/">Curso 1</a>
          </li>
          <li>
            <a href="/">Curso 1</a>
          </li>
        </ul>
      </ContainerCursos>
    </Container>
  );
};

export default Listagem;

const ContainerCursos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #4682b4;
    margin-bottom: 20px;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const ContainerGroup = styled.section`
  width: 100%;
`;
