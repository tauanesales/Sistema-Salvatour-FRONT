import React from "react";
import "../../styles/global.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../assets/portal-logo.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const isPaginaInicial = location.pathname === "/";
  const isLogged = localStorage.getItem("token") !== null;

  function handleStatusLogin() {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("tokenValid");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }

  function goHome() {
    navigate(isAdmin ? "/admin/home" : "/home");
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <header className="cabecalho">
      {isPaginaInicial ? (
        <div />
      ) : (
        <button className="text-ola" type="button" onClick={goBack}>
          {"< Voltar"}
        </button>
      )}
      <div>
        <img src={logo} alt="Portal de Notícias" className="logo" />
      </div>
      <div className="portal-nome">
        <h1>Portal de Notícias</h1>
      </div>

      <div className="dropdown-center">
        <button
          className="text-ola dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Olá, seja bem-vindo(a)
        </button>
        {isLogged ? (
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to="/updateUser" className="text-editar menu-item">
                Editar perfil
              </Link>
            </li>
            {isAdmin ? (
              <li className="dropdown-item">
                <Link to="/admin/home" className="text-editar menu-item">
                  Painel admin
                </Link>
              </li>
            ) : null}
            <li className="dropdown-item">
              <Link
                to="/"
                className="text-editar menu-item"
                onClick={handleStatusLogin}
              >
                Sair
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to="/login" className="text-editar menu-item">
                Entrar
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
