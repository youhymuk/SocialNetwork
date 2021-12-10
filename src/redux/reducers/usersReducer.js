import { UsersTypes } from '../../constants';

const initialState = {
    users: [],
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
};

const usersReducer = (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case UsersTypes.FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === payload.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };
        case UsersTypes.UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === payload.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };
        case UsersTypes.SET_USERS:
            return {
                ...state,
                users: payload.users,
            };
        case UsersTypes.SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: payload.count,
            };
        case UsersTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload.page,
            };
        case UsersTypes.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: payload.value,
            };
        default:
            return state;
    }
};
export default usersReducer;
