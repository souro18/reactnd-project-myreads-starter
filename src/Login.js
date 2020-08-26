import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { login } from './BooksAPI';
import { setUser } from './redux-module/action-creator';

import loginImage from './icons/login.jpg'

const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string().required("This field is required"),
  });
const Login = props => {
    const [error , setError ] = useState({})
    const onLogin = data => {
        login(data)
        .then(res => {
            props.onSuccess(res.data.user);
            localStorage.setItem("token", res.data.token)
            props.history.push('/dashboard');
        })
        .catch(e => {console.log(e); e.response && setError(e.response.data)})
    }
    return (
        <div className="main">
            <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <img src={loginImage} className='img-responsive' alt="sing up" />
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={loginSchema}
                            onSubmit={values => {
                                onLogin(values);
                            }}
                        >
                            {({ errors, touched }) => (
                        <Form>
                            {error && <div className="error-block">{error.msg}</div>}
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    type="email"
                                />
                                {touched.email && errors.email && <div className="error">{errors.email}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                <Field id="password" name="password" type="password" placeholder="password" />
                                {touched.password && errors.password && <div className="error">{errors.password}</div>}
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </Form>
                            )}
                        </Formik>
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

const mapStateToProps = state => {
    // const menu = state.menuReducer;
    console.log(state)
    return { error: state.error }
}
const mapDispatchToProps = (dispatch) => {
    return {
      onSuccess: (user) => {
        dispatch(setUser(user))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);