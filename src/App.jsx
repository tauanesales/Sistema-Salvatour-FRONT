import React from "react";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recovery from "./components/recovery/Recovery";

function App(){

    return(
        <BrowserRouter>
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/recovery" element={<Recovery />} />
            </Routes>
          
        </BrowserRouter>
        
    )
    
}

export default App