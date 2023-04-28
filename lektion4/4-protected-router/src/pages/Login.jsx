import React from 'react'
import authServices from '../components/services/authServices'
import {useLocation, useNavigate} from "react-router-dom"

const Login = () => {

    
        const {state} = useLocation()
        const navigate = useNavigate()
        console.log(location)


        const handleLogin = async () => {
            console.log(authServices.isAuthenticated())
            await authServices.login(()=> {})
            navigate(state?.from || '/')
            // if (state){
            //     navigate(state.from)
            // }else {
            //     navigate('/')
            // }
        
            }
    
   
   
  return (
    <div>
        <button onClick={handleLogin}>Login</button>

    </div>
  )
}

export default Login