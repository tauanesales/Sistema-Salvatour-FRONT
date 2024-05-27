import axios from "axios";
import { VERIFY_TOKEN_ENDPOINT } from "../../constants/urls";

export function verifyToken(token) {
    const endpointWithToken = `${VERIFY_TOKEN_ENDPOINT}${token}`;
    return new Promise((resolve, reject) => {
        const header = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        axios
            .get(endpointWithToken, header)
            .then((response) => {
                if (response.status === 200) {
                    resolve(response.data);
                } else {
                    reject(new Error("Failed to send email"));
                }
            })
            .catch((error) => {
                reject(error.response);
            });
    }, 20000);
}
