import React, {useState, createContext} from "react";

export const AlertTypeContext = createContext()

export function AlertTypeProvider(props){
    
    const [alertType, setAlertType] = useState("")

    return(

        <AlertTypeContext.Provider value={[alertType, setAlertType]}>

            {props.children}

        </AlertTypeContext.Provider>
    )
}