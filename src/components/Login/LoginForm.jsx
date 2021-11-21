import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { logIn } from '../../redux/reducers/authReducer';
import LoginSchema from './schemas/LoginSchema';

const initialValues = {
    email: '',
    password: '',
    remember: false,
};

const LoginForm = () => {
    const dispatch = useDispatch();

    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(logIn(values));
                    setSubmitting(false);
                }}>
                {({ errors, dirty, isSubmitting }) => {
                    const hasFormikError = !!Object.keys(errors).filter(Boolean).length;
                    const isDisDisabledSubmit = isSubmitting || !dirty || hasFormikError;

                    return (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                            <label htmlFor="password">Password</label>
                            <Field id="password" type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                            <Field id="remember" name="remember" type="checkbox" />
                            <label htmlFor="remember">Remember me</label>
                            <button type="submit" disabled={isDisDisabledSubmit}>
                                Submit
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default LoginForm;
