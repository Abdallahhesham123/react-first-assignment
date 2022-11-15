import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/Auth'

const RequireAuth = ({children}) => {
    const auth = useAuth();
    const location = useLocation();

    if(!auth.email && !auth.password){

        return (
          <Navigate to={`/login`} state={{ path:location.pathname}}/>
          )
    }

    return children;

}

export default RequireAuth