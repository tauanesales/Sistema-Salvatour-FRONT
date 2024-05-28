import React, { useState, useEffect, useContext } from 'react';
import { Button } from './button';
import '../../styles/global.css';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEdit, faTrashAlt, faKey, faCity, faMapMarkerAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { handleSaveEdit, User } from './crudFunctions';
import { deleteUser } from '../../services/users/profileDelete';
import { useNavigate } from 'react-router-dom';
import { getCurrentUserInfo } from '../../services/users/getCurrentUserInfo';
import { validatePassword } from '../../utils/validators';
export const CrudUser = ({}: { onBackToHome: () => void; }) => {

  const [pwdConfirmation, setPwdConfirmation] = useState('');
  const [user, setUser] = useState<User>({
    name: { value: '', editing: false },
    password: { value: '', editing: false },
    city: { value: '', editing: false },
    state: { value: '', editing: false },
  });
  const [userId, setUserId] = useState<string>('');
  
  const token = localStorage.getItem('token')
  const [showAlert, setAlert] = useState(false)
  const [AlertType, setAlertType] = useState('')
  const [alertColor, setAlertColor] = useState('')

  function handleAlert(type,color){
    setAlert(true);
    setAlertType(type);
    setAlertColor(color)

     setTimeout(() => {
         setAlert(false);
       }, 2000)

}
  
  useEffect(() => {
    getCurrentUserInfo(token)
            
    .then((data)=>{
        setUser({
                  name: {value: data.name, editing: false}, 
                  password: {value: "", editing: false}, 
                  city: {value: data.city, editing: false},
                  state: {value: data.state, editing: false},
        })
    })
    .catch((error) => {
        console.log(error.response.status)
    } )

  }, [])
  
  const navigate = useNavigate();

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

  const handleSaveEditClick = () => {

    
    if (user.password.editing && pwdConfirmation != user.password.value) {
      handleAlert("Erro: Senha e confirmação não conferem", 'danger')
      return;
    }

    if (user.password.editing && !validatePassword(user.password.value)) {
      handleAlert("Erro: Senha inválida", "danger")
      return;
    }


    if (token && user) {
      handleSaveEdit(user.password.editing ? 
                        {name: user.name.value, password: user.password.value, city: user.city.value, state: user.state.value} 
                        : {name: user.name.value, city: user.city.value, state: user.state.value})
        .then(() => {
          setUser(prevUser => {
            const updatedUser = { ...prevUser };
            Object.keys(updatedUser).forEach(key => {
              updatedUser[key].editing = false;
            });
            return updatedUser;
          });
        })
        .catch(error => {
          console.error( error);
        });
        handleAlert("Alteração realizada com sucesso", 'sucess')
    }
  };
  const handleDeleteUser = (userId: string) => {
    const token = localStorage.getItem("token");
    return deleteUser(token, userId)
      .then((response) => {
        setUser({
          name: { value: '', editing: false },
          password: { value: '', editing: false },
          city: { value: '', editing: false }, 
          state: { value: '', editing: false }, 
        });
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='background'>
      <div className="position-absolute end-0 mb-5 p-5">
        {showAlert && (
          <div className={alertColor == 'danger'? "alert alert-danger alert-dismissible alert-style": "alert alert-success alert-dismissible alert-style"}>
            <div>{AlertType}</div>
          </div>
        )}
      </div>
      
      <div className='profile-container'>
        <div className='input-container'>
          <h1>Perfil do Usuário</h1>

          <label>Nome</label>
          <div className='icon-input'>
            <FontAwesomeIcon icon={faUserCircle} style={{ color: '#d3d3d3' }} size='2x' className='icon' />
            <input
              id='name'
              type='text'
              value={user.name.value}
              onChange={(e) => handleInputChange(e, 'name')}
              disabled={!user.name.editing}
              className='input'
              placeholder='Nome'
            />
            <FontAwesomeIcon
              icon={faEdit}
              style={{ color: '#d3d3d3', cursor: 'pointer', marginLeft: '1rem' }}
              size='2x'
              className='icon'
              onClick={() => handleEditClick('name')}
            />
          </div>

          <label>Cidade</label>
          <div className='icon-input'>
            <FontAwesomeIcon icon={faCity} style={{ color: '#d3d3d3' }} size='2x' className='icon' />
            <input
              id='city'
              type='text'
              value={user.city.value}
              onChange={(e) => handleInputChange(e, 'city')}
              disabled={!user.city.editing}
              className='input'
              placeholder='Cidade'
            />
            <FontAwesomeIcon
              icon={faEdit}
              style={{ color: '#d3d3d3', cursor: 'pointer', marginLeft: '1rem' }}
              size='2x'
              className='icon'
              onClick={() => handleEditClick('city')}
            />
          </div>

          <label>Estado</label>
          <div className='icon-input'>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d3d3d3' }} size='2x' className='icon' />
            <input
              id='state'
              type='text'
              value={user.state.value}
              onChange={(e) => handleInputChange(e, 'state')}
              disabled={!user.state.editing}
              className='input'
              placeholder='Estado'
            />
            <FontAwesomeIcon
              icon={faEdit}
              style={{ color: '#d3d3d3', cursor: 'pointer', marginLeft: '1rem' }}
              size='2x'
              className='icon'
              onClick={() => handleEditClick('state')}
            />
          </div>

          <label>Senha</label>
          <div className='icon-input'>
            <FontAwesomeIcon icon={faKey} style={{ color: '#d3d3d3' }} size='2x' className='icon' />
            <input
              type='password'
              value={user.password.value}
              onChange={(e) => handleInputChange(e, 'password')}
              disabled={!user.password.editing}
              placeholder='Senha'
              className='input'
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
        
        {
            user.password.editing ? <div>
                <label>Confirmar Senha</label>
                <div className='icon-input'>
                  <FontAwesomeIcon icon={faKey} style={{ color: '#d3d3d3' }} size='2x' className='icon' />
                  <input
                    type='password'
                    value={pwdConfirmation}
                    onChange={(e) => setPwdConfirmation(e.target.value)}
                    placeholder='Senha'
                    className='input'
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
            : <div />
          }

        <div className='style-button'>
          <Button onClick={() => handleSaveEditClick()}>Salvar Alterações</Button>
          <span style={{ margin: '0 34px' }}></span>
          <Button  onClick={() => handleDeleteUser(userId)}>
            <FontAwesomeIcon icon={faTrashAlt} style={{ marginRight: '0.5rem' }} />
            Excluir Conta
          </Button>
        </div>
        <div className='back-to-home-button'>
          <Button onClick={() => navigate('/home')}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '1rem' }} />
            Retornar para a Tela Inicial
          </Button>
        </div>
      </div>
  
    </div>
  );
};
