import React from 'react'
import Posts from './Posts/Posts'
import css from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

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
            <Posts/>
        </div>
    )
}
export default Profile