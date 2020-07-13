import React from 'react';
import { Link } from 'react-router-dom'
import loginImage from './icons/login.jpg'

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="main">
            <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <img src={loginImage} className='img-responsive' alt="sing up image" />
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                        <div className="signup-image-link">
                            <span>Not a member yet? </span> 
                            <Link to="/register">Create an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        )
    }
}

export default Login;