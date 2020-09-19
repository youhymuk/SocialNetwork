import React from 'react'
import css from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return(
        <div className={css.profile}>
            <ProfileInfo name='Dima'
                         surname='Yukhymuk'
                         birth_date='27.07.1995'
                         city='Kyiv'
                         education='MIT'
                         site='https://github.com/youhymuk'
            />
            <PostsContainer posts={props.posts}/>
        </div>
    )
}
export default Profile