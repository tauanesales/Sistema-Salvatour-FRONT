import {useContext} from "react";
import { LoginContext } from "../../contexts/loginContext";
import { inputValidator, validateEmail, validatePassword } from "../../utils/validators";
import { AlertContext } from "../../contexts/alertContext";
import { AlertTypeContext } from "../../contexts/alertTypeContext";
import {loginUser} from "../../services/users/loginUser"
import { useNavigate } from "react-router-dom";


function Button(){

    const [form, setForm] = useContext(LoginContext)
    const [showAlert, setShowAlert] = useContext(AlertContext)
    const [alertType, setAlertType] = useContext(AlertTypeContext)
    const navigate = useNavigate()

   function handleAlert(state, type) {
        setShowAlert(state)
        setAlertType(type)
    }

    function handleLogin(event){

        event.preventDefault(setForm)

        if(inputValidator(form.email, form.password)){

            localStorage.setItem('email', JSON.stringify(form.email))
            localStorage.setItem('password', JSON.stringify(form.password))

            loginUser(null, form.email, form.password)
            
            .then((data)=>{
            
                const token = data.token
                localStorage.setItem('token', token)

                if(data.isAdmin){

                    navigate('/admin')

                }else{

                    navigate('/')
                }
                
            })
            .catch((error) => {
                console.log(error.response.status)
                let status = error.response.status
                if (status == 404){
                    handleAlert(true, "Senha inválida")
                } else if(status == 400){
                    handleAlert(true, "Usuário não encontrado")
                }
            } )

    
        }else{

            if(!validateEmail(form.email) && !validatePassword(form.password)){
                handleAlert(true, "Usuário e senha incorretos")

            } else{
                const type = validateEmail(form.email)? "Senha incorreta" : "Usuário incorreto"
                handleAlert(true, type)
            }

    
            setTimeout(() => {
                handleAlert(false);
              }, 2000)
            
        }
        }
    

    return(

        <button onClick={handleLogin} type="submit" className="button">Fazer login</button>

    )
}

export default Button;
