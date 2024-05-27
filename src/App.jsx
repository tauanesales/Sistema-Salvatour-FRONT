import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import AdminController from "./components/admin/AdminController";
import Home from "./components/home/Home";
import Places from "./components/home/Places";
import { CrudUser } from "./components/crud-user/user";
import PrivateRoute from "./components/PrivateRoute";
import { ProtectedRoute } from "./routing/ProtectedRoute";
import SendToken from "./components/recovery/SendToken";
import Recovery from "./components/recovery/Recovery";
import NewPassword from "./components/recovery/NewPassword";
import PasswordResetRoute from "./components/recovery/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/" element={<PrivateRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="places" element={<Places/>}/>
        </Route>
        <Route path="/admin" element={<ProtectedRoute redirectPath="/" children={<AdminController />} adminOnly />} />
        <Route path="/crudUser" element={<ProtectedRoute children={<CrudUser />} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/recoveryToken" element={<PasswordResetRoute element={<SendToken />} routeName="recoveryToken" />} />
        <Route path="/newPassword" element={<PasswordResetRoute element={<NewPassword />} routeName="newPassword" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
