import { DialogsTypes } from '../../constants';
import {DialogsActionType} from "../../types/dialogsTypes";

export const addMessage = (): DialogsActionType  => ({ type: DialogsTypes.ADD_MESSAGE });

export const updateNewMessageBody = (body: string): DialogsActionType => ({ type: DialogsTypes.UPDATE_NEW_MESSAGE_BODY, payload: { body } });
