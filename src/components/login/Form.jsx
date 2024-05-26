import React, { useContext, useState } from "react";
import { LoginContext } from "../../contexts/loginContext";
import {Eye, EyeOff} from "lucide-react"

/**
 * Componente Form
 *
 * Este componente representa o form utilizado para enviar o email e login para o back através da página de Login
 * 
 */

function Form(){

    const [form, setForm] = useContext(LoginContext)
    const [showPassword, setShowPassword] = useState(false)

    //Essa função é responsável por pegar o email e a senha nos campos do form
    function handleChange(event){
  
        setForm({...form, [event.target.name]:event.target.value})
    }

    //Essa função é responsável por exibir ou não os caracteres no campo da senha
    function handlePassword(){
        setShowPassword(!showPassword)
    }

    return(
        <form className="formContainer" action="">

                    <input className="input" name="email" onChange={handleChange} type="text" placeholder="email"/>

                    <label className="label-password">

                    <input className="input-password" name="password" onChange={handleChange} type={showPassword? "text" : "password"} placeholder="senha"/>

                    <button className="password-btn" onClick={handlePassword} type="button">
                        {showPassword && <EyeOff />}
                        {!showPassword && <Eye />}
    
                    </button>

                    </label>
                    

                </form>
    )
}

export default Form