import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

/**
 * Componente Header
 *
 * Este componente representa o cabeçalho exibido na página Home e página Places
 * 
 */


export default function Header(){

    const [today, setToday] = useState('')
    const [currentYear, setCurrentYear] = useState('')
    const [month, setMonth] = useState('')
    const [monthNames, setMonthNames] = useState(['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro','Outubro', 'Novembro', 'Dezembro'])


    // Essa função tem como propósito coletar a data atual e exibir para o usuário
    function getDate(){
        const date = new Date();
        const monthIndex = date.getMonth()
        setToday(date.getDate())
        setCurrentYear(date.getFullYear())
        setMonth(monthNames[monthIndex])
    
    }

    useEffect(() => {
        getDate()
    },[] )

    // Essa função tem como propósito definir o login como false para impedir que o usuário acesse as páginas home e places pela barra de endereços quando não estiver logado
    function handleStatusLogin(){
        localStorage.setItem('statusLogin', 'false')
        
    }


    return(


        <header className="cabecalho">
        <div className="date">
        <p className="text-date">{today} de {month} de {currentYear}</p>
        
        </div>

        <div className="dropdown-center" >
        <button className="text-ola dropdown-toggle" type="button" data-bs-toggle="dropdown">Olá, seja bem vindo(a)</button>
        <ul className="dropdown-menu">
            <li className="dropdown-item"><Link to='/crudUser' className="text-editar menu-item">Editar perfil</Link></li>
            <li className="dropdown-item"><Link to='/' className="text-editar menu-item" onClick={handleStatusLogin}>Sair</Link></li>
        </ul>
        </div>

        </header>
    )
}