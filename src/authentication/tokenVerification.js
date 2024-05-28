import { jwtDecode } from 'jwt-decode';

export function isTokenExpired(token) {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp < currentTime;
    } catch (error) {
        console.error('Token expiration verification error: ', error)
        return true;
    }
}

export function isSameUser(token, userIdDeleted) {
    try {
        const decoded = jwtDecode(token);
        return decoded.id == userIdDeleted;
    } catch (error) {
        console.error('Token id verification error: ', error)
        return false;
    }
}