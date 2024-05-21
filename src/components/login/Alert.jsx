import React, {useContext} from "react";
import { AlertContext } from "../../utils/alertContext";

function Alert(){

    const [showAlert, setShowAlert] = useContext(AlertContext);

    const handleAlertClose = () => {
        setShowAlert(false);
    }

    return(
        <div className="position-absolute end-0 p-5">
        {showAlert && (
          <div className="alert alert-danger alert-dismissible alert-style">
            <div>Usuário ou senha incorretos</div>
            <button className="btn-close" onClick={handleAlertClose}></button>
          </div>
        )}
      </div>
    )
}

export default Alert;