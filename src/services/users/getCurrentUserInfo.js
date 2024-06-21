import axios from "axios";
import { USERS_ENDPOINT } from "../../constants/urls";

export function getCurrentUserInfo(accessToken) {
    return new Promise((resolve, reject) => {
        const header = {
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          };

          axios
            .get(
                `${USERS_ENDPOINT + 'me'}`,
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