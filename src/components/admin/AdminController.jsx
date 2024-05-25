import React, { useState } from "react";
import Admin from "./AdminView";
import { getAllUsers } from "../../services/users/getAllUsers";
import { createUser } from "../../services/users/createUser";
import { deleteUser } from "../../services/users/deleteUser";
import { patchUser } from "../../services/users/patchUser";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/validators";

export default function AdminController() {
    const [name, setName] = useState("")
    const [nameHelperText, setNameHelperText] = useState("")
    const [email, setEmail] = useState("")
    const [emailHelperText, setEmailHelperText] = useState("")
    const [password, setPassword] = useState("")
    const [passwordHelperText, setPasswordHelperText] = useState("")
    const [showCreateUser, setShowCreateUser] = useState(false)
    const [users, setUsers] = useState([])
    const navigate = useNavigate();
    const token = localStorage.getItem("token")

    if (!token) {
        navigate("/")
    }

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

        if (!validateEmail(email)) {
            setEmailHelperText("E-mail inválido.")
        } else {
            setEmailHelperText("")
        }

        if (name == "" || name == null || name == undefined) {
            setNameHelperText("Preencha o campo nome.")
        } else {
            setNameHelperText("")
        }

        if (!validatePassword(password)) {
            setPasswordHelperText("Senha inválida.")
        } else {
            setPasswordHelperText("")
        }

        if (emailHelperText != "" || nameHelperText != "" || passwordHelperText != "") {
            return
        } 

        createUser(name, email, password)
            .then((data) => {
                console.log(data)
                setShowCreateUser(false)
                setName("")
                setEmail("")
                setPassword("")
                setNameHelperText("")
                setEmailHelperText("")
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
                onGetAllUsers()
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
            updatedUser.email
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
        password={password}
        passwordHelperText={passwordHelperText}
        showCreateUser={showCreateUser}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        setShowCreateUser={setShowCreateUser}
        onGetAllUsers={onGetAllUsers}
        onCreateUser={onCreateUser}
        onDeleteUser={onDeleteUser}
        onDeleteMultipleUsers={onDeleteMultipleUsers}
        onUpdateUser={onUpdateUser}
    />
}