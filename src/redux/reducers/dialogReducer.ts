import { DialogsTypes } from '../../constants';
import {DialogsActionType, DialogsInitialStateType} from "../../types/dialogsTypes";

const initialState: DialogsInitialStateType = {
    messages: [
        {
            id: 1,
            messageBody: 'Lorem ipsum',
        },
        {
            id: 2,
            messageBody: 'Lorem ipsum',
        },
        {
            id: 3,
            messageBody: 'Lorem ipsum',
        },
        {
            id: 4,
            messageBody: 'Lorem ipsum',
        },
        {
            id: 5,
            messageBody: 'Lorem ipsum',
        },
    ],
    newMessageBody: '',
};

const dialogReducer = (state = initialState, { type, payload = {}}: DialogsActionType) => {
    switch (type) {
        case DialogsTypes.ADD_MESSAGE:
            const newMessage = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        case DialogsTypes.UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: payload.body,
            };
        default:
            return state;
    }
};

export default dialogReducer;
