
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type PhotosType = {
    small: string | null
    large: string | null
}
export type LocationType = {
    country: string
    city: string
}
export type UserType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
export type UsersPageType = {
    users: UserType[]
}

export type AllActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

const initialState: UsersPageType = {
    users: []
}

const usersReducer = (state = initialState, action: AllActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : {...user})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : {...user})
            }
        }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: string) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)

export default usersReducer