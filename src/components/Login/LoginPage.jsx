import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {selectAuthIsAuthorized} from "../../redux/selectors";
import LoginForm from './LoginForm';

const LoginPage = () => {
    const isAuthorized = useSelector(selectAuthIsAuthorized);

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
