import React, {useState, createContext} from "react";

export const AlertContext = createContext()

export function AlertProvider(props){
    
    const [showAlert, setShowAlert] = useState(false)

    return(

        <AlertContext.Provider value={[showAlert, setShowAlert]}>

            {props.children}

        </AlertContext.Provider>
    )
}