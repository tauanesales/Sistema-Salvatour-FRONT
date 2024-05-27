import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

/**
 * Componente PrivateRoute
 *
 * Este componente tem como função proteger rotas privadas, impedindo que usuários não autenticados
 * acessem essas rotas. Se o status de login (statusLogin) for 'true', o usuário pode acessar a rota
 * protegida. Caso contrário, ele é redirecionado para a página inicial (login).
 *
 */


function PrivateRoute() {
  const location = useLocation();
  const status = localStorage.getItem('statusLogin');

  return status === 'true' ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default PrivateRoute;