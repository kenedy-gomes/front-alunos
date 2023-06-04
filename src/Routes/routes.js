import React from "react";
import { Route, Routes } from "react-router-dom";
import Listagem from "../Pages/Listagem-cursos/index";
import Login from "../Pages/Login/index";
import Register from "../Pages/Register-Alunos/index";
import useAuth from "../Contexts/useAuth";

const Router = () => {
  const Private = ({ Item }) => {
    const signed = useAuth();
    return signed > 0 ? <Item /> : <Listagem />;
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/listagem"
        element={
          <Private>
            <Listagem />
          </Private>
        }
      />
    </Routes>
  );
};

export default Router;
