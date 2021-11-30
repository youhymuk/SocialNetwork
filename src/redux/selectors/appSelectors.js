import {createSelector} from 'reselect';

const appSelector = (state) => state.app;

export const selectAppIsInitialized = createSelector(appSelector, (app) => app.isInitialized);
