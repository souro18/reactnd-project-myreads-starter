import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';

const Auth = props => {
    // const isAuthenticated = () => {
    //     const token = localStorage.getItem('token');
    //     return token && token.length >20;
    // }

    const redirectToLogin = () => {
        //const isAuth = isAuthenticated()
        console.log("auth");
        if(!props.isLogged && props.location.pathname !== '/register') {
            props.history.push('/login');
        }
    }
   useEffect(() => redirectToLogin(), [])

    return (
        <div>
            {/* {redirectToLogin()} */}
            {/* {props.children} */}
            {/* <span>asdsad</span> */}
        </div>
    )
}
const mapStateToProps = state => {
    return { isLogged: state.isLoggedIn }
}
export default connect(mapStateToProps, null)(Auth);