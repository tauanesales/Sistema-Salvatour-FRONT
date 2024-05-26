import axios from "axios";
import { USERS_ENDPOINT } from "../../constants/urls";

export function deleteUser(accessToken) {
  return new Promise((resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    axios
      .delete(USERS_ENDPOINT, { headers })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
