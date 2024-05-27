import axios from "axios";
import { CHECK_EMAIL_ENDPOINT } from "../../constants/urls";

export function checkMail(email) {
    return new Promise((resolve, reject) => {
        const header = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        axios
            .post(
                CHECK_EMAIL_ENDPOINT,
                { email: email },
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
