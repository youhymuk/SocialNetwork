import Users from "./Users";
import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC, toggleIsFetchingAC,
  unfollowAC
} from "../../redux/reducers/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    isFetching: state.users.isFetching
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count))
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page))
    },
    toggleIsFetching: (value) => {
      dispatch(toggleIsFetchingAC(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)