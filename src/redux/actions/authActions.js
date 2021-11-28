import { SET_AUTH_USER_DATA, SET_AUTH_ERROR } from '../constants';

export const setAuthUserData = (email, id, login, isAuthorized) => ({
    type: SET_AUTH_USER_DATA,
    payload: { email, id, login, isAuthorized },
});

export const setAuthError = (error) => ({
    type: SET_AUTH_ERROR,
    payload: { error },
});
