import {getAuthUserData} from "./authThunks";
import {setInitialized} from "../actions/appActions";

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => dispatch(setInitialized()));
};
