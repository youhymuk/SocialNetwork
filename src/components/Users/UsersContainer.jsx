import Users from "./Users";
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  toggleIsFetching
})(Users)