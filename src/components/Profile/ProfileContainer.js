import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
  getStatus,
  getProfile,
  updateStatus,
  addPost,
  updateNewPostBody,
} from '../../redux/reducers/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const ProfileContainer = (props) => {
  let userId = props.match.params.userId;
  if (!userId) {
    userId = 7351;
  }
  useEffect(() => {
    props.getProfile(userId);
    props.getStatus(userId);
  }, []);
  return (
    <Profile
      profile={props.profile}
      posts={props.posts}
      newPostBody={props.newPostBody}
      status={props.status}
      updateStatus={props.updateStatus}
      addPost={props.addPost}
      updateNewPostBody={props.updateNewPostBody}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    newPostBody: state.profile.newPostBody,
    profile: state.profile.profile,
    status: state.profile.status,
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
  withRouter
)(ProfileContainer);
