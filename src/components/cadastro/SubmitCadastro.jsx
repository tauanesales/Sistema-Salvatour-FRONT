import React, { useContext } from "react";
import { FormCadastroContext } from "../../contexts/formCadastroContext";


function SubmitCadastro(){
    const [form, setForm] = useContext(FormCadastroContext);

    function handleSubmit(){
            if (form.nome && form.email && form.cidade && form.estado && form.password && form.password2){

                if (form.passowrd != form.passowrd2){
                    console.log('senhas diferentes')
                }

                alert('cadastrado')

            } else{
                alert('preencha todos os campos')
            }
    }


    return(
        <button onClick={handleSubmit} className="button">Criar conta</button>
    )
}


export default SubmitCadastro;