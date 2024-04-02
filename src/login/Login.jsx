import React from "react"
import './login.css'

function Login(){


    return(
        <div className="container">

            <div className="loginContainer">
                <h1 className="title">Bem vindo de <br /> volta!</h1>

                <form className="formContainer" action="">

                    <input type="text" placeholder="email"/>
                    <a className="esqueci" href="">Esqueci meu login</a>

                    <input type="text" placeholder="senha"/>
                    <div className="svg-input"></div>
                    <a className="esqueci" href="">Esqueci minha senha</a>

                </form>

                <button className="entrar">Entrar</button>

            </div>



        </div>
    )
}

export default Login