import React, { useContext, useState } from "react";
import { LoginContext } from "../../contexts/loginContext";
import {Eye, EyeOff} from "lucide-react"

/**
 * Componente Form
 *
 * Este componente representa o formulário utilizado para enviar o email e senha
 * para o backend através da página de Login. Ele permite ao usuário alternar
 * a visibilidade da senha e gerencia os dados de entrada.
 *
 */

function Form(){

    const [form, setForm] = useContext(LoginContext)
    const [showPassword, setShowPassword] = useState(false)

    /**
    * Atualiza o estado do formulário com os valores dos campos de entrada.
    * Esta função é chamada sempre que um campo de entrada é modificado.
    */
    function handleChange(event){
        setForm({...form, [event.target.name]:event.target.value})
    }

    /**
     * Alterna a visibilidade dos caracteres no campo da senha.
     * Quando chamada, esta função alterna entre mostrar e esconder a senha.
     */
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

export default Form;