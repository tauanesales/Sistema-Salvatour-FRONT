import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

/**
 * Componente Header
 *
 * Este componente representa o cabeçalho exibido nas páginas Home e Places.
 * Ele mostra a data atual e fornece um menu suspenso para editar o perfil ou sair.
 *
 */


export default function Header(){
    const navigate = useNavigate();
    const location = useLocation();

    const isAdmin = localStorage.getItem("isAdmin") == "true";
    const isPaginaInicial = location.pathname == ("/");
    const isLogged = localStorage.getItem("token") != null

    console.log(isLogged)
    
    /**
     * Limpa os status de login no localStorage.
     * Isso impede que o usuário acesse as páginas protegidas
     */
    function handleStatusLogin(){
        localStorage.removeItem('token')
        localStorage.removeItem('isAdmin')
        localStorage.removeItem('tokenValid')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
    }

    function goHome() {
        navigate(isAdmin ? "/admin/home" : "/home")
    }

    function goBack() {
        navigate(-1);
    }

    return(


        <header className="cabecalho">
        
        {isPaginaInicial ? <div/> : <button className="text-ola" type="button" onClick={goBack}>{"< Voltar"}</button>}
        
        <div className="dropdown-center" >
        <button className="text-ola dropdown-toggle" type="button" data-bs-toggle="dropdown">Olá, seja bem vindo(a)</button>
            {isLogged ? 
            <ul className="dropdown-menu">
                <li className="dropdown-item"><Link to='/updateUser' className="text-editar menu-item">Editar perfil</Link></li> 
                <li className="dropdown-item"><Link to='/' className="text-editar menu-item" onClick={handleStatusLogin}>Sair</Link></li>
            </ul> :
            <ul className="dropdown-menu">
                <li className="dropdown-item"><Link to='/login' className="text-editar menu-item">Entrar</Link></li>
            </ul>
            }
        </div>

        </header>
    )
}