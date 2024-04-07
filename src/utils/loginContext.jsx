import React, {useState, createContext} from "react";

export const LoginContext = createContext()

export function LoginProvider(props){
    
    const [form, setForm] = useState([])

    return(

        <LoginContext.Provider value={[form, setForm]}>

            {props.children}

        </LoginContext.Provider>
    )
}