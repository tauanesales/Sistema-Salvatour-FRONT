import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/login/login";
import ForgotPassword from "./components/forgot-password/forgot-password";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
