import { ProfileTypes } from '../../constants';
import {ProfileActionType, ProfileType} from "../../types/profileTypes";

export const updateNewPostBody = (body: string): ProfileActionType => ({
    type: ProfileTypes.UPDATE_NEW_POST_BODY,
    payload: { body },
});

export const addPost = (): ProfileActionType => ({ type: ProfileTypes.ADD_POST });

export const setProfilePage = (profile: ProfileType): ProfileActionType => ({ type: ProfileTypes.SET_PROFILE, payload: { profile } });

export const setUserStatus = (status: string): ProfileActionType => ({ type: ProfileTypes.SET_STATUS, payload: { status } });
