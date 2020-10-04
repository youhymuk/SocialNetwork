import React, {useEffect} from 'react'
import Users from "./Users"
import {connect} from "react-redux"
import {follow, getUsers, setCurrentPage, unfollow} from "../../redux/reducers/usersReducer";

const UsersContainer = (props) => {
  useEffect(
    () => {
      props.getUsers(props.currentPage, props.pageSize)
    }, []
  )
  const onPageChange = (p) => {
    props.getUsers(p, props.pageSize)
  }
  const follow = (id) => {
    props.follow(id)
  }
  const unfollow = (id) => {
    props.unfollow(id)
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
  follow, unfollow, setCurrentPage, getUsers})(UsersContainer)