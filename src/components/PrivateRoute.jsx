import { Navigate } from "react-router-dom"
import React from 'react'

const PrivateRoute = ({children})=>{
    const token = localStorage.getItem("token")
    return token ? children : <Navigate to="/register" /> 
}

export default PrivateRoute