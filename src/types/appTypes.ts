export type AppActionType = {
    type: string,
    payload?: {
        isInitialized?: boolean,
    }
}

export type AppInitialStateType = {
    isInitialized: boolean,
}
