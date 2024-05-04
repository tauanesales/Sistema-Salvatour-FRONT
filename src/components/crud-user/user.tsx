import React, { useState } from 'react';
import { Button } from './button';
import './style-button.css';

const initialUsers = [
  { id: 1, name: 'João', email: 'joao@examplo.com', phone: '123456789' },
  { id: 2, name: 'Maria', email: 'maria@examplo.com', phone: '987654321' },
  { id: 3, name: 'José', email: 'jose@examplo.com', phone: '555444333' }
];

export const CrudUser = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleInputChange = (e, field, id) => {
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return { ...user, [field]: e.target.value };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleAddUser = () => {
    const newId = users.length + 1;
    const newUser = { id: newId, name: '', email: '', phone: '' };
    setUsers([...users, newUser]);
  };

  const styleInput = {
    display: 'flex',
    boxShadow: 'none',
    border: 'none',
    fontSize: '14px',
    fontFamily: 'sans-serif',
  };

  const styleAction: React.CSSProperties = {
    display: 'flex',
    textAlign: 'center',
    padding: '24px',
  };

  const styleButtonUser = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '18px',
  };

  return (
    <div className='table-container'>
      <div style={styleButtonUser}>
      <Button variant="primary" onClick={handleAddUser}>Lista Usuário</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Celular</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <input
                  style={styleInput}
                  type="text"
                  value={user.name}
                  onChange={(e) => handleInputChange(e, 'name', user.id)}
                />
              </td>
              <td>
                <input
                  style={styleInput}
                  type="text"
                  value={user.email}
                  onChange={(e) => handleInputChange(e, 'email', user.id)}
                />
              </td>
              <td>
                <input
                  style={styleInput}
                  type="text"
                  value={user.phone}
                  onChange={(e) => handleInputChange(e, 'phone', user.id)}
                />
              </td>
              <td style={styleAction}>
                <Button variant="secondary" compact onClick={() => handleDelete(user.id)}>Deletar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
