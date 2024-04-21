import React, { useContext, useState } from "react";
import { LoginContext } from "../../utils/loginContext";
import {Eye, EyeOff} from "lucide-react"


function Form(){

    const [form, setForm] = useContext(LoginContext)
    const [showPassword, setShowPassword] = useState(false)

    function handleChange(event){
  
        setForm({...form, [event.target.name]:event.target.value})
    }

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