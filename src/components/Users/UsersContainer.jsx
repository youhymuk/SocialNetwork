import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.users.users
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)