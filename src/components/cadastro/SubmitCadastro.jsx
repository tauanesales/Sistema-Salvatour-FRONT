import React, { useContext } from "react";
import { FormCadastroContext } from "../../contexts/formCadastroContext";
import { AlertContext } from "../../contexts/alertContext";
import { AlertTypeContext } from "../../contexts/alertTypeContext";
import { validateEmail, validatePassword } from "../../utils/validators";
import { registerUser } from "../../services/users/registerUser";
import { useNavigate } from "react-router-dom";



function SubmitCadastro(){
    const [form, setForm] = useContext(FormCadastroContext);
    const [showAlert, setShowAlert] = useContext(AlertContext)
    const [alertType, setAlertType] = useContext(AlertTypeContext)
    const navigate = useNavigate()

    function handleAlert(state, type) {
        setShowAlert(state)
        setAlertType(type)

        setTimeout(() => {
            setShowAlert(false);
          }, 4000)
    }

    function handleSubmit(){

            if (form.name && form.email && form.city && form.state && form.password && form.password2){
                
                if (handleEmail(form.email) && handlePassword(form.password, form.password2)){
                     registerUser(form.name, form.email, form.password, form.city, form.state)
                     .then((data)=>{
                        
                        localStorage.setItem('token', data.token)
                        localStorage.setItem('isAdmin', data.isAdmin)

                         navigate('/')
                        
                     })
                     .catch((error) => {
                         console.log(error.response.status)
                       
                     } )
        
                }

            } else{
                handleAlert(true,'Preencha todos os campos')
                
            }
    

    }

    function handleEmail(email){
        if (validateEmail(email)){
            return true;
        } else{
            handleAlert(true,'Preencha com email válido')
        }
    }

    function handlePassword(senha1, senha2){
        if (senha1 == senha2){
            if(validatePassword(senha1)){
                return true;
            } else{
                handleAlert(true,'As senhas precisam ter no mínimo 8 caracteres, uma letra minúscula, uma letra maiúscula, números e caracteres especiais')
            }
        } else{
            handleAlert(true,'As senhas não coincidem')
        }
        
    }

    return(
        <button onClick={handleSubmit} className="button mt-4">Criar conta</button>
    )
}


export default SubmitCadastro;