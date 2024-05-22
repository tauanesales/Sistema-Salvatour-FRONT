import { Button } from "bootstrap";
import React from "react"
import { Link } from "react-router-dom"
import '../../styles/home.css'
import Imagem from "../../assets/image.png"

function Home(){
    return(
        <div className="container">
            <div className="linksContainer">
            
            <img className="img" src={Imagem} alt="hotelImg" />

            </div>
           
        </div>
        
    )
   

    }


export default Home;