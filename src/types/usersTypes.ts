export type UsersType = {
    name: string,
    id: number,
    photos: {
        small: string | null,
        large: string | null
    },
    status: string | null,
    followed: boolean,
}

export type UsersActionType = {
    type: string,
    payload?: {
        userId?: number,
        count?: number,
        page?: number,
        value?: boolean,
        users?: Array<UsersType>
    }
}


export type UsersInitialStateType = {
    users: Array<UsersType>,
    totalUsersCount: number,
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
}
