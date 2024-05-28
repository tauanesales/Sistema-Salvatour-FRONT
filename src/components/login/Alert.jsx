import React, {useContext} from "react";
import { AlertContext } from "../../contexts/alertContext";
import { AlertTypeContext } from "../../contexts/alertTypeContext";

/**
 * Componente Alert
 *
 * Este componente representa um alerta que pode ser exibido ou ocultado
 * com base no estado global gerenciado pelos contextos AlertContext e AlertTypeContext.
 * O alerta exibe uma mensagem de erro e inclui um botão para fechar o alerta.
 *
 */

function Alert(){

    const [showAlert, setShowAlert] = useContext(AlertContext);
    const [alertType, setAlertType] = useContext(AlertTypeContext)
    

    /**
     * Fecha o alerta.
     * Define o estado showAlert como false para ocultar o alerta.
     */
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