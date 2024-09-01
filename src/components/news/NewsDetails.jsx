import { useState, useEffect } from "react";
import "../../styles/global.css";
import Header from "../home/Header";
import { useParams } from "react-router-dom";
import { getAllArticles } from "../../services/articles/getAllArticles";
import { deleteArticle } from "../../services/articles/deleteArticle";
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player'
import TextToSpeech from '../TextToSpeech';

export default function NewsDetails() {
  const [news, setNews] = useState();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin") == "true";
  const navigate = useNavigate();

  useEffect(() => {
    loadNews();
  }, []);

  function loadNews() {
    getAllArticles(token)
      .then((data) => {
        data.forEach((element) => {
          if (element._id == id) {
            setNews(element);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDeleteNews() {
    deleteArticle(news._id, token)
      .then((data) => {
        console.log(data);
        alert("Noticia deletada com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleEditNews() {
    navigate(`/admin/update-news/${news._id}`);
  }

  return (
    <>
      <Header />
      {news ? (
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              marginTop: "16px",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            {news.title}
          </h1>
          <img
            style={{
              marginTop: "16px",
              marginBottom: "16px",
              width: "100%",
              borderRadius: "8px",
            }}
            className="imagem"
            src={news.image}
            alt={news.title}
          />
          <p
            style={{
              whiteSpace: "pre-line",
              textAlign: "justify",
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            {news.text}
          </p>
          <div
            className="player-wrapper"
            style={{
              marginTop: "16px",
              marginBottom: "16px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {news.video ? (
              <ReactPlayer
                url={news.video}
                controls={true}
                width="100%"
                height="400px"
              />
            ) : null}
          </div>

          <TextToSpeech title={news.title} text={news.text}/>

          {isAdmin ? (
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={handleEditNews} className="button">
                Editar notícia
              </button>
              <button onClick={handleDeleteNews} className="button">
                Apagar notícia
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
