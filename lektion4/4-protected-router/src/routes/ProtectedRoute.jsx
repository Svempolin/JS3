import React from 'react'
import authServices from '../components/services/authServices'
import {Navigate, useLocation,  } from "react-router-dom"


 export const ProtectedRoute = ({children}) => {
const location = useLocation()
const authenticated = authServices.isAuthenticated()

  return  authenticated
  ? children
  : <Navigate to="/login" replace state = {{ from: location.pathname}}/>
}

