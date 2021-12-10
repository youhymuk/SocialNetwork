import { AuthTypes } from '../../constants';

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
