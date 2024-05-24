import React, {useContext} from "react";
import { AlertContext } from "../../contexts/alertContext";
import { AlertTypeContext } from "../../contexts/alertTypeContext";

function Alert(){

    const [showAlert, setShowAlert] = useContext(AlertContext);
    const [alertType, setAlertType] = useContext(AlertTypeContext)

    function handleAlertClose() {
        setShowAlert(false);
    }

    return(
        <div className="position-absolute end-0 p-5">
        {showAlert && (
          <div className="alert alert-danger alert-dismissible alert-style">
            <div>{alertType}</div>
            <button className="btn-close" onClick={handleAlertClose}></button>
          </div>
        )}
      </div>
    )
}

export default Alert;