import React from "react"
import { Link } from "react-router-dom";
import Header from "./Header"
import Carousel from "./Carousel"
import '../../styles/global.css'
import '../../styles/home.css'


/**
 * Componente Places
 *
 * Este componente representa a página de locais.
 * 
 */

export default function Places(){


 return(
    <>
    <Header></Header>
    <Carousel></Carousel>
    </>
 )

}