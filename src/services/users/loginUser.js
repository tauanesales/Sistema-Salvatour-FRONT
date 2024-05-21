import axios from "axios";
import { BACKEND_URL, LOGIN_ENDPOINT } from "../../constants/urls";


export function loginUser(accessToken, email, password){
 return new Promise((resolve, reject) => {
    const header = {
        headers: {
          'Content-type': 'application/json',
          //Authorization: `Bearer ${accessToken}`, //descomentar quando o jwt do back estiver pronto
        },
      };

    axios
    .post(
        `${LOGIN_ENDPOINT}`, {
            email: email,
        password: password
        }
    
    )
    .then((response) => {

        resolve(response.data);

    })
    .catch(error => {

      reject(error);

    });


 })}
