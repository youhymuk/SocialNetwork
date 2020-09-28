import React, {useEffect} from 'react'
import css from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return(
        <div className={css.profile}>
            <ProfileInfo profile={props.profile}/>
            <Posts posts={props.posts}/>
        </div>
    )
}
export default Profile