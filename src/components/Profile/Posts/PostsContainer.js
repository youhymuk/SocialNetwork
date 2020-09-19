import {connect} from "react-redux";
import Posts from "./Posts";
import {addPostAC, updateNewPostBodyAC} from "../../../redux/reducers/profileReducer";

const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostBody: state.profile.newPostBody
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostBody: (body) => {
            dispatch(updateNewPostBodyAC(body))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer