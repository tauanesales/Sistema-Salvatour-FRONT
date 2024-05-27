import React, { useContext } from "react";
import { FormCadastroContext } from "../../contexts/formCadastroContext";
import { AlertContext } from "../../contexts/alertContext";
import { AlertTypeContext } from "../../contexts/alertTypeContext";
import { validateEmail, validatePassword } from "../../utils/validators";
import { registerUser } from "../../services/users/registerUser";
import { useNavigate } from "react-router-dom";

/**
 * Componente SubmitCadastro
 *
 * Este componente gerencia o envio dos dados de cadastro de um formulário. 
 * Ele valida os dados de entrada do usuário, realiza o registro e fornece 
 * feedback visual usando alertas. Utiliza vários contextos para gerenciar 
 * o estado do formulário e dos alertas.
 *
 */

function SubmitCadastro(){
    const [form, setForm] = useContext(FormCadastroContext);
    const [showAlert, setShowAlert] = useContext(AlertContext)
    const [alertType, setAlertType] = useContext(AlertTypeContext)
    const navigate = useNavigate()


     /**
     * Exibe um alerta e define seu tipo.
     * O alerta é automaticamente ocultado após 4 segundos.
     */
    function handleAlert(state, type) {
        setShowAlert(state)
        setAlertType(type)

        setTimeout(() => {
            setShowAlert(false);
          }, 4000)
    }

    /**
     * Lida com o envio do formulário.
     * Verifica se todos os campos são preenchidos e se os dados são válidos.
     * Em caso de sucesso, registra o usuário e navega para a página principal.
     */
    function handleSubmit(){

            if (form.name && form.email && form.city && form.state && form.password && form.password2){
                
                if (handleEmail(form.email) && handlePassword(form.password, form.password2)){
                     registerUser(form.name, form.email, form.password, form.city, form.state)
                     .then((data)=>{
            
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

    /**
     * Valida o email do usuário.
     *
     * @param {string} email - O email a ser validado.
     * @returns {boolean} - Retorna verdadeiro se o email for válido, caso contrário, falso.
     */
    function handleEmail(email){
        if (validateEmail(email)){
            return true;
        } else{
            handleAlert(true,'Preencha com email válido')
        }
    }

    /**
     * Valida a senha do usuário e verifica se as duas senhas coincidem.
     *
     * @param {string} senha1 - A primeira senha.
     * @param {string} senha2 - A segunda senha.
     * @returns {boolean} - Retorna verdadeiro se as senhas forem válidas e coincidirem, caso contrário, falso.
     */
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