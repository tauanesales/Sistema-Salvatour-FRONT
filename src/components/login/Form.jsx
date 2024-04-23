import React, { useContext } from "react";
import { LoginContext } from "../../utils/loginContext";



function Form(){

    const [form, setForm] = useContext(LoginContext)

    function handleChange(event){
  
        setForm({...form, [event.target.name]:event.target.value})
    }

    return(
        <form className="formContainer" action="">

                    <input name="email" onChange={handleChange} type="text" placeholder="email"/>

                    <input name="password" onChange={handleChange} type="password" placeholder="senha"/>
                    <div className="svg-input"></div>

                </form>
    )
}

export default Form