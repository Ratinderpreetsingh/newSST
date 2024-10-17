import React from 'react'
import { Navigate } from 'react-router-dom'

const RoleRoute = ({children}) => {
    const role = "admin"
    return true ? children : <Navigate to='/auth/login'/>

}

export default RoleRoute