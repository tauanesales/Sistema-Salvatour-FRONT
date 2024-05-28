import React, { useState } from "react";
import Admin from "./AdminView";
import { getAllUsers } from "../../services/users/getAllUsers";
import { createUser } from "../../services/users/createUser";
import { deleteUser } from "../../services/users/deleteUser";
import { patchUser } from "../../services/users/patchUser";
import { validateEmail, validatePassword } from "../../utils/validators";
import { isSameUser } from "../../authentication/tokenVerification";
import { useNavigate } from "react-router-dom";

export default function AdminController() {
    const [name, setName] = useState("")
    const [nameHelperText, setNameHelperText] = useState("")
    const [email, setEmail] = useState("")
    const [emailHelperText, setEmailHelperText] = useState("")
    const [city, setCity] = useState("")
    const [cityHelperText, setCityHelperText] = useState("")
    const [state, setState] = useState("")
    const [stateHelperText, setStateHelperText] = useState("") 
    const [password, setPassword] = useState("")
    const [passwordHelperText, setPasswordHelperText] = useState("")
    const [showCreateUser, setShowCreateUser] = useState(false)
    const [users, setUsers] = useState([])
    const token = localStorage.getItem("token")
    const navigate = useNavigate();

    function onGetAllUsers() {
        getAllUsers(token)
            .then((data) => {
                data.forEach((user) => {user.id = user._id})
                setUsers(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function onCreateUser(event) {
        event.preventDefault()
        let hasErrors = false

        if (!validateEmail(email)) {
            setEmailHelperText("E-mail inválido.")
            hasErrors = true
        } else {
            setEmailHelperText("")
        }

        if (name == "" || name == null || name == undefined) {
            setNameHelperText("Preencha o campo nome.")
            hasErrors = true
        } else {
            setNameHelperText("")
        }

        if (city == "" || city == null || city == undefined) {
            setCityHelperText("Preencha o campo cidade.")
            hasErrors = true
        } else {
            setCityHelperText("")
        }

        if (state == "" || state == null || state == undefined) {
            setStateHelperText("Preencha o campo estado.")
            hasErrors = true
        } else {
            setStateHelperText("")
        }

        if (!validatePassword(password)) {
            setPasswordHelperText("Senha inválida.")
            hasErrors = true
        } else {
            setPasswordHelperText("")
        }

        if (hasErrors) {
            return
        } 

        createUser(name, email, city, state, password)
            .then((data) => {
                console.log(data)
                setShowCreateUser(false)
                setName("")
                setEmail("")
                setCity("")
                setState("")
                setPassword("")
                setNameHelperText("")
                setEmailHelperText("")
                setCityHelperText("")
                setPasswordHelperText("")
                setPasswordHelperText("")
                onGetAllUsers()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function onDeleteUser(userIdToBeDeleted) {
        deleteUser(token, userIdToBeDeleted)
            .then((response) => {
                if (isSameUser(token, userIdToBeDeleted)) {
                    localStorage.setItem('token', "")
                    window.alert("Você não está autenticado.")
                    navigate("/")
                } else {
                    onGetAllUsers()
                }
            })
            .catch((error) => console.log(error))
    }

    function onDeleteMultipleUsers(usersIdList) {
        usersIdList.forEach((userId) => {
            onDeleteUser(userId)})
    }

    function onUpdateUser(updatedUser) {
        patchUser(
            token,
            updatedUser.id,
            updatedUser.name,
            updatedUser.email,
            updatedUser.city,
            updatedUser.state
        ).then((response) => {
            onGetAllUsers()
        }).catch((error) => console.log(error))
    }

    return <Admin 
        users={users}
        name={name}
        nameHelperText={nameHelperText}
        email={email} 
        emailHelperText={emailHelperText}
        city={city}
        cityHelperText={cityHelperText}
        state={state}
        stateHelperText={stateHelperText}
        password={password}
        passwordHelperText={passwordHelperText}
        showCreateUser={showCreateUser}
        setName={setName}
        setEmail={setEmail}
        setCity={setCity}
        setState={setState}
        setPassword={setPassword}
        setShowCreateUser={setShowCreateUser}
        onGetAllUsers={onGetAllUsers}
        onCreateUser={onCreateUser}
        onDeleteUser={onDeleteUser}
        onDeleteMultipleUsers={onDeleteMultipleUsers}
        onUpdateUser={onUpdateUser}
    />
}