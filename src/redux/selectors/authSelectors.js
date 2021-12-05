import {createSelector} from 'reselect';

const authSelector = (state) => state.authorization;

export const selectAuthError = createSelector(authSelector, (authorization) => authorization.error);

export const selectAuthIsAuthorized = createSelector(authSelector, (authorization) => authorization.isAuthorized);

export const selectAuthUserId = createSelector(authSelector, (authorization) => authorization.id);

export const selectAuthCaptchaUrl = createSelector(authSelector, (authorization) => authorization.captchaUrl);
