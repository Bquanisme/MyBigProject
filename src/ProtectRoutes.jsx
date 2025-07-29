import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const ProtectRoutes = ({children}) => {
    const token = useSelector((state) => state.auth.token);
    if(!token){
       return (<Navigate to="/"></Navigate>)
    }
    console.log('token', token)
    //return token ? children : <Navigate to="/" />;
    return (
        <>{children}</>
    )
}

export default ProtectRoutes

