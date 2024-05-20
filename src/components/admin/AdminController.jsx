import React, { useState } from "react";
import Admin from "./AdminView";
import { getAllUsers } from "../../services/users/getAllUsers";
import { createUser } from "../../services/users/createUser";
import { deleteUser } from "../../services/users/deleteUser";

export default function AdminController() {
    const [name, setName] = useState("")
    const [nameHelperText, setNameHelperText] = useState("")
    const [email, setEmail] = useState("")
    const [emailHelperText, setEmailHelperText] = useState("")
    const [password, setPassword] = useState("")
    const [passwordHelperText, setPasswordHelperText] = useState("")
    const [showCreateUser, setShowCreateUser] = useState(false)
    const [users, setUsers] = useState([])
    const [loggedUserId, setLoggedUserId] = useState("")

    function onGetAllUsers() {
        getAllUsers(null)
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

        if (email == "" || email == null || email == undefined) {
            setEmailHelperText("Preencha o campo email.")
        } else {
            setEmailHelperText("")
        }

        if (name == "" || name == null || name == undefined) {
            setNameHelperText("Preencha o campo nome.")
        } else {
            setNameHelperText("")
        }

        if (password == "" || password == null || password == undefined) {
            setPasswordHelperText("Preencha o campo senha.")
        } else if (password.length < 8) {
            setPasswordHelperText("A senha deve conter no mínimo 8 caracteres")
        } else {
            setPasswordHelperText("")
        }

        if (emailHelperText != "" || nameHelperText != "" || passwordHelperText != "") {
            return
        } 

        createUser(null, name, email, password)
            .then((data) => {
                console.log(data)
                setShowCreateUser(false)
                setName("")
                setEmail("")
                setPassword("")
                setNameHelperText("")
                setEmailHelperText("")
                setPasswordHelperText("")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function onDeleteUser(userIdToBeDeleted) {
        deleteUser(null, loggedUserId, userIdToBeDeleted)
            .then((response) => {
                onGetAllUsers()
            })
            .catch((error) => console.log(error))
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
    />
}