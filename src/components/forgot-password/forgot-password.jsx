import './forgot-password.css'

function ForgotPassword() {
    return (
        <div className="container">
          <div className="loginContainer">
            <h1 className="title">
              Esqueci minha senha
            </h1>

            <h3>
                Iremos enviar um link de redefinição de senha para seu e-mail.
            </h3>
    
            <form className="formContainer" action="">
              <input type="text" placeholder="email" />
            </form>
    
            <button className="entrar">Redefinir senha</button>
          </div>
        </div>
      );
}

export default ForgotPassword