import { AppTypes } from '../../constants';


const initialState = {
    isInitialized: false,
};

const appReducer = (state = initialState, { type, payload = {} }) => {
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
