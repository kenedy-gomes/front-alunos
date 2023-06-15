import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Listagem from "../Pages/Listagem-cursos/index";
import Login from "../Pages/Login/index";
import Register from "../Pages/Register-Alunos/index";
import { AuthContext } from "../Contexts/AuthContext";

const Router = () => {
  const Private = ({ Item }) => {
    const { authenticated, user } = useContext(AuthContext);

    if (user && authenticated) {
      return <Item />;
    } else {
      return <Navigate to="/" />;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/listagem" element={<Private Item={Listagem} />} />
    </Routes>
  );
};

export default Router;
