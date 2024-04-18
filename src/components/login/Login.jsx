import React , {useState} from "react"
import { LoginProvider} from "../../utils/loginContext.jsx"
import Form from "./Form.jsx"
import Button from "./Button.jsx"
import { Link } from "react-router-dom"
import '../../styles/global.css'
import '../../styles/login.css'


function Login(){

    return(

        <div className="container">

            <div className="loginContainer">

                <h1 className="title">Bem vindo de <br /> volta!</h1>

                <LoginProvider>

                    <Form></Form>

                    <Button></Button>

                </LoginProvider>
                
                <Link className="links" to='/recovery'>Esqueci minha senha</Link>
                <Link className="links" to='/cadastro'>Cadastre-se</Link>


            </div>



        </div>
    )
}

export default Login