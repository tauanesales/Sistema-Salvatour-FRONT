import { Link } from "react-router-dom";
import Header from "../home/Header";
import "../../styles/home_admin.css";

export default function AdminHome() {
  return (
    <>
      <div className="background">
        <Header></Header>

        <div className="container">
          <section className="section1">
            <button className="button">
              <Link to="/admin" className="link-ver">
                Editar usuários
              </Link>
            </button>
            <button className="button">
              <Link to="/admin/new-places" className="link-ver">
                Cadastrar notícias
              </Link>
            </button>
            <button className="button">
              <Link to="/" className="link-ver">
                Ver notícias
              </Link>
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
