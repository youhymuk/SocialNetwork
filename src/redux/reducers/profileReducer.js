const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_BODY = 'UPDATE_NEW_POST_BODY'
const SET_PROFILE = 'SET_PROFILE'

const initialState = {
  posts: [
    {
        likesCount: 1,
        content: 'Heeeey!'
    },
    {
        likesCount: 2,
        content: 'How are you?'
    },
    {
        likesCount: 3,
        content: `What's up!`
    }
  ],
  newPostBody: '',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {likesCount: 0, content: state.newPostBody}
      return {
        ...state,
        newPostBody: '',
        posts: [...state.posts, newPost]
      }
    case UPDATE_NEW_POST_BODY:
      return {
        ...state,
        newPostBody: action.body
      }
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state
  }
}
export default profileReducer

export const updateNewPostBody = (body) => ({type: UPDATE_NEW_POST_BODY, body})
export const addPost = () => ({type: ADD_POST})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})