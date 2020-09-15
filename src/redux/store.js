import {combineReducers, createStore} from "redux";
import ProfileReducer from "./reducers/profileReducer";
import DialogReducer from "./reducers/DialogReducer";

const reducers = combineReducers({
    ProfileReducer,
    DialogReducer

})

const store = createStore(reducers)

export default
