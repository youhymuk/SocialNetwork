import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import profileReducer from './reducers/profileReducer';
import dialogReducer from './reducers/dialogReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer,
    users: usersReducer,
    authorization: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
