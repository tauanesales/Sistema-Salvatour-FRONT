import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
<<<<<<< HEAD
=======
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
>>>>>>> a962685 (feat: alteras cores dos botões, acrescenta imagem do site, cria a página home)
import Recovery from "./components/recovery/Recovery";

function App() {
    return (
        <BrowserRouter>
            <Routes>
<<<<<<< HEAD
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/recovery" element={<Recovery />} />
=======
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/recovery" element={<Recovery />} />
>>>>>>> a962685 (feat: alteras cores dos botões, acrescenta imagem do site, cria a página home)
            </Routes>
        </BrowserRouter>
    );
}

export default App;
