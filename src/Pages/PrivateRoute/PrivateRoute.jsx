import React, { useContext } from 'react';
import { authContext } from '../../Root/Root';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useContext(authContext);

    const location = useLocation();


    if(user && user?.email){
        return children
    }
    
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;