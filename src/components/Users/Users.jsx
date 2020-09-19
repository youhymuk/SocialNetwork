import React from "react";
import css from './Users.module.scss'

const Users = (props) => {
  return <ul>
    {props.users.map(
      user => <li className={css.user} key={user.id}>
        <div className={css.user_avatar}>
          <img src={user.avatar} alt="User avatar"/>
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
          <div className={css.name}>{user.name} {user.surname}</div>
          <div className={css.status}>{user.status}</div>
          <div className={css.address}>{user.address.country} {user.address.city}</div>
        </div>
      </li>
    )}
  </ul>
}
export default Users