import axios from "axios";
import { CREATE_ARTICLE_ENDPOINT } from "../../constants/urls";


export function postArticle(title, video, text, image, accessToken){
 return new Promise((resolve, reject) => {
    const header = {
        headers: {
          'Content-type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      };

    axios.post(
        `${CREATE_ARTICLE_ENDPOINT}`, {
            title: title,
            video: video,
            text: text,
            image: image
        }, header
    )
    .then((response) => {
        console.log(response)
        resolve(response.data);
    })
    .catch(error => {
      console.log(error)
      reject(error);
    });
 })}
