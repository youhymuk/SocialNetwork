import React, {useEffect} from "react"
import css from './Users.module.scss'
import * as axios from 'axios'

const Users = (props) => {
  useEffect(
    () => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
        .then(response => {
          props.setUsers(response.data.items)
          props.setTotalUsersCount(response.data.totalCount)
        })
    }
  )
  const onPageChange = (p) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${props.pageSize}`)
      .then(response => {
        props.setUsers(response.data.items)
      })
    props.setCurrentPage(p)
  }
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages = []
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <ul className={css.pagination}>
        {pages.map(p => {
           return (
             <li className={props.currentPage === p && css.active_page}
                 onClick={() => {onPageChange(p)}}>
               {p}
             </li>
           )
          }
        )}
      </ul>
      <ul>
        {props.users.map(
          user => <li className={css.user} key={user.id}>
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
          </li>
        )}
      </ul>
    </div>
  )
}
export default Users