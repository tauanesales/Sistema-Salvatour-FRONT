import axios from "axios";
import { USERS_ENDPOINT } from "../../constants/urls";

export function profiler(accessToken, updatedFields) {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      }
    };

    axios
      .patch(USERS_ENDPOINT, updatedFields, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
