import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import {selectAuthUserId} from "../../../redux/selectors";
import ProfileStatus from "./profileStatus";

import css from './ProfileInfo.module.scss';

const ProfileInfo = ({profile, status, updateStatus}) => {
    const {fullName, aboutMe, photos, lookingForAJob, lookingForAJobDescription} = profile;

    const {userId} = useParams();

    const authorizedUserId = useSelector(selectAuthUserId);

    const isOwner = authorizedUserId === userId;

    return (
        <div className={css.profileInfo}>
            <div>
                <div className={css.avatar}>
                    <img src={
                        photos.large ?? 'https://www.iconninja.com/files/980/515/831/warrior-ninja-avatar-samurai-icon.svg'
                    } alt="Avatar"/>
                </div>
                <ProfileStatus
                    status={status}
                    updateStatus={updateStatus}
                    isOwner={isOwner}
                />
            </div>
            <ul className={css.info__list}>
                {fullName && (
                    <li>
                    {fullName}
                    </li>
                )}
                {aboutMe && (
                    <li>
                    {aboutMe}
                    </li>
                )}
                {lookingForAJob && (
                    <li>
                        {lookingForAJobDescription}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ProfileInfo;
