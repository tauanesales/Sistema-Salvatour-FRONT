import { Navigate } from 'react-router-dom';
import {isTokenExpired} from '../authentication/tokenVerification.js'
export const ProtectedRoute = ({
    redirectPath = '/login',
    adminOnly = false,
    children,
}) => {

    const token = localStorage.getItem('token');
    const isAdmin = localStorage.getItem('isAdmin');

    if (token && !isTokenExpired(token) && (adminOnly ? isAdmin == 'true' : true)) {
        return children;
    }

    return <Navigate to={redirectPath} replace />;

}