import { useState, useEffect } from "react";
import { getAllArticles } from "../../services/articles/getAllArticles";
import Header from "./Header";
import Carousel from "./Carousel";
import "../../styles/global.css";
import "../../styles/home.css";
import NewsGrid from "../news/NewsGrid";

/**
 * Componente NewsPage
 *
 * Este componente representa a página de notícias.
 *
 */

export default function NewsPage() {
  const [newsList, setNewsList] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    loadNews();
  }, []);

  function loadNews() {
    getAllArticles(token)
      .then((data) => {
        console.log(data);
        setNewsList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Header></Header>
      <Carousel newsList={newsList.slice(0, 3)}></Carousel>
      <NewsGrid newsList={newsList.slice(0, newsList.length)}></NewsGrid>
    </>
  );
}
