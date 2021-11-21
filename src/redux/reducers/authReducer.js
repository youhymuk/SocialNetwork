import { authAPI } from '../../api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuthorized: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (email, id, login, isAuthorized) => ({
    type: SET_AUTH_USER_DATA,
    payload: { email, id, login, isAuthorized },
});

export const getAuthUserData = () => (dispatch) => {
    authAPI.authMe().then((data) => {
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
        }
    });
};

export const logOut = () => (dispatch) => {
    authAPI.logOut().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData({ ...initialState }));
        }
    });
};

export default authReducer;
