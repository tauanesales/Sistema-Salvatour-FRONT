import { useEffect } from 'react'
import PropTypes from 'prop-types'

function AlertNotMatch({ showAlert, alertType, onClose, isError }) {
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [showAlert, onClose])

  if (!showAlert) {
    return null
  }

  function handleAlertClose() {
    onClose()
  }

  const alertClass = isError
    ? 'alert alert-danger alert-dismissible alert-style'
    : 'alert alert-success alert-dismissible alert-style'

  return (
    <div className="position-absolute end-0 p-5">
      {showAlert && (
        <div className={alertClass}>
          <div>{alertType}</div>
          <button className="btn-close" onClick={handleAlertClose}></button>
        </div>
      )}
    </div>
  )
}

AlertNotMatch.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  alertType: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
}

export default AlertNotMatch
