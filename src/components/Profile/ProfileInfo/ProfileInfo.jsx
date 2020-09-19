import React from "react"
import css from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {
    return(
        <div className={css.profileInfo}>
            <div className={css.avatar}>
                <img src='https://www.iconninja.com/files/980/515/831/warrior-ninja-avatar-samurai-icon.svg' alt="Avatar"/>
            </div>
            <ul className={css.info__list}>
                <li>
                    {props.name} {props.surname}
                </li>
                <li>
                    Date of birth: {props.birth_date}
                </li>
                <li>
                    City: {props.city}
                </li>
                <li>
                    Education: {props.education}
                </li>
                <li>
                    Website: <a href={props.site} target='_blank'>{props.site}</a>
                </li>
            </ul>
        </div>
    )
}
export default ProfileInfo