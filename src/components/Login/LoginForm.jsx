import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { logIn } from '../../redux/reducers/authReducer';

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
                validate={(values) => {
                    const errors = {};

                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(logIn(values));
                    setSubmitting(false);
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <label htmlFor="password">Password</label>
                        <Field id="password" type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <Field id="remember" name="remember" type="checkbox" />
                        <label htmlFor="remember">Remember me</label>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;
