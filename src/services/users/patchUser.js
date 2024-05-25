import axios from "axios";
import { USERS_ENDPOINT } from "../../constants/urls";

export function patchUser(accessToken, requestingUserId, name, email, password) {
    return new Promise((resolve, reject) => {
      const header = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      };

      let body = {}

      if (name != null) {
        body.name = name
      }

      if (password != null) {
        body.password = password
      }

      if (email != null) {
        body.email = email
      }

      axios
        .patch(
            `${USERS_ENDPOINT + requestingUserId}`, 
            body,
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