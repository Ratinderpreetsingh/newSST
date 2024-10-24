import React from 'react'
import { getCookie } from '../utils/Cookies'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
  const token =   getCookie('token')
  return token ? children : <Navigate to='/auth/login'/>
}

export default ProtectedRoutes
// import React from 'react';
// import { getCookie } from '../utils/Cookies';
// import { Navigate } from 'react-router-dom';
// import {jwtDecode} from 'jwt-decode';

// const ProtectedRoutes = ({ children }) => {
//   const token = getCookie('token');

//   const isValidToken = (token) => {
//     if (!token) return false;

//     // Basic JWT structure check
//     const parts = token.split('.');
//     if (parts.length !== 3) return false;

//     try {
//       const decodedToken = jwtDecode(token);
//       // Check for expiration
//       if (decodedToken.exp * 1000 < Date.now()) return false;
//       return true;
//     } catch (error) {
//       return false; // Invalid token
//     }
//   };

//   return isValidToken(token) ? children : <Navigate to='/auth/login' />;
// };

// export default ProtectedRoutes;

