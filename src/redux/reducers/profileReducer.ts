import { ProfileTypes } from '../../constants';
import {ProfileActionType, ProfileInitialStateType} from "../../types/profileTypes";

const initialState: ProfileInitialStateType = {
    posts: [
        {
            id: 1,
            likesCount: 1,
            messageBody: 'Heeeey!',
        },
        {
            id: 2,
            likesCount: 2,
            messageBody: 'How are you?',
        },
        {
            id: 3,
            likesCount: 3,
            messageBody: `What's up!`,
        },
    ],
    newPostBody: '',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, { type, payload = {} }: ProfileActionType) => {
    switch (type) {
        case ProfileTypes.ADD_POST:
            const newPost = { likesCount: 0, messageBody: state.newPostBody };
            return {
                ...state,
                newPostBody: '',
                posts: [...state.posts, newPost],
            };
        case ProfileTypes.UPDATE_NEW_POST_BODY:
            return {
                ...state,
                newPostBody: payload.body,
            };
        case ProfileTypes.SET_PROFILE:
            return {
                ...state,
                profile: payload.profile,
            };
        case ProfileTypes.SET_STATUS:
            return {
                ...state,
                status: payload.status,
            };
        default:
            return state;
    }
};
export default profileReducer;
