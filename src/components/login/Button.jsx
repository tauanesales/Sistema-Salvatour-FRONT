import {useContext} from "react";
import { LoginContext } from "../../contexts/loginContext";
import { inputValidator, validateEmail, validatePassword } from "../../utils/validators";
import { AlertContext } from "../../contexts/alertContext";
import { AlertTypeContext } from "../../contexts/alertTypeContext";
import {loginUser} from "../../services/users/loginUser"
import { useNavigate } from "react-router-dom";

/**
 * Componente Button
 *
 * Este componente representa o botão utilizado na página de Login para enviar os dados
 * para o backend e realizar o login. Ele lida com a validação dos dados de entrada e
 * exibe alertas apropriados em caso de erro.
 *
 */

function Button(){

    const [form, setForm] = useContext(LoginContext)
    const [showAlert, setShowAlert] = useContext(AlertContext)
    const [alertType, setAlertType] = useContext(AlertTypeContext)
    const navigate = useNavigate()

   /**
     * Exibe um alerta com o tipo especificado.
     * O alerta é automaticamente ocultado após 2 segundos.
     */
   function handleAlert(state, type) {
        setShowAlert(state)
        setAlertType(type)

        setTimeout(() => {
            setShowAlert(false);
          }, 2000)
    }

    /**
     * Lida com a submissão do formulário de login.
     * Valida os campos de entrada, envia uma solicitação de login para a API,
     * armazena o token de autenticação e redireciona o usuário com base na resposta da API.
     */
    function handleLogin(event){

        event.preventDefault(setForm)

        if(inputValidator(form.email, form.password)){

            localStorage.setItem('email', JSON.stringify(form.email))
            localStorage.setItem('password', JSON.stringify(form.password))
            
            loginUser(form.email, form.password)
            
            .then((data)=>{
                const token = data.token
                localStorage.setItem('token', token)
                localStorage.setItem('isAdmin', data.isAdmin)

                if(data.isAdmin){

                    navigate('/admin/home')

                }else{

                    navigate('/home')
                }
                

            })
            .catch((error) => {
                console.log(error.response.status)
                let status = error.response.status
                if (status == 404){
                    handleAlert(true, "Usuário e/ou Senha inválida")
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

        }
        }
    

    return(

        <button onClick={handleLogin} type="submit" className="button">Fazer login</button>

    )
}

export default Button;
