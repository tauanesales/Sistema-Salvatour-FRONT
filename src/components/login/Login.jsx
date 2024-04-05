import React from "react"
import Form from "./Form.jsx"
import '../../styles/global.css'
import '../../styles/login.css'

function Login(){


    return(
        <div className="container">

            <div className="loginContainer">
                <h1 className="title">Bem vindo de <br /> volta!</h1>

                <Form></Form>

                <button onClick={pass} className="btn">Entrar</button>

            </div>



        </div>
    )
}

export default Login