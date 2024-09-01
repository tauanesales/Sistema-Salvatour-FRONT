import axios from "axios";
import { DELETE_ARTICLE_ENDPOINT } from "../../constants/urls";


export function deleteArticle(id, accessToken){

 return new Promise((resolve, reject) => {
    const header = {
        headers: {
          'Content-type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      };

    axios
    .delete(`${DELETE_ARTICLE_ENDPOINT}${id}`, header)
    .then((response) => {
        console.log(response)
        resolve(response.data);
    })
    .catch(error => {
      console.log(error)
      reject(error);
    });
 })}
