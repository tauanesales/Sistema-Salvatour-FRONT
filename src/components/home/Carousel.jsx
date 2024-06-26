import React, { useState, useEffect } from "react";
import { getAllPlaces } from "../../services/places/getAllPlaces";
import Elevador1 from "../../assets/elevador1.webp"
import Pelo from "../../assets/pelo.webp"
import Farol from "../../assets/farol.webp"
import Monte from "../../assets/monte.webp"
import Palacio from "../../assets/palacio.webp"
import Bonfim from "../../assets/bonfim.webp"

/**
 * Componente Carousel
 *
 * Este componente representa o Carousel exibido na página Places.
 * 
 */

export default function Carousel(){
    const [listPlaces, setListPlaces] = useState([])
    const token = localStorage.getItem("token")

    useEffect(() => {
         setPlaces()
       }, [])

     function setPlaces(){

         getAllPlaces(token)
             .then((data) => {
                console.log(data)
                setListPlaces(data)
             })
             .catch((error) => {
                 console.log(error)
            })
     }
  

    return(
        <section className="carousel slide" id="carousel">
            
        <div className="carousel-inner">
            <div className="carousel-item active section">

                <h1 className="mainTitle">
                    Elevador Lacerda
                </h1>
                <img className="imagem" src={Elevador1} alt="elevador" />
                <p className="descricao">Inaugurado em 1873, é um ícone de Salvador, ligando a Cidade Alta à Cidade Baixa. Com 72 metros de altura, o  Elevador Lacerda oferece vistas panorâmicas da Baía de Todos-os-Santos e transporta milhares de pessoas diariamente. Visitar Salvador e não andar no Elevador Lacerda é como deixar de experimentar a verdadeira essência da cidade.</p>
                
                <button className="btn-info" data-bs-toggle="modal" data-bs-target="#m">Mais informações</button>

                <div className="modal" id="m" tabIndex="-1">

                    <div className="modal-dialog">

                        <div className="modal-content">

                            <div className="modal-header">
                                <h3 className="modal-title">Endereço e horário de funcionamento</h3>
                                <button className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div className="modal-body text-start">
                            
                                <h4><strong>Endereço:</strong> Praça Tomé de Souza, S/N - Centro, Salvador - BA, 40020-000</h4>
                                <br></br>
                                <h4><strong>Horário de funcionamento:</strong> terça-feira	06:00–23:00
                                                                                quarta-feira	06:00–23:00
                                                                                quinta-feira	06:00–23:00
                                                                                sexta-feira	06:00–23:00
                                                                                sábado	07:00–22:00
                                                                                domingo	07:00–22:00
                                                                                segunda-feira	06:00–23:00
                                </h4>

                            </div>

                        </div>
                    
                    </div>
                </div>
                

            </div>

            <div className="carousel-item section">

                <h1 className="mainTitle">
                    Pelourinho
                </h1>
                <img className="imagem" src={Pelo} alt="elevador" />
                <p className="descricao">Encanta com sua energia única e sua riqueza cultural inigualável. Suas ruas de paralelepípedos e casarões coloridos respiram a herança da colonização portuguesa. É um centro vibrante de música, dança e gastronomia, onde capoeira e samba ecoam pelas vielas. Símbolo da resistência negra e da luta pela liberdade.</p>
               

            </div>

            <div className="carousel-item section">

                <h1 className="mainTitle">
                    Farol da Barra
                </h1>
                <img className="imagem" src={Farol} alt="elevador" />
                <p className="descricao">Refúgio de tranquilidade e vivacidade, cada pôr do sol é uma celebração da vida e da natureza. É um cenário de beleza natural deslumbrante, onde o oceano encontra a história. Suas águas calmas convidam ao mergulho e à contemplação, enquanto suas areias douradas guardam memórias ancestrais e modernas. Ponto de encontro de moradores e turistas.</p>
               

            </div>

            <div className="carousel-item section">

                <h1 className="mainTitle">
                    Palácio Rio Branco
                </h1>
                <img className="imagem" src={Palacio} alt="elevador" />
                <p className="descricao">Situado na Praça Tomé de Sousa, é um ícone da arquitetura e da história brasileira. Sua fachada imponente e seus salões luxuosos guardam memórias de eventos políticos e culturais que moldaram a história da Bahia e do Brasil. Hoje, além de ser um importante ponto turístico, o Palácio Rio Branco abriga exposições e eventos culturais, preservando e celebrando o rico legado histórico da região.</p>
               

            </div>

            <div className="carousel-item section">

                <h1 className="mainTitle">
                    Monte Serrat
                </h1>
                <img className="imagem" src={Monte} alt="elevador" />
                <p className="descricao">Uma das mais antigas e bem preservadas fortificações do Brasil. Com sua arquitetura colonial e imponente estrutura de pedra, Hoje, é um ponto turístico popular, onde visitantes podem explorar a história militar do país enquanto apreciam o cenário natural ao redor. Monte Serrat é um local que une beleza, história e cultura, refletindo a rica herança baiana.</p>
               

            </div>

            <div className="carousel-item section">

                <h1 className="mainTitle">
                    Bonfim
                </h1>
                <img className="imagem" src={Bonfim} alt="elevador" />
                <p className="descricao">Um dos mais importantes símbolos de fé e devoção no Brasil. Famosa pela tradicional Lavagem do Bonfim e pelas fitinhas coloridas que enfeitam seu gradil, simbolizando pedidos e agradecimentos. A arquitetura imponente e a atmosfera espiritual do local atraem milhares todos os anos. Misturando elementos do catolicismo e das religiões afro-brasileiras.</p>
               

            </div>

            {listPlaces && listPlaces.map((place, index) => (
                    <div key={index} className="carousel-item section">
                        <h1 className="mainTitle">{place.name}</h1>
                        <img className="imagem" src={place.image} alt={place.name} />
                        <p className="descricao">{place.description}</p>
                        <button className="btn-info" data-bs-toggle="modal" data-bs-target={`#modal${index}`}>Mais informações</button>
                        <div className="modal" id={`modal${index}`} tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title">Endereço e horário de funcionamento</h3>
                                        <button className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body text-start">
                                        <h4><strong>Endereço:</strong>{place.address}</h4>
                                        <br></br>
                                        <h4><strong>Horário de funcionamento:</strong>{place.openingHours}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
           
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