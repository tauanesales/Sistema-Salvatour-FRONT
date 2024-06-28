import axios from "axios";
import { NEW_PLACE_ENDPOINT } from "../../constants/urls";


export function registerPlace(name, address, openingHours, description, image, accessToken){
 return new Promise((resolve, reject) => {
    const header = {
        headers: {
          'Content-type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      };

    axios
    .post(
        `${NEW_PLACE_ENDPOINT}`, {
            name: name,
            address: address,
            openingHours: openingHours,
            description: description,
            image: image
        }, header
    
    )
    .then((response) => {

        console.log(response)
        resolve(response.data);

    })
    .catch(error => {
      console.log(error)
      reject(error);

    });


 })}
