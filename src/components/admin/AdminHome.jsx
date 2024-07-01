
import { Link } from "react-router-dom"
import Header from "../home/Header"
import '../../styles/home_admin.css'

export default function AdminHome(){

    

    return(
        <>
            <Header></Header>
            
            <div className="container">

                <section className="section1">

                    <button className="button"><Link to='/admin' className="link-ver">Editar usuários</Link></button>
                    <button className="button"><Link to='/admin/new-places' className="link-ver">Cadastrar pontos turísticos</Link></button>
                    <button className="button"><Link to='/home' className="link-ver">Ver pontos turísticos</Link></button>

                </section>

            </div>
           
        </>
        
        
    )
   

    }

