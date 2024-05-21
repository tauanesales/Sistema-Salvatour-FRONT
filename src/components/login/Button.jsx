import React, {useContext} from "react";
import { LoginContext } from "../../utils/loginContext";
import { AlertContext } from "../../utils/alertContext";
import { inputValidator } from "../../utils/validators";

function Button(){

    const [form, setForm] = useContext(LoginContext)
    const [showAlert, setShowAlert] = useContext(AlertContext)

    const handleAlert = (state) => {
        setShowAlert(state)
    }

    function handleLogin(event){

        event.preventDefault()

        if(inputValidator(form.email, form.password)){

            localStorage.setItem('email', JSON.stringify(form.email))
            localStorage.setItem('password', JSON.stringify(form.password))

            alert('Login')
            console.log(form.email, form.password)

        }else{
            
            handleAlert(true)
            
            setTimeout(() => {
                handleAlert(false);
              }, 2000)
            
        }
    }

    return(

        <button onClick={handleLogin} type="submit" className="button">Fazer login</button>

    )
}

export default Button