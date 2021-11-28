import { ADD_MESSAGE, UPDATE_NEW_MESSAGE_BODY } from '../constants';

export const addMessage = () => ({ type: ADD_MESSAGE });
export const updateNewMessageBody = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, payload: { body } });
