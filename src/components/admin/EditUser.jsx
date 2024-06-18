import { React, useEffect, useState } from "react"
import { Modal } from "react-bootstrap";
import { Button, TextField } from "@mui/material";
import { validateEmail } from "../../utils/validators";
import { showSuccessToast } from "../../utils/toasts";

export default function EditUser({ showEditUser, setShowEditUser, user, onUpdateUser }) {
    const [name, setName] = useState(user.name)
    const [nameHelperText, setNameHelperText] = useState("")
    const [email, setEmail] = useState(user.email)
    const [emailHelperText, setEmailHelperText] = useState("")
    const [city, setCity] = useState(user.city)
    const [cityHelperText, setCityHelperText] = useState("")
    const [state, setState] = useState(user.state)
    const [stateHelperText, setStateHelperText] = useState("")

    useEffect(() => {
        setName(user.name)
        setNameHelperText("")
        setEmail(user.email)
        setEmailHelperText("")
        setCity(user.city)
        setCityHelperText("")
        setState(user.state)
        setStateHelperText("")
    }, [showEditUser])

    function validateForm(event) {
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

        if (hasErrors) {
            return
        }

        user.name = name
        user.email = email
        user.city = city
        user.state = state

        onUpdateUser(user)
    }

    return (
        <Modal show={showEditUser} onHide={() => setShowEditUser(!showEditUser)}>
            <Modal.Header closeButton>
                <Modal.Title>Editar usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={(event) => { validateForm(event) }} style={{ paddingTop: '15px', textAlign: "center" }}>
                    <TextField 
                        id="name"
                        label="Nome"
                        variant="outlined"
                        required
                        value={name}
                        helperText={nameHelperText}
                        error={nameHelperText != ""}
                        onChange={(event) => {setName(event.target.value)}}
                        style={{ width: '100%' }}
                    />

                    <br />
                    <br />

                    <TextField 
                        id="email"
                        label="E-mail" 
                        variant="outlined" 
                        required
                        value={email}
                        helperText={emailHelperText}
                        error={emailHelperText != ""}
                        onChange={(event) => {setEmail(event.target.value)}}
                        style={{ width: '100%' }}
                    />

                    <br />
                    <br />

                    <TextField 
                        id="city"
                        label="Cidade" 
                        variant="outlined" 
                        required
                        value={city}
                        helperText={cityHelperText}
                        error={cityHelperText != ""}
                        onChange={(event) => {setCity(event.target.value)}}
                        style={{ width: '100%' }}
                    />

                    <br />
                    <br />

                    <TextField 
                        id="state"
                        label="Estado" 
                        variant="outlined" 
                        required
                        value={state}
                        helperText={stateHelperText}
                        error={stateHelperText != ""}
                        onChange={(event) => {setState(event.target.value)}}
                        style={{ width: '100%' }}
                    />

                    <br />
                    <br />

                    <Button style={{ width: "100%" }} type="submit" variant="contained">Atualizar</Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}