import { ProfileTypes } from '../../constants';

const initialState = {
    posts: [
        {
            likesCount: 1,
            content: 'Heeeey!',
        },
        {
            likesCount: 2,
            content: 'How are you?',
        },
        {
            likesCount: 3,
            content: `What's up!`,
        },
    ],
    newPostBody: '',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case ProfileTypes.ADD_POST:
            const newPost = { likesCount: 0, content: state.newPostBody };
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
