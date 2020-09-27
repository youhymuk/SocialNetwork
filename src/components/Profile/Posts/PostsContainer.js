import {connect} from "react-redux";
import Posts from "./Posts";
import {addPost, updateNewPostBody} from "../../../redux/reducers/profileReducer";

const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostBody: state.profile.newPostBody
    }
}

const PostsContainer = connect(mapStateToProps, {updateNewPostBody, addPost})(Posts)

export default PostsContainer