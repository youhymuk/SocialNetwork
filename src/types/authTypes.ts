export type AuthActionType = {
    type: string,
    payload?: {
        email?: string,
        id?: number,
        login?: string,
        isAuthorized?: boolean,
        error?: string,
        captchaUrl?: string,
    }
}


export type AuthinitialStateType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuthorized: boolean,
    error: string | null,
    captchaUrl: string | null,
}
