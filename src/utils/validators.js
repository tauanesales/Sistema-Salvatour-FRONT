function validateEmail (email){
    return email?.toString().includes('@') && email?.toString().includes('.')
}

function validatePassword (password) {
    return password?.toString().length > 6
}

function inputValidator (email, password){

    return validateEmail(email) && validatePassword(password)
}

export {
    // validateEmail,
    // validatePassword,
    inputValidator
}