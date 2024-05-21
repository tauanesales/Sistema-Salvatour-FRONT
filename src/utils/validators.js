function validateEmail (email){

    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (regexEmail.test(email)){
        return true;
    }
}
function validatePassword (password) {

  // const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:'",/?]).{8,}$/;

  //  if (regexPassword.test(password)){
        return true;
    //}
    
}

function inputValidator (email, password){

    return validateEmail(email) && validatePassword(password)
}

export {
    inputValidator, validateEmail, validatePassword
}