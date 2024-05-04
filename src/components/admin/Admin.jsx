import { useState } from "react";
import dataMock from "../../utils/userDataMock";
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import DeleteFilledIcon from '@mui/icons-material/DeleteOutlined';

function confirmDeleteRow(id) {
  if (window.confirm(`Você deseja deletar o registro de id:${id}`)) {
    console.log(id)
    // Chamar o controller para excluir o usuario
  }
}
  
const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Nome', width: 150, editable: true },
    { field: 'email', headerName: 'E-mail', width: 150, editable: true },
    {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
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

export default function Admin() {
    const [selection, setSelection] = useState([]);
    const [rows, setRows] = useState(dataMock)

    const isSelectionEmpty = () => selection.length == 0;

    const processRowUpdate = (newRow) => {
      const updatedRow = { ...newRow, isNew: false };
      setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
      console.log(newRow);
      return updatedRow;
    };

    return (
        <div className="root" style={{ display: "flex", flexDirection: "column", padding: 15 }}>
            <div className="button-group" style={{ display: "flex", flexDirection: "row", marginBottom: 7}}>
                <Button variant="contained" style={{ marginRight: 15 }}>Criar usuário</Button>
                <Button variant="contained" disabled={isSelectionEmpty()} color="error">Deletar</Button>
            </div>
            <div style={{ height: '100%', width: 600 }}>
                <DataGrid 
                    rows={dataMock} 
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
        </div>
    )
}