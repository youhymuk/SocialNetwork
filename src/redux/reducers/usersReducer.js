const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 10,
  isFetching: false
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
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.value
      }
    default:
      return state
  }
}
export default usersReducer

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const toggleIsFetching = (value) => ({type: TOGGLE_IS_FETCHING, value})