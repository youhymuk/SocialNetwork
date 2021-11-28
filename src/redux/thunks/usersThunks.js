import { usersAPI } from '../../api/api';
import { toggleIsFetching, setUsers, setTotalUsersCount, followSuccess, unfollowSuccess } from '../actions';

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
    dispatch(toggleIsFetching(false));
};
export const follow = (id) => (dispatch) => {
    usersAPI.follow(id).then((data) => {
        if (data.resultCode === 0) {
            dispatch(followSuccess(id));
        }
    });
};
export const unfollow = (id) => (dispatch) => {
    usersAPI.unfollow(id).then((data) => {
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(id));
        }
    });
};
