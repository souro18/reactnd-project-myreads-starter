import React from 'react';
import { Redirect } from 'react-router-dom';

const Auth = props => {
    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return token && token.length >20;
    }
    return (
        <div>
            {!isAuthenticated() && <Redirect to="/login"/>}
        </div>
    )
}

export default Auth;