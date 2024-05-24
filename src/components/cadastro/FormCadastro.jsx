import React, { useContext, useState} from "react";
import { FormCadastroContext } from "../../contexts/formCadastroContext";
import {Eye, EyeOff} from "lucide-react"
import { validateEmail } from "../../utils/validators";


function FormCadastro(){

    const [form, setForm] = useContext(FormCadastroContext)

    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    function handleChange(event){
  
        setForm({...form, [event.target.name]:event.target.value})

    }
    
    function handleShowPassword(){
        setShowPassword(!showPassword)
    }

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