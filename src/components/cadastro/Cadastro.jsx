import React from "react";
import FormCadastro from "./FormCadastro";
import SubmitCadastro from "./SubmitCadastro";
import { FormCadastroProvider } from "../../contexts/formCadastroContext";
import '../../styles/global.css'
import '../../styles/cadastro.css'


function Cadastro(){

        return(
            <div className="mainContainerCadastro background">
                <FormCadastroProvider>
                
                <FormCadastro></FormCadastro>

                <SubmitCadastro></SubmitCadastro>

                </FormCadastroProvider>
                
            </div>
            
        )

}

export default Cadastro