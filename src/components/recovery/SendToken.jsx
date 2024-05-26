import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import AlertNotMatch from './AlertNotMatch'
import { verifyToken } from '../../services/users/verifyToken'
import { checkMail } from '../../services/users/checkMail'

function SendToken() {
  const navigate = useNavigate()
  const [tokens, setTokens] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef([])
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState('')
  const [isError, setIsError] = useState(true)
  const [timeLeft, setTimeLeft] = useState(300)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else {
      setIsButtonDisabled(false)
    }
  }, [timeLeft])

  const handleResendToken = () => {
    const emailRecovery = localStorage
      .getItem('emailRecovery')
      .replace(/(^"|"$)/g, '')
    checkMail(emailRecovery)
    setAlertType(`Token reenviado para ${emailRecovery}`)
    setShowAlert(true)
    setIsError(false)
    setTimeLeft(300)
    setIsButtonDisabled(false)
  }

  const handleToken = async () => {
    const token = tokens.join('')
    if (token.length < 6) {
      setAlertType('O token deve conter 6 números')
      setShowAlert(true)
      setIsError(true)
      return
    }
    try {
      await verifyToken(token)
      localStorage.setItem('tokenValid', true)
      navigate('/newPassword')
    
    } catch (error) {
      if (error.status === 400) {
        if (error.data.message === 'Invalid token!') {
          setAlertType('Token inválido')
        } else if (error.data.message === 'Expired token!') {
          setAlertType('Token expirado, reenvie-o novamente')
        } else {
          setAlertType('Erro desconhecido. Por favor, tente novamente.')
        }
        setShowAlert(true)
        setIsError(true)
      } else {
        setAlertType('Erro desconhecido. Por favor, tente novamente.')
        setShowAlert(true)
        setIsError(true)
      }
    }
  }

  const handleChangeDigit = (index, digit) => {
    if (/^\d?$/.test(digit)) {
      const newTokens = [...tokens]
      newTokens[index] = digit
      setTokens(newTokens)
      if (digit && index < 5) {
        inputRefs.current[index + 1].focus()
      }
    }
  }

  const handleKeyDown = (index, digit) => {
    if (digit.key === 'Backspace' && !tokens[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
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
            Digite abaixo o token <br /> enviado para seu e-mail:
          </h1>
          <form className="recoveryPassword" action="">
            <div>
              {tokens.map((token, index) => (
                <input
                  key={index}
                  className="input"
                  name={`token${index}`}
                  type="text"
                  value={token}
                  onChange={(digit) =>
                    handleChangeDigit(index, digit.target.value)
                  }
                  onKeyDown={(digit) => handleKeyDown(index, digit)}
                  maxLength="1"
                  style={{ width: '40px', textAlign: 'center' }}
                  ref={(input) => (inputRefs.current[index] = input)}
                />
              ))}
            </div>
          </form>
          <button onClick={handleToken} type="button" className="button">
            Validar Token
          </button>
          <button
            onClick={handleResendToken}
            type="button"
            className={`button ${isButtonDisabled ? 'buttonDisabled' : ''}`}
            disabled={isButtonDisabled}
          >
            Reenviar Token {isButtonDisabled && `(${formatTime(timeLeft)})`}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SendToken
