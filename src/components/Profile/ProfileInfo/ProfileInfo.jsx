import React from "react"
import css from './ProfileInfo.module.scss'
import Loader from "../../common/Loader/Loader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader/>
  }
  return (
    <div className={css.profileInfo}>
      <div className={css.avatar}>
        <img src={
          props.profile.photos.large
            ? props.profile.photos.large
            : 'https://www.iconninja.com/files/980/515/831/warrior-ninja-avatar-samurai-icon.svg'
        } alt="Avatar"/>
      </div>
      <ul className={css.info__list}>
        <li>
          {props.profile.fullName}
        </li>
        <li>
          {props.profile.aboutMe}
        </li>
        <li>
          {
            props.profile.lookingForAJob
              ? props.profile.lookingForAJobDescription
              : null
          }
        </li>
      </ul>
    </div>
  )
}
export default ProfileInfo