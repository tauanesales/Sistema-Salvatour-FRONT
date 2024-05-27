import React from "react";
import Elevador1 from "../../assets/elevador1.png"
import Pelo from "../../assets/pelo.png"
import Farol from "../../assets/farol.png"
import Monte from "../../assets/monte.png"
import Palacio from "../../assets/palacio.png"
import Bonfim from "../../assets/bonfim.png"

/**
 * Componente Carousel
 *
 * Este componente representa o Carousel exibido na página Places.
 * 
 */

export default function Carousel(){

    return(
        <section className="carousel slide" id="carousel">
            
        <div className="carousel-inner">
            <div className="carousel-item active section">

                <h1 className="mainTitle">
                    Elevador Lacerda
                </h1>
                <p className="paragrafo1">
                Inaugurado em 1873, é um ícone de Salvador, ligando a Cidade Alta à Cidade Baixa.
                </p>
                <img className="imagem" src={Elevador1} alt="elevador" />
                <p className="paragrafo2">Com 72 metros de altura, o  Elevador Lacerda oferece vistas panorâmicas da Baía de Todos-os-Santos e transporta milhares de pessoas diariamente. Visitar Salvador e não andar no Elevador Lacerda é como deixar de experimentar a verdadeira essência da cidade.</p>
               

            </div>

            <div className="carousel-item section">

                <h1 className="mainTitle">
                    Pelourinho
                </h1>
                <p className="paragrafo1">
                Encanta com sua energia única e sua riqueza cultural inigualável.
                </p>
                <img className="imagem" src={Pelo} alt="elevador" />
                <p className="paragrafo2">Suas ruas de paralelepípedos e casarões coloridos respiram a herança da colonização portuguesa. É um centro vibrante de música, dança e gastronomia, onde capoeira e samba ecoam pelas vielas. Símbolo da resistência negra e da luta pela liberdade.</p>
               

            </div>

            <div className="carousel-item section">

                <h1 className="mainTitle">
                    Farol da Barra
                </h1>
                <p className="paragrafo1">
                Refúgio de tranquilidade e vivacidade, cada pôr do sol é uma celebração da vida e da natureza.
                </p>
                <img className="imagem" src={Farol} alt="elevador" />
                <p className="paragrafo2">É um cenário de beleza natural deslumbrante, onde o oceano encontra a história. Suas águas calmas convidam ao mergulho e à contemplação, enquanto suas areias douradas guardam memórias ancestrais e modernas. Ponto de encontro de moradores e turistas.</p>
               

            </div>

            <div className="carousel-item section">

                <h1 className="mainTitle">
                    Palácio Rio Branco
                </h1>
                <p className="paragrafo1">
                Situado na Praça Tomé de Sousa, é um ícone da arquitetura e da história brasileira. 
                </p>
                <img className="imagem" src={Palacio} alt="elevador" />
                <p className="paragrafo2">Sua fachada imponente e seus salões luxuosos guardam memórias de eventos políticos e culturais que moldaram a história da Bahia e do Brasil. Hoje, além de ser um importante ponto turístico, o Palácio Rio Branco abriga exposições e eventos culturais, preservando e celebrando o rico legado histórico da região.</p>
               

            </div>

            <div className="carousel-item section">

                <h1 className="mainTitle">
                    Monte Serrat
                </h1>
                <p className="paragrafo1">
                Uma das mais antigas e bem preservadas fortificações do Brasil.
                </p>
                <img className="imagem" src={Monte} alt="elevador" />
                <p className="paragrafo2">Com sua arquitetura colonial e imponente estrutura de pedra, Hoje, é um ponto turístico popular, onde visitantes podem explorar a história militar do país enquanto apreciam o cenário natural ao redor. Monte Serrat é um local que une beleza, história e cultura, refletindo a rica herança baiana.</p>
               

            </div>

            <div className="carousel-item section">

                <h1 className="mainTitle">
                    Bonfim
                </h1>
                <p className="paragrafo1">
                Um dos mais importantes símbolos de fé e devoção no Brasil.
                </p>
                <img className="imagem" src={Bonfim} alt="elevador" />
                <p className="paragrafo2">Famosa pela tradicional Lavagem do Bonfim e pelas fitinhas coloridas que enfeitam seu gradil, simbolizando pedidos e agradecimentos. A arquitetura imponente e a atmosfera espiritual do local atraem milhares todos os anos. Misturando elementos do catolicismo e das religiões afro-brasileiras.</p>
               

            </div>

            <button className="carousel-control-prev" data-bs-target='#carousel' data-bs-slide='prev'>
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" data-bs-target='#carousel'data-bs-slide='next'>
            <span className="carousel-control-next-icon icon"></span>
            </button>

            
        </div>
        

    </section>
    
    )
}