const SET_AUTH_USER_DATA = 'SET_AUTH_DATA'

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuthorized: false
}

const authReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuthorized: true
      }
    default:
      return state
  }
}

export const setAuthUserData = (email, id, login) => ({type: SET_AUTH_USER_DATA, data: {email, id, login}})

export default authReducer