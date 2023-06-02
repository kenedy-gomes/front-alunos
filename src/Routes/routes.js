import React from "react";
import { Route, Routes } from "react-router-dom";
import Listagem  from '../Pages/Listagem-cursos/index';
import Login from '../Pages/Login/index';
import Register from '../Pages/Register-Alunos/index';

const Router = () => {
   return(
       <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/listagem" element={<Listagem />} />
       </Routes>
   )
}

export default Router;