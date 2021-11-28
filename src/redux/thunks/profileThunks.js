import { profileAPI } from '../../api/api';
import { setProfilePage, setUserStatus } from '../actions';

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then((data) => {
        dispatch(setProfilePage(data));
    });
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then((data) => {
        dispatch(setUserStatus(data));
    });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
};
