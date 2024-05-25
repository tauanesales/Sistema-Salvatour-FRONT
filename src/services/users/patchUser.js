import axios from "axios";
import { ADMIN_ENDPOINT, USERS_ENDPOINT } from "../../constants/urls";

export function patchUser(accessToken, requestingUserId, name, email, city, state) {
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

      if (email != null) {
        body.email = email
      }

      if (city != null) {
        body.city = city
      }

      if (state != null) {
        body.state = state
      }

      axios
        .patch(
            `${ADMIN_ENDPOINT + requestingUserId}`, 
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