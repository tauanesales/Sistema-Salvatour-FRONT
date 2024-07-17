import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import AdminController from "./components/admin/AdminController";
import Home from "./components/home/Home";
import Places from "./components/home/Places";
import { CrudUser } from "./components/crud-user/user";
import { ProtectedRoute } from "./routing/ProtectedRoute";
import SendToken from "./components/recovery/SendToken";
import Recovery from "./components/recovery/Recovery";
import NewPassword from "./components/recovery/NewPassword";
import PasswordResetRoute from "./components/recovery/PasswordResetRoute";
import NewPlaces from "./components/admin/NewPlaces";
import UpdatePlace from "./components/admin/UpdatePlace";
import AdminHome from "./components/admin/AdminHome";


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<ProtectedRoute children={<Home />} />} />
        <Route path="/places" element={<ProtectedRoute children={<Places />} />} />
        <Route path="/" element={<Places />} />
        <Route path="/admin" element={<ProtectedRoute redirectPath="/home" children={<AdminController />} adminOnly />} />
        <Route path="/admin/new-places" element={<ProtectedRoute redirectPath="/home" children={<NewPlaces />} adminOnly />} />
        <Route path="/admin/update-place" element={<ProtectedRoute redirectPath="/home" children={<UpdatePlace />} adminOnly />} />
        <Route path="/admin/home" element={<ProtectedRoute redirectPath="/home" children={<AdminHome />} adminOnly />} />
        <Route path="/updateUser" element={<ProtectedRoute children={<CrudUser />} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/recoveryToken" element={<PasswordResetRoute element={<SendToken />} routeName="recoveryToken" />} />
        <Route path="/newPassword" element={<PasswordResetRoute element={<NewPassword />} routeName="newPassword" />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
