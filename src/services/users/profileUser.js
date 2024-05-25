import axios from "axios";
import { USER_BY_ID_ENDPOINT } from "../../constants/urls";

export function profiler(accessToken, name, password) {
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

    axios
      .patch(
        USER_BY_ID_ENDPOINT,
        body,
        header
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error)

      });
  }, 20000);
}
