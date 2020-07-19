import React, { useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

const Auth = props => {
    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return token && token.length >20;
    }

    const redirectToLogin = () => {
        const isAuth = isAuthenticated()
        if(!isAuth) {
            props.history.push('/login');
        }
    }
    useEffect(() => redirectToLogin())

    return (
        <div>
            {props.children}
        </div>
    )
}

export default Auth;