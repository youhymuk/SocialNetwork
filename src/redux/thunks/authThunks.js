import {authAPI, securityAPI} from '../../api/api';
import {setAuthUserData, setAuthError, setCaptchaUrl} from '../actions';

export const getAuthUserData = () => (dispatch) => {
    return authAPI.authMe().then((data) => {
        if (data.resultCode === 0) {
            const { email, id, login } = data.data;
            dispatch(setAuthUserData(email, id, login, true));
        }
    });
};

export const logIn = (credentials) => (dispatch) => {
    authAPI.logIn(credentials).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if(data.resultCode === 10) {
                securityAPI.getCaptchaUrl().then((data) => dispatch(setCaptchaUrl(data.url)));
            }

            const errorMessage = !!data.messages.length ? data.messages[0] : 'Invalid data';
            dispatch(setAuthError(errorMessage));
        }
    });
};

export const logOut = () => (dispatch) => {
    authAPI.logOut().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};
