import React, {useEffect} from "react"
import {connect} from "react-redux"
import Profile from "./Profile"
import {setProfile} from "../../redux/reducers/profileReducer"
import * as axios from "axios";
import {withRouter} from "react-router-dom";

const ProfileContainer = (props) => {
  let userId = props.match.params.userId
  if(!userId) {
    userId = 7351
  }
    useEffect(
      () => {
          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                props.setProfile(response.data)
            })
      }, []
    )
    return <Profile profile={props.profile}
                    posts={props.posts}
                    newPostBody={props.newPostBody}
    />
}

const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostBody: state.profile.newPostBody,
        profile: state.profile.profile
    }
}

export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer))