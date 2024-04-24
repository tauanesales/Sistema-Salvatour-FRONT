import React from "react";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recovery from "./components/recovery/Recovery";
import Admin from "./components/admin/Admin";

function App(){

    return(
        <BrowserRouter>
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/admin" element={<Admin />} />
            </Routes>
          
        </BrowserRouter>
        
    )
    
}

export default App