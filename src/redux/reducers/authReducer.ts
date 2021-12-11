import { AuthTypes } from '../../constants';
import {AuthActionType, AuthinitialStateType} from "../../types/authTypes";

const initialState: AuthinitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuthorized: false,
    error: null,
    captchaUrl: null,
};

const authReducer = (state = initialState, { type, payload = {} }: AuthActionType) => {
    switch (type) {
        case AuthTypes.SET_AUTH_USER_DATA:
        case AuthTypes.SET_AUTH_ERROR:
        case AuthTypes.SET_CAPTCHA_URL:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default authReducer;
