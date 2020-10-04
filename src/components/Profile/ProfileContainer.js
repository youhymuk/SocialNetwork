import React, {useEffect} from "react"
import {connect} from "react-redux"
import Profile from "./Profile"
import {setProfile} from "../../redux/reducers/profileReducer"
import {withRouter} from "react-router-dom"

const ProfileContainer = (props) => {
  let userId = props.match.params.userId
  if(!userId) {
    userId = 7351
  }
    useEffect(
      () => {
        props.setProfile(userId)
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