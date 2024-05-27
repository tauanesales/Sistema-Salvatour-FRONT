import React from "react";
import FormCadastro from "./FormCadastro";
import SubmitCadastro from "./SubmitCadastro";
import Alert from "../login/Alert";
import { AlertProvider } from "../../contexts/alertContext";
import { AlertTypeProvider } from "../../contexts/alertTypeContext";
import { FormCadastroProvider } from "../../contexts/formCadastroContext";
import '../../styles/global.css'
import '../../styles/cadastro.css'

/**
 * Componente Cadastro
 *
 * Este componente representa a página de Cadastro
 * 
 */

function Cadastro(){

        return(
            <AlertTypeProvider>
            <AlertProvider>
            <Alert></Alert>
            <div className="mainContainerCadastro background">

                <FormCadastroProvider>
                
                <FormCadastro></FormCadastro>

                <SubmitCadastro></SubmitCadastro>

                </FormCadastroProvider>
                
            </div>
            </AlertProvider>
            </AlertTypeProvider>
            
        )

}

export default Cadastro