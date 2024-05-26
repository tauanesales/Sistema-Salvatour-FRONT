import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import Recovery from "./components/recovery/Recovery";
import AdminController from "./components/admin/AdminController";
import Home from "./components/home/Home";
import { CrudUser } from "./components/crud-user/user";
import SendToken from "./components/recovery/SendToken";
import NewPassword from "./components/recovery/NewPassword";
import ProtectedRoute from "./components/recovery/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/admin" element={<AdminController />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/crudUser" element={<CrudUser />} />
        <Route path="/recoveryToken" element={<ProtectedRoute element={<SendToken />} routeName="recoveryToken" />} />
        <Route path="/newPassword" element={<ProtectedRoute element={<NewPassword />} routeName="newPassword" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
