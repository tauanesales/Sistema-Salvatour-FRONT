import { useNavigate } from 'react-router-dom'
import { validateEmail } from '../../utils/validators'
import { useState } from 'react'
import AlertNotMatch from './AlertNotMatch'
import { checkMail } from '../../services/users/checkMail'

function Recovery() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState('')
  const [isError, setIsError] = useState(true)

  const handleRecoveryClick = async () => {
    if (validateEmail(email)) {
      try {
        await checkMail(email)
        localStorage.setItem('emailRecovery', JSON.stringify(email))
        localStorage.setItem('tokenValid', false)
        navigate('/recoveryToken')
      } catch (error) {
        if (error.status === 404) {
          if (error.data.error === 'User not found') {
            setAlertType('E-mail não cadastrado')
          } else {
            setAlertType('Erro desconhecido. Por favor, tente novamente.')
          }
        } else {
          setAlertType('Erro desconhecido. Por favor, tente novamente.')
        }
        setShowAlert(true)
        setIsError(true)
      }
    } else {
      setAlertType('Insira um e-mail válido')
      setShowAlert(true)
      setIsError(true)
    }
  }

  return (
    <div>
      <AlertNotMatch
        isError={isError}
        showAlert={showAlert}
        alertType={alertType}
        onClose={() => setShowAlert(false)}
      />
      <div className="recoveryContainer backgroundLogin">
        <div className="formRecovery">
          <h1 className="title">
            Informe seu e-mail de cadastro <br />
            para recuperação de senha.
          </h1>
          <form className="recoveryPassword" action="">
            <input
              className="input"
              name="email"
              type="text"
              placeholder="email"
              value={email}
              onChange={(email) => setEmail(email.target.value)}
            />
          </form>
          <button
            onClick={handleRecoveryClick}
            type="submit"
            className="button"
          >
            Recuperar senha
          </button>
        </div>
      </div>
    </div>
  )
}

export default Recovery