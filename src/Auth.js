import React, { useEffect} from 'react';
import { connect } from 'react-redux';

const Auth = props => {

    const redirectToLogin = () => {
        if(!props.isLogged && props.location.pathname !== '/register') {
            props.history.push('/login');
        } else if(props.isLogged) {
            props.history.push('/dashboard');
        }
    }
   useEffect(() => redirectToLogin(), [])

    return (
        <div></div>
    )
}
const mapStateToProps = state => {
    return { isLogged: state.isLoggedIn }
}
export default connect(mapStateToProps, null)(Auth);