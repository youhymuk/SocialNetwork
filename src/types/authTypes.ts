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
