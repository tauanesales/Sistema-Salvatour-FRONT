import axios from "axios";
import { UPDATE_PLACE_ENDPOINT } from "../../constants/urls";


export function updatePlace(id, name, address, openingHours, description, image, accessToken){

  let objToSubmit = {
    name: name,
    address: address,
    openingHours: openingHours,
    description: description,
  }
  objToSubmit = image ? {...objToSubmit, image: image} : objToSubmit;
  
 return new Promise((resolve, reject) => {
    const header = {
        headers: {
          'Content-type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      };

    axios
    .patch(`${UPDATE_PLACE_ENDPOINT}${id}`, objToSubmit, header)
    .then((response) => {

        console.log(response)
        resolve(response.data);

    })
    .catch(error => {
      console.log(error)
      reject(error);

    });


 })}
