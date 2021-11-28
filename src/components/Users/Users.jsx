import React from 'react';
import { NavLink } from 'react-router-dom';

import Loader from '../common/Loader/Loader';
import css from './Users.module.scss';

const Users = ({ totalUsersCount, users, currentPage, pageSize, onPageChange, follow, unfollow }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <ul className={css.pagination}>
                {pages.map((p) => {
                    return (
                        <li
                            className={currentPage === p ? css.active_page : null}
                            onClick={() => {
                                onPageChange(p);
                            }}
                            key={p.id}>
                            {p}
                        </li>
                    );
                })}
            </ul>
            {!users ? <Loader /> : null}
            <ul>
                {!!users.length &&
                    users.map((user) => (
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
            </ul>
        </div>
    );
};
export default Users;
