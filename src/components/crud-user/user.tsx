import React, { useState } from 'react';
import { Button } from './button';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPhone, faEdit, faTrashAlt, faKey } from '@fortawesome/free-solid-svg-icons';

interface UserState {
  value: string;
  editing: boolean;
}

export const CrudUser = () => {
  const [user, setUser] = useState({
    name: { value: 'João', editing: false } as UserState,
    email: { value: 'joao@examplo.com', editing: false } as UserState,
    phone: { value: '123456789', editing: false } as UserState,
    password: { value: '', editing: false } as UserState,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setUser({
      ...user,
      [field]: { ...user[field], value: e.target.value }
    });
  };

  const handleEditClick = (field: string) => {
    setUser({
      ...user,
      [field]: { ...user[field], editing: true }
    });
  };

  const handleSaveEdit = (field: string) => {
    setUser({
      ...user,
      [field]: { ...user[field], editing: false }
    });
  };

  const handleDeleteAccount = () => {
    setUser({
      name: { value: '', editing: false },
      email: { value: '', editing: false },
      phone: { value: '', editing: false },
      password: { value: '', editing: false },
    });
  };

  return (
    <div className='profile-container'>
      <div className='input-container'>
        <h1>Perfil Usuário</h1>
        <label>Nome</label>
        <div className="icon-input">
          <FontAwesomeIcon icon={faUserCircle} style={{ color: '#d3d3d3' }} size='2x' className='icon' />
          <input
            id="name"
            type="text"
            value={user.name.value}
            onChange={(e) => handleInputChange(e, 'name')}
            disabled={!user.name.editing}
          />
          {!user.name.editing && (
            <FontAwesomeIcon
              icon={faEdit}
              style={{ color: '#d3d3d3', cursor: 'pointer', marginLeft: '1rem' }}
              size='2x'
              className='icon'
              onClick={() => handleEditClick('name')}
            />
          )}
          {user.name.editing && (
            <FontAwesomeIcon
              icon={faEdit}
              style={{ color: '#d3d3d3', cursor: 'pointer', marginLeft: '1rem' }}
              size='2x'
              className='icon'
              onClick={() => handleSaveEdit('name')}
            />
          )}
        </div>

        <label>Senha</label>
        <div className='icon-input'>
          <FontAwesomeIcon icon={faKey} style={{ color: '#d3d3d3' }} size='2x' className='icon' />
          <input
            type="password"
            value={user.password.value}
            onChange={(e) => handleInputChange(e, 'password')}
            disabled={!user.password.editing}
          />
          {!user.password.editing && (
            <FontAwesomeIcon
              icon={faEdit}
              style={{ color: '#d3d3d3', cursor: 'pointer', marginLeft: '1rem' }}
              size='2x'
              className='icon'
              onClick={() => handleEditClick('password')}
            />
          )}
          {user.password.editing && (
            <FontAwesomeIcon
              icon={faEdit}
              style={{ color: '#d3d3d3', cursor: 'pointer', marginLeft: '1rem' }}
              size='2x'
              className='icon'
              onClick={() => handleSaveEdit('password')}
            />
          )}
        </div>

        <label>Telefone</label>
        <div className='icon-input'>
          <FontAwesomeIcon icon={faPhone} style={{ color: '#d3d3d3' }} size='2x' className='icon' />
          <input
            type="text"
            value={user.phone.value}
            onChange={(e) => handleInputChange(e, 'phone')}
          />
        </div>
      </div>

      <div className='style-button'>
        <Button variant="secondary">Salvar Alterações</Button>
        <div style={{ marginLeft: '7rem' }}>
          <Button variant="secondary" onClick={handleDeleteAccount}>
            <FontAwesomeIcon icon={faTrashAlt} style={{ marginRight: '0.5rem' }} />
            Deletar Conta
          </Button>
        </div>
      </div>
    </div>
  );
};
