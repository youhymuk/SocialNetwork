import React, { useEffect } from 'react';
import { compose } from 'redux';
import {connect, useDispatch} from 'react-redux';

import Users from './Users';
import Loader from "../common/Loader/Loader";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { follow, getUsers, unfollow } from '../../redux/thunks';
import { setCurrentPage } from '../../redux/actions';

const UsersContainer = ({ users, totalUsersCount, isFetching, currentPage, pageSize, getUsers, follow, unfollow }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers(currentPage, pageSize);
    }, [currentPage, pageSize]);

    const onChangePage = (page) => {
        dispatch(setCurrentPage(page));
    };
    const followUser = (id) => {
        follow(id);
    };
    const unfollowUser = (id) => {
        unfollow(id);
    };

    return users ? (
        <Users
            onChangePage={onChangePage}
            follow={followUser}
            unfollow={unfollowUser}
            users={users}
            totalUsersCount={totalUsersCount}
            currentPage={currentPage}
            pageSize={pageSize}
            isFetching={isFetching}
        />
    ) : (<Loader/>)
};

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        pageSize: state.users.pageSize,
        isFetching: state.users.isFetching,
    };
};

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers }),
    withAuthRedirect,
)(UsersContainer);
