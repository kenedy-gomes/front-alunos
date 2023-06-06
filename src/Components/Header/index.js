import styled from "styled-components";

const Header = () => {
  return (
    <ContainerGroup>
      <Text>Listagem de cursos</Text>
      <Containerli>
        <a href="/">Sair</a>
      </Containerli>
    </ContainerGroup>
  );
};

export default Header;

const Text = styled.h1`
  width: 100%;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

const ContainerGroup = styled.section`
  width: 100%;
  display: flex;
  background-color: #4682b4;
  color: white;
  padding: 20px;
`;

const Containerul = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Containerli = styled.li`
  display: flex;
  margin: 0px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  list-style: none;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  :hover {
    color: #87ceeb;
    transition: 0.5s;
  }
`;
