import axios from "axios";
import { USERS_ENDPOINT } from "../../constants/urls";

export function profiler(accessToken, name, password) {
  return new Promise((resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    const body = {};
    if (name != null) {
      body.name = name;
    }
    if (password != null) {
      body.password = password;
    }

    axios
      .patch(USERS_ENDPOINT, body, { headers, timeout: 20000 })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
