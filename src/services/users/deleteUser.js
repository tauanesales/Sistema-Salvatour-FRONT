import axios from "axios";
import { USERS_ENDPOINT } from "../../constants/urls";

export function deleteUser(accessToken, requestingUserId, userIdToBeDeleted) {
    return new Promise((resolve, reject) => {
          axios
            .delete(
                `${USERS_ENDPOINT + userIdToBeDeleted}`, {
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                    data: {
                        id: requestingUserId
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