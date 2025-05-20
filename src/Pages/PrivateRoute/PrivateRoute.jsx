import React, { useContext } from 'react';
import { authContext } from '../../Root/Root';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useContext(authContext);

    if(user && user?.email){
        return children
    }
    
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;