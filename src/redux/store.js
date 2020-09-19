import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogReducer from "./reducers/dialogReducer";
import usersReducer from "./reducers/usersReducer";


const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer,
    users: usersReducer
})

const store = createStore(reducers)

export default store
