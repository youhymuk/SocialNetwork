import {MessageType} from "./MessageType";

export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string,
    },
    photos: {
        small: string | null,
        large: string | null,
    }
}

export type ProfileActionType = {
    type: string,
    payload?: {
        profile?: ProfileType,
        status?: string,
        body?: string,
    }
}

export type ProfileInitialStateType = {
    profile: ProfileType | null,
    status: string,
    newPostBody: string,
    posts: Array<MessageType>
}
