import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { logIn } from '../../redux/thunks/';
import {selectAuthCaptchaUrl, selectAuthError} from "../../redux/selectors/authSelectors";
import LoginSchema from './schemas/LoginSchema';

const initialValues = {
    email: '',
    password: '',
    remember: false,
    captcha: null,
};

const LoginForm = () => {
    const dispatch = useDispatch();

    const errorMessage = useSelector(selectAuthError);
    const captchaUrl = useSelector(selectAuthCaptchaUrl);

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(logIn(values));
                    setSubmitting(false);
                }}>
                {({ errors, dirty, isSubmitting }) => {
                    const hasFormikError = !!Object.keys(errors).filter(Boolean).length;
                    const isDisDisabledSubmit = isSubmitting || !dirty || hasFormikError || !!errorMessage;
                    console.log('isSubmitting', isSubmitting, 'dirty', dirty, 'hasFormikError', hasFormikError, 'errorMessage', !!errorMessage, errors)

                    return (
                        <>
                            {!!errorMessage && <div>{errorMessage}</div>}
                            <Form>
                                <label htmlFor="email">Email</label>
                                <Field id="email" type="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                                <label htmlFor="password">Password</label>
                                <Field id="password" type="password" name="password" />
                                <ErrorMessage name="password" component="div" />
                                <Field id="remember" name="remember" type="checkbox" />
                                <label htmlFor="remember">Remember me</label>
                                {!!captchaUrl && (
                                    <>
                                        <img src={captchaUrl} alt="Captcha image"/>
                                        <Field id="captcha" name="captcha" type="text"/>
                                        <label htmlFor="captcha">Enter symbols below</label>
                                    </>
                                )}
                                <button type="submit" disabled={isDisDisabledSubmit}>
                                    Submit
                                </button>
                            </Form>
                        </>
                    );
                }}
            </Formik>
        </>
    );
};

export default LoginForm;
