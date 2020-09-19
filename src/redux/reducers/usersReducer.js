const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
  users: [
    {
      id: 1,
      followed: false,
      avatar: 'https://www.iconninja.com/files/980/515/831/warrior-ninja-avatar-samurai-icon.svg',
      firstName: 'Viktor',
      secondName: 'Petrov',
      status: `I'm looking for a job now`,
      address: {
        country: 'Ukraine',
        city: 'Kyiv'
      }
    },
    {
      id: 2,
      followed: false,
      avatar: 'https://www.iconninja.com/files/980/515/831/warrior-ninja-avatar-samurai-icon.svg',
      firstName: 'Max',
      secondName: 'Ivanov',
      status: `I'm looking for a job now`,
      address: {
        country: 'Ukraine',
        city: 'Kyiv'
      }
    },
    {
      id: 3,
      followed: false,
      avatar: 'https://www.iconninja.com/files/980/515/831/warrior-ninja-avatar-samurai-icon.svg',
      firstName: 'Sasha',
      secondName: 'Fedorov',
      status: `I'm looking for a job now`,
      address: {
        country: 'Ukraine',
        city: 'Kyiv'
      }
    }
  ]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(
          user => {
            if(user.id === action.userId) {
              return {...user, followed: true}
            }
            return user
          }
        )
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(
          user => {
            if(user.id === action.userId) {
              return {...user, followed: false}
            }
            return user
          }
        )
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    default:
      return state
  }
}
export default usersReducer

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})