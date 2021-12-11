import {MessageType} from "./MessageType";

export type DialogsActionType = {
    type: string,
    payload?: {
        body?: string,
    }
}

export type DialogsInitialStateType = {
    messages: Array<MessageType>,
    newMessageBody: string,
}
