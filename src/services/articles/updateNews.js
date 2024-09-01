import axios from "axios";
import { UPDATE_ARTICLE_ENDPOINT } from "../../constants/urls";

export function updateArticle(id, title, text, video, image, accessToken){

  let objToSubmit = {
    title: title,
    text: text,
    video: video
  }
  objToSubmit = image ? {...objToSubmit, image: image} : objToSubmit;
  
 return new Promise((resolve, reject) => {
    const header = {
        headers: {
          'Content-type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      };

    axios
    .patch(`${UPDATE_ARTICLE_ENDPOINT}${id}`, objToSubmit, header)
    .then((response) => {
        console.log(response)
        resolve(response.data);
    })
    .catch(error => {
      console.log(error)
      reject(error);
    });
 })}
