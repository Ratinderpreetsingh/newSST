import React from 'react'
import { getCookie } from '../utils/Cookies'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
  const token =   getCookie('token')
  return token ? children : <Navigate to='/auth/login'/>
}

export default ProtectedRoutes