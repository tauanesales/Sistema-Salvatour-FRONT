import { useContext, useState, useRef, useEffect } from "react";
import Alert from "../login/Alert";
import { AlertContext } from "../../contexts/alertContext";
import { AlertTypeContext } from "../../contexts/alertTypeContext";
import { AlertColorContext } from "../../contexts/alertColorContext";
import "../../styles/global.css";
import "../../styles/new_places.css";
import { useNavigate } from "react-router-dom";
import Header from "../home/Header";
import { getAllArticles } from "../../services/articles/getAllArticles";
import { useParams } from "react-router-dom";
import { updateArticle } from "../../services/articles/updateNews";

export default function UpdateNews() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    _id: "",
    title: "",
    text: "",
    image: "",
    video: "",
  });

  useEffect(() => {
    loadNews();
  }, []);

  function loadNews() {
    getAllArticles(token)
      .then((data) => {
        data.forEach((element) => {
          if (element._id == id) {
            console.log(element);
            setForm(element);
            if (element.image) {
              setImageToShow(element.image);
            }
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [image, setImage] = useState("");
  const [imageToShow, setImageToShow] = useState(form.image ?? undefined);

  const fileInputRef = useRef(null);
  const [showAlert, setShowAlert] = useContext(AlertContext);
  const [alertType, setAlertType] = useContext(AlertTypeContext);
  const [alertColor, setAlertColor] = useContext(AlertColorContext);
  const token = localStorage.getItem("token");

  function handleAlert(state, type, color = null) {
    setShowAlert(state);
    setAlertType(type);
    setAlertColor(color);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImageToShow(URL.createObjectURL(file));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(token);

    if (
      form._id &&
      form.title &&
      form.text &&
      (image || imageToShow || form.image)
    ) {
      updateArticle(form._id, form.title, form.text, form.video, image, token)
        .then((data) => {
          handleAlert(true, "Atualização realizado com sucesso", "success");
          //voltar para a tela anterior
          navigate(-1);
          fileInputRef.current.value = ""; // Redefinir o campo de entrada de arquivo
        })
        .catch((error) => {
          handleAlert(
            true,
            "Algum erro ocorreu durante a atualização, tente novamente",
            "danger"
          );
          console.log(error.response.status);
        });
    } else {
      handleAlert(true, "Preencha todos os campos", "danger");
    }
  }

  return (
    <>
      <div className="background">
        <Alert></Alert>
        <Header />
        <div className="mainContainerPlaces">
          <form className="subcontainer" onSubmit={handleSubmit}>
            <h1 className="placeTitle">Atualização da notícia</h1>

            <h3 className="titlePlaces">Título</h3>
            <input
              className="inputTitle"
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
            />

            <h3 className="titlePlaces">URL do vídeo</h3>
            <input
              className="inputTitle"
              type="text"
              name="video"
              value={form.video}
              onChange={handleChange}
            />

            <h3 className="titlePlaces">Texto</h3>
            <textarea
              className="inputDesc"
              name="text"
              value={form.text}
              onChange={handleChange}
            />

            <h3 className="titlePlaces">Imagem da notícia</h3>
            {imageToShow && (
              <img className="imagem" src={imageToShow} alt={form.title} />
            )}
            <input
              className="inputFile"
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
            />

            <button className="button cadastrar" type="submit">
              Atualizar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
