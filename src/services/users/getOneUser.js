import axios from "axios";
import { USERS_ENDPOINT } from "../../constants/urls";

export function getOneUser(accessToken, userId) {
    return new Promise((resolve, reject) => {
        const header = {
            headers: {
              'Content-type': 'application/json',
              //Authorization: `Bearer ${accessToken}`, //descomentar quando o jwt do back estiver pronto
            },
          };

          axios
            .get(
                `${USERS_ENDPOINT + userId}`,
                header
            )
            .then((response) => {
                if (response.status == 200) {
                    resolve(response.data)
                } else {
                    reject(response)
                }
            })
            .catch((error) => {
                reject(error)
            })
    }, 20000)
}