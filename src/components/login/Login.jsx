import React , {useState} from "react"
import { LoginProvider} from "../../contexts/loginContext.jsx"
import { AlertProvider } from "../../contexts/alertContext.jsx"
import { AlertTypeProvider } from "../../contexts/alertTypeContext.jsx"
import Form from "./Form.jsx"
import Button from "./Button.jsx"
import Alert from "./Alert.jsx"
import { Link } from "react-router-dom"
import '../../styles/global.css'
import '../../styles/login.css'


function Login(){

    return(
        <AlertTypeProvider>
        <AlertProvider>
        <Alert></Alert>
        <div className="mainContainer backgroundLogin">

            

            <div className="loginContainer">


                <h1 className="title">SALVATOUR</h1>

                <LoginProvider>

                    <Form></Form>

                    <Link className="links" to='/recovery'>Esqueci minha senha</Link>

                    <Button></Button>

                    <p>Ainda não possui acesso?<Link className="link-cadastro" to='/cadastro'> Cadastre-se</Link></p>

                </LoginProvider>





            </div>
            

        </div>
        </AlertProvider>
        </AlertTypeProvider>
    )
}

export default Login;