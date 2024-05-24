import React, {useState, createContext} from "react";

export const FormCadastroContext = createContext()

export function FormCadastroProvider(props){
    
    const [form, setForm] = useState([])


    return(

        <FormCadastroContext.Provider value={[form, setForm]}>

            {props.children}

        </FormCadastroContext.Provider>
    )
}