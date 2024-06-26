import axios from "axios";
import { NEW_PLACE_ENDPOINT } from "../../constants/urls";


export function registerPlace(name, address, openingHours, description, image, accessToken, typeOfAttraction=null){
 return new Promise((resolve, reject) => {
    const header = {
        headers: {
          'Content-type': 'application/json',
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
            image: image,
            typeOfAttraction: typeOfAttraction
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
