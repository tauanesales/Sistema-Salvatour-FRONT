import axios from 'axios';
import { USER_BY_ID_ENDPOINT } from '../../constants/urls';

export function deleteUser(accessToken, userId) {
  return new Promise((resolve, reject) => {
    const header = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };

    axios
      .delete(
        USER_BY_ID_ENDPOINT(userId),
        header
      )
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
