import { SET_AUTH_USER_DATA, SET_AUTH_ERROR } from '../constants';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuthorized: false,
    error: null,
};

const authReducer = (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...payload,
            };
        case SET_AUTH_ERROR:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default authReducer;
