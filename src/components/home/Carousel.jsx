import React, { useState, useEffect } from "react";
import { getAllPlaces } from "../../services/places/getAllPlaces";
import Elevador1 from "../../assets/elevador1.webp"

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