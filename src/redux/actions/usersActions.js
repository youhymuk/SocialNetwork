import { FOLLOW, UNFOLLOW, SET_USERS, SET_TOTAL_USERS_COUNT, SET_CURRENT_PAGE, TOGGLE_IS_FETCHING } from '../constants';

export const followSuccess = (userId) => ({ type: FOLLOW, payload: { userId } });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, payload: { userId } });
export const setUsers = (users) => ({ type: SET_USERS, payload: { users } });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, payload: { count } });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: { page } });
export const toggleIsFetching = (value) => ({ type: TOGGLE_IS_FETCHING, payload: { value } });
