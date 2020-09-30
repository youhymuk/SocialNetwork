import React, {useEffect} from 'react'
import Users from "./Users"
import {connect} from "react-redux"
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow
} from "../../redux/reducers/usersReducer";
import * as axios from "axios";

const UsersContainer = (props) => {
  useEffect(
    () => {
      props.toggleIsFetching(true)
      axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`,
        {withCredentials: true})
        .then(response => {
          props.setUsers(response.data.items)
          props.setTotalUsersCount(response.data.totalCount)
        })
      props.toggleIsFetching(false)
    }, []
  )
  const onPageChange = (p) => {
    props.toggleIsFetching(true)
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${props.pageSize}`,
      {withCredentials: true})
      .then(response => {
        props.setUsers(response.data.items)
      })
    props.setCurrentPage(p)
    props.toggleIsFetching(false)
  }
  const follow = (id) => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
      withCredentials: true, headers: {
      'API-KEY': '5b541634-45ee-484e-8651-cfe55f5d8405'
    }
  }
)
.
then(response => {
  if (response.data.resultCode === 0) {
    props.follow(id)
  }
})
}
const unfollow = (id) => {
  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
    withCredentials: true, headers: {
      'API-KEY': '5b541634-45ee-484e-8651-cfe55f5d8405'
    }
  })
    .then(response => {
      if (response.data.resultCode === 0) {
        props.unfollow(id)
      }
    })
}
return <Users onPageChange={onPageChange}
              follow={follow}
              unfollow={unfollow}
              users={props.users}
              totalUsersCount={props.totalUsersCount}
              currentPage={props.currentPage}
              pageSize={props.pageSize}
              isFetching={props.isFetching}
/>
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    isFetching: state.users.isFetching
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  toggleIsFetching,
})(UsersContainer)