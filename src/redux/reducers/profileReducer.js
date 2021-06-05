import { profileAPI } from '../../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_BODY = 'UPDATE_NEW_POST_BODY';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

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

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = { likesCount: 0, content: state.newPostBody };
      return {
        ...state,
        newPostBody: '',
        posts: [...state.posts, newPost],
      };
    case UPDATE_NEW_POST_BODY:
      return {
        ...state,
        newPostBody: action.body,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
export default profileReducer;

export const updateNewPostBody = (body) => ({
  type: UPDATE_NEW_POST_BODY,
  body,
});
export const addPost = () => ({ type: ADD_POST });
export const setProfilePage = (profile) => ({ type: SET_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_STATUS, status });

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
