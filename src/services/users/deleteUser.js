import axios from "axios";
import { ADMIN_ENDPOINT } from "../../constants/urls";

export function deleteUser(accessToken, userIdToBeDeleted) {
    return new Promise((resolve, reject) => {
          axios
            .delete(
                `${ADMIN_ENDPOINT + 'user/' + userIdToBeDeleted}`, {
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            )
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    }, 20000)
}