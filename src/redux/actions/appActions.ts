import { AppTypes } from '../../constants';
import {AppActionType} from "../../types/appTypes";

export const setInitialized = (isInitialized: boolean): AppActionType => ({
    type: AppTypes.SET_INITIALIZED,
    payload: { isInitialized },
});

