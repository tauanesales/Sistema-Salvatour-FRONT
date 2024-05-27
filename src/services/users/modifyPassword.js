import axios from "axios";
import { MODIFY_PASSWORD_ENDPOINT } from "../../constants/urls";

export function modifyPassword(email, password) {
    return new Promise((resolve, reject) => {
        const header = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        axios
            .post(
                MODIFY_PASSWORD_ENDPOINT,
                { 
                    email: email,
                    password: password
                 },
                header
            )
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
