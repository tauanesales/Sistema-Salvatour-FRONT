import React, {useState, createContext} from "react";

export const AlertColorContext = createContext()

export function AlertColorProvider(props){
    
    const [alertColor, setAlertColor] = useState('')

    return(

        <AlertColorContext.Provider value={[alertColor, setAlertColor]}>

            {props.children}

        </AlertColorContext.Provider>
    )
}