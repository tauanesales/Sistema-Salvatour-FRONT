import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ element, routeName }) => {
  const emailRecovery = localStorage.getItem('emailRecovery')
  const tokenIsValid = localStorage.getItem('tokenValid') === 'true'

  if (routeName === 'newPassword' && !tokenIsValid) {
    return <Navigate to="/recovery" />
  }

  if (!emailRecovery) {
    return <Navigate to="/recovery" />
  }

  return element
}

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  routeName: PropTypes.string.isRequired,
}

export default ProtectedRoute
