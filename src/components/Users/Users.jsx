import React from "react"
import css from './Users.module.scss'
import Loader from "../common/Loader/Loader";
import {NavLink} from "react-router-dom";

const Users = (props) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <ul className={css.pagination}>
        {pages.map(p => {
            return (
              <li className={props.currentPage === p ? css.active_page : null}
                  onClick={() => {
                    props.onPageChange(p)
                  }} key={p.id}>
                {p}
              </li>
            )
          }
        )}
      </ul>
      {props.isFetching ? <Loader/> : null}
      <ul>
        {props.users.map(
          user => <li className={css.user} key={user.id}>
            <NavLink to={'/profile/' + user.id}>
              <div className={css.user_avatar}>
                <img src={user.photos.small !== null
                  ? user.photos.small
                  : 'https://www.iconninja.com/files/980/515/831/warrior-ninja-avatar-samurai-icon.svg'}
                     alt="User avatar"/>
              </div>
              {
                user.followed
                  ? <button type='button' onClick={() => {
                    props.unfollow(user.id)
                  }}>Unfollow</button>
                  : <button type='button' onClick={() => {
                    props.follow(user.id)
                  }}>Follow</button>
              }
              <div className={css.user_info}>
                <div className={css.name}>{user.name}</div>
                <div className={css.status}>{user.status}</div>
              </div>
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  )
}
export default Users