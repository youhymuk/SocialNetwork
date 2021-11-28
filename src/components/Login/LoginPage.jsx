import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginPage = () => {
    const { isAuthorized } = useSelector(({ authorization }) => authorization);

    return isAuthorized ? (
        <Redirect to="/profile" />
    ) : (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
