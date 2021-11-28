import { FOLLOW, UNFOLLOW, SET_USERS, SET_TOTAL_USERS_COUNT, SET_CURRENT_PAGE, TOGGLE_IS_FETCHING } from '../constants';

const initialState = {
    users: [],
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
};

const usersReducer = (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === payload.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === payload.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: payload.users,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: payload.count,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload.page,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: payload.value,
            };
        default:
            return state;
    }
};
export default usersReducer;
