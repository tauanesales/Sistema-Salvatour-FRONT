import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Elevador1 from "../../assets/elevador1.webp"
import Elevador2 from "../../assets/elevador2.webp"
import '../../styles/global.css'
import '../../styles/home.css'

function Home(){

    const [today, setToday] = useState('')
    const [currentYear, setCurrentYear] = useState('')
    const [month, setMonth] = useState('')
    const [monthNames, setMonthNames] = useState(['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro','Outubro', 'Novembro', 'Dezembro'])

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

    return(
        <>

            <header className="cabecalho">
            <div className="date">
            <p className="text-date" onLoad={getDate}>{today} de {month} de {currentYear}</p>
            
            </div>

            <div className="dropdown-center" >
            <button className="text-ola dropdown-toggle" type="button" data-bs-toggle="dropdown">Olá, seja bem vindo(a)</button>
            <ul className="dropdown-menu">
                <li className="dropdown-item"><Link to='/crudUser' className="text-editar menu-item">Editar perfil</Link></li>
                {/* <li class="dropdown-item"><a class="menu-item gudea" href="./login.html">Sair</a></li> */}
            </ul>
            </div>

            </header>

            <div className="homeContainer container">

                <h1 className="mainTitle">Elevador Lacerda</h1>
                <p className="subtitle">"O Elevador Lacerda foi o primeiro elevador público e considerado o mais alto do mundo na época de sua construção, em 1873.O Elevador Lacerda foi o primeiro elevador público e considerado o mais alto do mundo na época de sua construção, em 1873. O equipamento foi instalado no local do Guindaste da Fazenda, cuja função também era a de transportar mercadorias do porto para a alfândega."</p>
                

                <img className="elevador1" src={Elevador1} alt="elevador lacerda" />

                <p className="mainText">
                O construtor deste primeiro elevador no Brasil foi o engenheiro Antônio de Lacerda, que também havia criado em 1864 a Companhia de Transportes Urbanos em Salvador, interligando a Cidade Alta e a Baixa. Logo o Elevador Lacerda se tornou o principal meio de transporte entre ambos os locais e essa operação exigia o rigor máximo. Os passageiros, no Século 19, tinham que ser pesados antes de entrar nas cabines. Havia um limite máximo para a segurança.
                </p>
                <p className="mainText">
                Embora no início tenha sido denominado como Elevador Hidráulico da Conceição da Praia, foi popularmente conhecido como Elevador do Parafuso até 1896, quando, por decisão do Instituto Histórico e Geográfico da Bahia (IHGB) passou a chamar-se “Lacerda”, em homenagem ao seu construtor.
                </p>
                <p className="mainText">
                Em 1906, seu mecanismo hidráulico foi substituído pelo elétrico e, em 1930, o Elevador Lacerda sofreu uma transformação radical: toda a arquitetura de ferro em linhas art nouveau foi substituída por outra, que mantém até hoje, em concreto armado e design no estilo art déco, o top do momento.
                </p>
                <p className="mainText">
                Foi acrescentada a segunda torre, e às duas cabines originais somaram-se mais duas, todas com capacidade para 27 passageiros que hoje transportam até 32. A encarregada das obras foi a empresa dinamarquesa Christian-Nielsen, uma das pioneiras mundiais no emprego do concreto armado em grandes estruturas.
                </p>
                <p className="mainText">
                A torre de 73,5 m de altura em concreto armado e a ponte de acesso, em aço, com vão de 71 m, foram construídas em apenas um ano e inauguradas em 1º de janeiro de 1930. No início da década de 1980 toda a estrutura de concreto passou por revisão; em 1997 foi a vez do maquinário elétrico e eletroeletrônico.
                </p>
                <p className="mainText">
                Tombado pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN) em 7 de dezembro de 2006, esse ícone histórico exerce uma atração irresistível sobre os visitantes: chega a transportar hoje 900 mil passageiros por mês, num percurso de 30 segundos de duração.
                </p>
                <p className="mainText final">
                Do alto de suas torres, pode-se avistar a Baía de Todos os Santos em sua plenitude e singularidade: um dos raros locais do litoral brasileiro onde o sol se põe no mar.
                </p>
                
                
                <section className="section">
            
                <p className="informacoes">
                <strong>Elevador Lacerda</strong>
                <br></br>
                <strong>Ingresso:</strong> R$ 0,15 centavos cada viagem.
                <br></br>
                <strong>Horário de funcionamento: </strong>
                Segunda a sexta das 7h às 22h. Sábados, domingos e feriados das 7h às 19h.
                <br></br>
                <strong>Acessibilidade:</strong> trajeto com dificuldades e parapeito muito alto para cadeirante. A cabine do elevador tem bom espaço para cadeirantes.
                <br></br>
                <strong>Local:</strong> da Cidade Baixa: Praça Visconde de Cayru, Comércio. Da Cidade alta: Praça Municipal (Praça Tomé de Souza s/n Centro Salvador -BA 40020-000), Centro Histórico, Salvador.
                <br></br>
                <strong>Tel.:</strong> 71  3202-7655
                <br></br>
                <strong>E-mail:</strong> elevadorlacerda.secultssa@gmail.com

                </p>
                <img className="elevador2" src={Elevador2} alt="elevador lacerda">
                </img>
                
                </section>

                
                
            </div>
        </>
        
        
    )
   

    }


export default Home;