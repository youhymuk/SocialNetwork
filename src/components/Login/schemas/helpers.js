import { string, ref, StringSchema } from 'yup';

const minNameLength = 3;
const maxNameLength = 255;
const minPasswordLength = 8;
const maxPasswordLength = 32;

export const getRequiredMessage = (name) => `${name} required`;

export const getValidMessage = (name) => `Please enter a valid ${name}`;
