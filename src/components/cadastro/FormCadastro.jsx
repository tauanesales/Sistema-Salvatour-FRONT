import React, { useContext, useState} from "react";
import { FormCadastroContext } from "../../contexts/formCadastroContext";
import {Eye, EyeOff} from "lucide-react"

/**
 * Componente FormCadastro
 *
 * Este componente representa um formulário de cadastro que coleta informações
 * do usuário, incluindo nome, email, cidade, estado e senha. Ele utiliza o
 * contexto `FormCadastroContext` para gerenciar o estado do formulário e inclui
 * funcionalidade para alternar a visibilidade das senhas.
 * 
 */

function FormCadastro(){

    const [form, setForm] = useContext(FormCadastroContext)

    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    /**
     * Manipula a mudança de valores nos campos de entrada do formulário.
     * Atualiza o estado do formulário com o novo valor do campo alterado.
     */
    function handleChange(event){
  
        setForm({...form, [event.target.name]:event.target.value})

    }
    
    /**
    * Alterna a visibilidade do campo de senha principal.
    */
    function handleShowPassword(){
        setShowPassword(!showPassword)
    }

    /**
     * Alterna a visibilidade do campo de confirmação de senha.
     */
    function handleShowPassword2(){
        setShowPassword2(!showPassword2)
    }

    return(

        <div className="formContainer"> 

                <input className="input" onChange={handleChange} name="name" type="text" placeholder="nome completo"/>
                <input className="input" onChange={handleChange} name="email" type="text" placeholder="email"/>
                <input className="input" onChange={handleChange} name="city" type="text" placeholder="cidade"/>
                <input className="input" onChange={handleChange} name="state" type="text" placeholder="estado"/>
                <label className="label-password">

                    <input className="input-password" name="password" onChange={handleChange} type={showPassword? "text" : "password"} placeholder="senha"/>

                    <button className="password-btn" onClick={handleShowPassword} type="button">
                        {showPassword && <EyeOff />}
                        {!showPassword && <Eye />}
    
                    </button>

                    </label>

                    <label className="label-password">

                    <input className="input-password" name="password2" onChange={handleChange} type={showPassword2? "text" : "password"} placeholder="confirme a senha"/>

                    <button className="password-btn" onClick={handleShowPassword2} type="button">
                        {showPassword2 && <EyeOff />}
                        {!showPassword2 && <Eye />}
    
                    </button>

                    </label>

                

        </div>
    )

}

export default FormCadastro;