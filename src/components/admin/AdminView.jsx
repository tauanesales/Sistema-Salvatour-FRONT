import { useEffect, useState } from "react";
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Button, TextField } from "@mui/material";
import DeleteFilledIcon from '@mui/icons-material/DeleteOutlined';

export default function Admin({
    users,
    name,
    nameHelperText,
    email,
    emailHelperText,
    password,
    passwordHelperText,
    showCreateUser,
    setName,
    setEmail,
    setPassword,
    setShowCreateUser,
    onGetAllUsers,
    onCreateUser,
    onDeleteUser,
    onDeleteMultipleUsers,
    onUpdateUser
  }) {
    const [selection, setSelection] = useState([]);

    const isSelectionEmpty = () => selection.length == 0;

    const processRowUpdate = (newRow) => {
      onUpdateUser(newRow)
      return newRow;
    };

    useEffect(() => {
      onGetAllUsers()
    }, [])

    function confirmDeleteRow(id) {
      if (window.confirm(`Você deseja deletar o registro de id:${id}`)) {
        console.log(id)
        onDeleteUser(id)
      }
    }

    function confirmDeleteRows() {
      if (window.confirm(`Você deseja deletar ${selection.length} registros?`)) {
        onDeleteMultipleUsers(selection)
      }
    }

    const columns = [
      { field: 'id', headerName: 'ID', width: 150 },
      { field: 'name', headerName: 'Nome', width: 250, editable: true },
      { field: 'email', headerName: 'E-mail', width: 150, editable: true },
      {
          field: 'actions',
          type: 'actions',
          headerName: 'Ações',
          width: 100,
          cellClassName: 'Actions',
          getActions: ({ id }) => {  
            return [
              <GridActionsCellItem
                key={0}
                icon={<DeleteFilledIcon />}
                label="Delete"
                onClick={() => {confirmDeleteRow(id)}}
                color="error"
              />
            ]
          },
        },
  ];

    return (
        <div className="root" style={{ display: "flex", flexDirection: "column", padding: 15, width: "100%", alignItems: "center" }}>
            <div className="button-group" style={{ display: "flex", flexDirection: "row", marginBottom: 7, width: "50%", justifyContent: "flex-end"}}>
                <Button variant="contained" style={{ marginRight: 15 }} onClick={() => {setShowCreateUser(!showCreateUser)}}>
                  Criar usuário
                </Button>
                <Button variant="contained" disabled={isSelectionEmpty()} color="error" onClick={() => {confirmDeleteRows()}}>Deletar</Button>
            </div>
            <div style={{ height: '100%', width: "50%", display: "flex", justifyContent: "space-between" }}>
                <DataGrid 
                    rows={users} 
                    columns={columns} 
                    checkboxSelection
                    onRowSelectionModelChange={(newSelection) => {
                        setSelection(newSelection);
                        console.log("selection", selection)
                      }
                    }
                    processRowUpdate={processRowUpdate}
                />
            </div>

            {showCreateUser && (
              <>
                <h1 style={{ paddingTop: 15 }}>Novo usuário</h1>
                <form onSubmit={(event) => { onCreateUser(event) }} style={{ paddingTop: '15px', width: "50%", textAlign: "center" }}>
                  <TextField 
                    id="name"
                    label="Nome"
                    variant="outlined"
                    value={name}
                    helperText={nameHelperText}
                    error={nameHelperText != ""}
                    onChange={(event) => {setName(event.target.value)}}
                    style={{ width: '50%' }}
                  />

                  <br />
                  <br />

                  <TextField 
                    id="email"
                    label="E-mail" 
                    variant="outlined" 
                    value={email}
                    helperText={emailHelperText}
                    error={emailHelperText != ""}
                    onChange={(event) => {setEmail(event.target.value)}}
                    style={{ width: '50%' }}
                  />

                  <br />
                  <br />

                  <TextField 
                    id="password" 
                    label="Senha" 
                    variant="outlined"
                    helperText={passwordHelperText}
                    error={passwordHelperText != ""}
                    value={password} 
                    onChange={(event) => {setPassword(event.target.value)}}
                    style={{ width: '50%' }}
                  />

                  <br />
                  <br />

                  <Button style={{ width: "50%" }} type="submit" variant="contained">Enviar</Button>
                </form>
              </>
            )}
        </div>
    )
}