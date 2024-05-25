import React, { useState } from 'react';
import { Button } from './button';
import '../../styles/global.css'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPhone, faEdit, faTrashAlt, faKey } from '@fortawesome/free-solid-svg-icons';
import { profiler } from '../../services/users/profileUser';
import { deleteUser } from '../../services/users/profileDelete';

interface UserState {
  value: string;
  editing: boolean;
}

export const CrudUser = ({ userId, accessToken }: { userId: string; accessToken: string }) => {
  const [user, setUser] = useState({
    name: { value: 'João', editing: false } as UserState,
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


  const handleSaveEdit = () => {
    const { name, password } = user;
    profiler(name.value, password.value)
      .then((data) => {

        const token = data.token
        localStorage.setItem('token', token)

        setUser(prevUser => ({
          ...prevUser,
          name: { ...prevUser.name, editing: false },
          password: { ...prevUser.password, editing: false },
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteUser = () => {
    deleteUser(accessToken, userId)
      .then((data) => {
        const token = data.token
        localStorage.setItem('token', token)
        setUser({
          name: { value: '', editing: false },
          password: { value: '', editing: false },
        });
      })
      .catch((error) => {
        console.error(error);
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
            className="input"
            placeholder='name'
          />
          <FontAwesomeIcon
            icon={faEdit}
            style={{ color: '#d3d3d3', cursor: 'pointer', marginLeft: '1rem' }}
            size='2x'
            className='icon'
            onClick={() => handleEditClick('name')}
          />
          <div className="icon-input">
            <label>Cidade</label>
            <input className="input" onChange={(e) => { handleInputChange }} name="city" type="text" placeholder="cidade" />

          </div>
          <div className="icon-input">
            <label>Estado</label>
            <input className="input" onChange={(e) => { handleInputChange }} name="state" type="text" placeholder="estado" />
          </div>
        </div>

        <label>Senha</label>
        <div className='icon-input'>
          <FontAwesomeIcon icon={faKey} style={{ color: '#d3d3d3' }} size='2x' className='icon' />
          <input
            type="password"
            value={user.password.value}
            onChange={(e) => handleInputChange(e, 'password')}
            disabled={!user.password.editing}
            placeholder='senha'
            className="input"
          />
          <FontAwesomeIcon
            icon={faEdit}
            style={{ color: '#d3d3d3', cursor: 'pointer', marginLeft: '1rem' }}
            size='2x'
            className='icon'
            onClick={() => handleEditClick('password')}
          />
        </div>
      </div>

      <div className='style-button'>
        <Button onClick={handleSaveEdit}>Salvar Alterações</Button>
        <span style={{ margin: '0 30px' }}></span>
        <Button onClick={handleDeleteUser}>
          <FontAwesomeIcon icon={faTrashAlt} style={{ marginRight: '0.5rem' }} />
          Deletar Conta
        </Button>
      </div>
    </div >
  );
};
