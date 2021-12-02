import React from 'react';
import {NavLink} from 'react-router-dom';

import Pagination from "../common/Pagination/Pagination";

import css from './Users.module.scss';

const Users = ({totalUsersCount, users, currentPage, pageSize, onChangePage, follow, unfollow}) => {

    return (
        <>
            <Pagination
                totalItemsCount={totalUsersCount}
                currentPage={currentPage}
                pageSize={pageSize}
                onChangePage={onChangePage}
            />
            {!!users.length && (
                <ul>
                    {users.map((user) => (
                        <li className={css.user} key={user.id}>
                            <div className={css.user_avatar}>
                                <NavLink to={'/profile/' + user.id}>
                                    <img
                                        src={
                                            user.photos.small !== null
                                                ? user.photos.small
                                                : 'https://www.iconninja.com/files/980/515/831/warrior-ninja-avatar-samurai-icon.svg'
                                        }
                                        alt="User avatar"
                                    />
                                </NavLink>
                            </div>
                            {user.followed ? (
                                <button
                                    type="button"
                                    onClick={() => {
                                        unfollow(user.id);
                                    }}>
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => {
                                        follow(user.id);
                                    }}>
                                    Follow
                                </button>
                            )}
                            <div className={css.user_info}>
                                <div className={css.name}>{user.name}</div>
                                <div className={css.status}>{user.status}</div>
                            </div>
                        </li>
                    ))}
                </ul>)}
        </>
    )
};
export default Users;
