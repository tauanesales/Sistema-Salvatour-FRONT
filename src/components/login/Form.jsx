import React from "react";


function Form(){

    const [email, setEmail] = useState("")
    const [password, setPassowrd] = useState("")

    function getEmail(event){

        setEmail(event.target.value)

    }

    function getPassword(event){

        setPassowrd(event.target.value)

    }

    return(
        <form className="formContainer" action="">

                    <input onChange={getEmail} type="text" placeholder="email"/>

                    <input onChange={getPassword} type="text" placeholder="senha"/>
                    <div className="svg-input"></div>

                    <a className="esqueci" href="">Esqueci minha senha</a>

                </form>
    )
}

export default Form