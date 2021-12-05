import { SET_AUTH_USER_DATA, SET_AUTH_ERROR, SET_CAPTCHA_URL } from '../constants';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuthorized: false,
    error: null,
    captchaUrl: null,
};

const authReducer = (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case SET_AUTH_USER_DATA:
        case SET_AUTH_ERROR:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default authReducer;
