import axios from "axios";
import { USERS_ENDPOINT } from "../../constants/urls";

export function deleteUser(accessToken, userId) {
  return new Promise((resolve, reject) => {
    axios
      .delete(
        `${USERS_ENDPOINT + userId}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        }
      }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
