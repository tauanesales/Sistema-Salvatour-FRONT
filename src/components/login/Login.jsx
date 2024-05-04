import React , {useState} from "react"
import { LoginProvider} from "../../utils/loginContext.jsx"
import { AlertProvider } from "../../utils/alertContext.jsx"
import Form from "./Form.jsx"
import Button from "./Button.jsx"
import Alert from "./Alert.jsx"
import { Link } from "react-router-dom"
import Imagem from "../../assets/image.png"
import '../../styles/global.css'
import '../../styles/login.css'


function Login(){

    return(

        <div className="container">
            <AlertProvider>
            <Alert></Alert>
            
            <div className="imgContainer">

            <img className="img" src={Imagem} alt="hotelImg" />

            </div>

            <div className="loginContainer">
                
                <h1 className="title">Bem vindo de <br /> volta!</h1>

                <LoginProvider>

                    <Form></Form>

                    <Link className="links" to='/recovery'>Esqueci minha senha</Link>
                    
                    <Button></Button>

                </LoginProvider>
                
                


            </div>
            </AlertProvider>


        </div>
    )
}

export default Login