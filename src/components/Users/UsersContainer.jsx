import Users from "./Users";
import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC
} from "../../redux/reducers/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)