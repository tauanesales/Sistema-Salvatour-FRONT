import { Link } from "react-router-dom"
import Header from "./Header"
import Pelo from "../../assets/pelo.webp"
import Image1 from "../../assets/image1.webp"
import Image2 from "../../assets/image2.webp"
import Image3 from "../../assets/image3.webp"
import Image4 from "../../assets/image4.webp"
import Image5 from "../../assets/image5.webp"
import '../../styles/global.css'
import '../../styles/home.css'

/**
 * Componente Home
 *
 * Este componente representa o página principal, ele recebe o componente Header, que é o cabeçalho da página e possui o restante do conteúdo
 * 
 */

function Home(){

    

    return(
        <>
            <Header></Header>

            <section className="section">
            <h1 className="mainTitle">
            Guia histórico de Salvador
                </h1>
                <p className="subtitle">
                Venha descobrir Salvador, onde a história, a cultura e a beleza natural se encontram de forma única. É um destino que promete experiências inesquecíveis, desde seu centro histórico vibrante até suas paisagens naturais deslumbrantes. 
                </p>

                <div className="grid">

                    <img className="grid-image grid-item" src={Image1} alt="" />
                    <img className="grid-image grid-item" src={Image2} alt="" />
                    <img className="grid-image grid-item" src={Image3} alt="" />
                    <img className="grid-image grid-item" src={Image4} alt="" />
                    <img className="grid-image grid-item" src={Image5} alt="" />
                    <img className="grid-image grid-item" src={Pelo} alt="" />

                </div>

                <button className="btn-ver"><Link to='/places' className="link-ver">Ver mais</Link></button>



            </section>

           
        </>
        
        
    )
   

    }


export default Home;