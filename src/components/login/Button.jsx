import React, {useContext} from "react";
import { LoginContext } from "../../utils/loginContext";
import { inputValidator } from "../../utils/validators";

function Button(){

    const [form, setForm] = useContext(LoginContext)

    function handleLogin(event){

        event.preventDefault()

        if(inputValidator(form.email, form.password)){

            localStorage.setItem('email', JSON.stringify(form.email))
            localStorage.setItem('password', JSON.stringify(form.password))

            alert('Login')
            console.log(form.email, form.password)
        }else{

            alert('Preencha todos os campos corretamente')
        }
    }

    return(

        <button onClick={handleLogin} type="submit" className="btn">Entrar</button>

    )
}

export default Button