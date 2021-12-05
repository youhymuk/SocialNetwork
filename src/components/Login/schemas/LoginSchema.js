import {object, string, lazy, mixed} from 'yup';
import { getRequiredMessage, getValidMessage } from './helpers';

export const LoginSchema = object().shape({
    email: string().email(getValidMessage('Email')).required(getRequiredMessage('Email')),
    password: string().required(getRequiredMessage('Password')),
    captcha: lazy(value => !!value ? string().required(getRequiredMessage('Captcha')) : mixed().notRequired()),
});

export default LoginSchema;
