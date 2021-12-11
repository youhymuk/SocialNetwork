import { AppTypes } from '../../constants';
import {AppActionType, AppInitialStateType} from "../../types/appTypes";


const initialState: AppInitialStateType = {
    isInitialized: false,
};

const appReducer = (state = initialState, { type, payload = {} }: AppActionType): AppInitialStateType => {
    switch (type) {
        case AppTypes.SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true,
            };
        default:
            return state;
    }
};

export default appReducer;
