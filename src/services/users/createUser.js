import axios from "axios";
import { USERS_ENDPOINT } from "../../constants/urls";

export function createUser(accessToken, name, email, password) {
    return new Promise((resolve, reject) => {
        const header = {
            headers: {
              'Content-type': 'application/json',
            },
          };

          axios
            .post(
                USERS_ENDPOINT,
                {
                    name: name,
                    email: email,
                    password: password,
                    isAdmin: false
                },
                header
            )
            .then((response) => {
                if (response.status == 201) {
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