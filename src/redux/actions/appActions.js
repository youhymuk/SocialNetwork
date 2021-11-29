import { SET_INITIALIZED } from '../constants';

export const setInitialized = (isInitialized) => ({
    type: SET_INITIALIZED,
    payload: { isInitialized },
});

