import {SET_AUTH_USER_DATA, SET_AUTH_ERROR, SET_CAPTCHA_URL} from '../constants';

export const setAuthUserData = (email, id, login, isAuthorized) => ({
    type: SET_AUTH_USER_DATA,
    payload: { email, id, login, isAuthorized },
});

export const setAuthError = (error) => ({
    type: SET_AUTH_ERROR,
    payload: { error },
})

export const setCaptchaUrl = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    payload: { captchaUrl },
});
