import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

/**
 * Componente PrivateRoute
 * 
 * Esse componente tem como função manter algumas rotas privadas e impedir que os usuários acessem essas rotas quando não estiverem logados, se o statusLogin for true eles conseguem acessar
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