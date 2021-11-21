import { object, string } from 'yup';
import { getRequiredMessage, getValidMessage } from './helpers';

export const LoginSchema = object().shape({
    email: string().email(getValidMessage('Email')).required(getRequiredMessage('Email')),
    password: string().required(getRequiredMessage('Password')),
});

export default LoginSchema;
