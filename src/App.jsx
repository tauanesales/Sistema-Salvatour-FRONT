import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import Recovery from "./components/recovery/Recovery";
import AdminController from "./components/admin/AdminController";
import Home from "./components/home/Home";
import Places from "./components/home/Places";
import { CrudUser } from "./components/crud-user/user";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/" element={<PrivateRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="places" element={<Places/>}/>
        </Route>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/admin" element={<AdminController />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/crudUser" element={<CrudUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
