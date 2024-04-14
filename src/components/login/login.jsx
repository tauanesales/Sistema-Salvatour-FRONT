import { Link } from "react-router-dom";
import './login.css'

function Login() {
  return (
    <div className="container">
      <div className="loginContainer">
        <h1 className="title">
          Bem vindo de <br /> volta!
        </h1>

        <form className="formContainer" action="">
          <input type="text" placeholder="email" />
          <div className="senha">
            <input type="text" placeholder="senha" />
            <div className="svg-input"></div>
          </div>
          <Link className="esqueci" to="/forgot-password">
            Esqueci minha senha
          </Link>
        </form>

        <button className="entrar">Entrar</button>
      </div>
    </div>
  );
}

export default Login;
