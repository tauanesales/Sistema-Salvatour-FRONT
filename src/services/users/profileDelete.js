import axios from 'axios';
import { USER_BY_ID_ENDPOINT } from '../../constants/urls';

export function deleteUser(accessToken,name, password, city, state) {
  return new Promise((resolve, reject) => {
    const header = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const data = {
      name,
      password,
      city,
      state
    };

    axios
      .delete(
        USER_BY_ID_ENDPOINT(header, data),
      )
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
