import axios from "axios";
import { NEW_PLACE_ENDPOINT } from "../../constants/urls";


export function registerPlace(title, descricao_breve, descricao_completa, img){
 return new Promise((resolve, reject) => {
    const header = {
        headers: {
          'Content-type': 'application/json',
        },
      };

    axios
    .post(
        `${NEW_PLACE_ENDPOINT}`, {
            title: title,
            descricao_breve: descricao_breve,
            descricao_completa: descricao_completa,
            img: img
        }
    
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
