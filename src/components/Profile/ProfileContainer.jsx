import React, { useEffect } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { addPost, updateNewPostBody } from '../../redux/actions';
import { getProfile, getStatus, updateStatus } from '../../redux/thunks';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import Profile from './Profile';
import Loader from "../common/Loader/Loader";

const ProfileContainer = ({
    profile,
    authorizedUserId,
    isAuthorized,
    posts,
    status,
    newPostBody,
    updateNewPostBody,
    updateStatus,
    getProfile,
    getStatus,
    match,
}) => {
    let userId = !!match.params.userId ? match.params.userId : isAuthorized ? authorizedUserId : null;

    useEffect(() => {
        getProfile(userId);
        getStatus(userId);
    }, [userId]);

    if(!profile) return <Loader/>

    return !!userId && isAuthorized ? (
        <Profile
            profile={profile}
            posts={posts}
            newPostBody={newPostBody}
            status={status}
            updateStatus={updateStatus}
            addPost={addPost}
            updateNewPostBody={updateNewPostBody}
        />
    ) : (
        <Redirect to="/login" />
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostBody: state.profile.newPostBody,
        profile: state.profile.profile,
        status: state.profile.status,
        authorizedUserId: state.authorization.id,
        isAuthorized: state.authorization.isAuthorized,
    };
};

export default compose(
    connect(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus,
        addPost,
        updateNewPostBody,
    }),
    withAuthRedirect,
    withRouter,
)(ProfileContainer);
