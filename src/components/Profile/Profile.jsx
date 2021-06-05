import React from 'react'
import css from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Posts from "./Posts/Posts"

const Profile = (props) => {
    return(
        <div className={css.profile}>
            <ProfileInfo 
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <Posts 
                posts={props.posts} 
                newPostBody={props.newPostBody}
                addPost={props.addPost} 
                updateNewPostBody={props.updateNewPostBody}
            />
        </div>
    )
}
export default Profile
