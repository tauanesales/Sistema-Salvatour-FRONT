import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertNotMatch from './AlertNotMatch'
import { Eye, EyeOff } from 'lucide-react'
import { modifyPassword } from '../../services/users/modifyPassword'

function NewPassword() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState('')
  const [isError, setIsError] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const handlePasswords = async () => {
    if (password === '' || confirmPassword === '') {
      setAlertType('É necessário preencher os dois campos')
      setShowAlert(true)
      setIsError(true)
      return
    }
    if (password !== confirmPassword) {
      setAlertType('As senhas não coincidem')
      setShowAlert(true)
      setIsError(true)
      return
    }
    try {
      const emailRecovery = localStorage
        .getItem('emailRecovery')
        .replace(/(^"|"$)/g, '')
      await modifyPassword(emailRecovery, password)
      localStorage.removeItem('emailRecovery')
      localStorage.removeItem('tokenValid')
      navigate('/')
    } catch (error) {
      setAlertType('Erro desconhecido. Por favor, tente novamente.')
      setShowAlert(true)
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="recoveryContainer backgroundLogin">
      <AlertNotMatch
        isError={isError}
        showAlert={showAlert}
        alertType={alertType}
        onClose={() => setShowAlert(false)}
      />
      <div className="formRecovery">
        <h1 className="title">Digite uma nova senha:</h1>
        <form className="recoveryPassword">
          <input
            className="input"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="senha"
            value={password}
            onChange={(characterPassword) =>
              setPassword(characterPassword.target.value)
            }
          />
          <input
            className="input"
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            placeholder="digite sua senha novamente"
            value={confirmPassword}
            onChange={(characterPassword) =>
              setConfirmPassword(characterPassword.target.value)
            }
          />
          <button
            className="password-btn"
            onClick={handleShowPassword}
            type="button"
          >
            {showPassword ? <EyeOff /> : <Eye />}
            <label className="labelVerify">Verificar Senhas</label>
          </button>
        </form>
        <button type="submit" className="button" onClick={handlePasswords}>
          Alterar a senha
        </button>
      </div>
    </div>
  )
}

export default NewPassword
