import { UsersTypes } from '../../constants';
import {UsersType, UsersActionType} from "../../types/usersTypes";

export const followSuccess = (userId: number): UsersActionType => ({ type: UsersTypes.FOLLOW, payload: { userId } });

export const unfollowSuccess = (userId: number): UsersActionType => ({ type: UsersTypes.UNFOLLOW, payload: { userId } });

export const setUsers = (users: Array<UsersType>): UsersActionType => ({ type: UsersTypes.SET_USERS, payload: { users } });

export const setTotalUsersCount = (count: number): UsersActionType => ({ type: UsersTypes.SET_TOTAL_USERS_COUNT, payload: { count } });

export const setCurrentPage = (page: number): UsersActionType => ({ type: UsersTypes.SET_CURRENT_PAGE, payload: { page } });

export const toggleIsFetching = (value: boolean): UsersActionType => ({ type: UsersTypes.TOGGLE_IS_FETCHING, payload: { value } });
