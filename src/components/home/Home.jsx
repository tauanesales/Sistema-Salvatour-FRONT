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
            
            <Link to='/login' className="linkBtn"><button className="button">Já tem uma conta? Faça login!</button></Link>
            <Link to='/cadastro' className="linkBtn" ><button className="button2">Novo aqui? Crie uma conta!</button></Link>

            </div>
           
        </div>
        
    )
   

    }


export default Home;