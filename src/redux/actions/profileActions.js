import { ADD_POST, UPDATE_NEW_POST_BODY, SET_PROFILE, SET_STATUS } from '../constants';

export const updateNewPostBody = (body) => ({
    type: UPDATE_NEW_POST_BODY,
    payload: { body },
});
export const addPost = () => ({ type: ADD_POST });
export const setProfilePage = (profile) => ({ type: SET_PROFILE, payload: { profile } });
export const setUserStatus = (status) => ({ type: SET_STATUS, payload: { status } });
