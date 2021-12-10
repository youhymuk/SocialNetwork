import {AuthTypes} from '../../constants';
import {AuthActionType} from "../../types/authTypes";

export const setAuthUserData = (email: string, id: number, login: string, isAuthorized: boolean): AuthActionType => ({
    type: AuthTypes.SET_AUTH_USER_DATA,
    payload: { email, id, login, isAuthorized },
});

export const setAuthError = (error: string): AuthActionType => ({
    type: AuthTypes.SET_AUTH_ERROR,
    payload: { error },
})

export const setCaptchaUrl = (captchaUrl: string): AuthActionType => ({
    type: AuthTypes.SET_CAPTCHA_URL,
    payload: { captchaUrl },
});
