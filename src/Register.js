import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { register } from './BooksAPI';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string().required("This field is required"),
    changepassword: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        )
    })
  });
const Register = props => {
    const [ isSuccess, setSuccess] = useState(false);
    const [ error, setError ] = useState({});

    const onRegister = data => {
         register(data)
            .then( data => setSuccess(true))
            .catch(e => {
                if(e.response) {
                    setError(e.response.data)
                }
            })
    };
    return (
        <div className="main">
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    {error && <div className="error-block">{error.msg}</div>}
                    {isSuccess && <div className="success-block">Registration successful. You can now log in.</div>}
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                password: '',
                                changepassword: '',
                            }}
                            validationSchema={DisplayingErrorMessagesSchema}
                            onSubmit={values => {
                                onRegister(values);
                            }}
                        >
                            {({ errors, touched, handleBlur, handleChange }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <Field id="name" name="name" placeholder="Your Name" />
                                {touched.name && errors.name && <div className="error">{errors.name}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    type="email"
                                />
                                {touched.email && errors.email && <div className="error">{errors.email}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <Field id="password" name="password" type="password" placeholder="password" />
                                {touched.password && errors.password && <div className="error">{errors.password}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="changepassword"><i className="zmdi zmdi-lock-outline"></i></label>
                                <Field type="password" name="changepassword" placeholder="Confirm password" onBlur={handleBlur} onChange={handleChange}/>
                                {touched.changepassword && errors.changepassword && <div className="error">{errors.changepassword}</div>}
                            </div>
                            <div className="form-group form-button">
                                <Field type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </Form>
                            )}
                        </Formik>
                        <div className="signup-image-link">
                            <span>Already a member? </span>
                            <Link to="/">log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Register;