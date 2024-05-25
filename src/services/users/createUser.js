import axios from "axios";
import { CADASTRO_ENDPOINT } from "../../constants/urls";

export function createUser(name, email, city, state, password) {
    return new Promise((resolve, reject) => {
        const header = {
            headers: {
              'Content-type': 'application/json',
            },
          };

          axios
            .post(
                CADASTRO_ENDPOINT,
                {
                    name: name,
                    email: email,
                    password: password,
                    city: city,
                    state: state
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