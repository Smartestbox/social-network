import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type LocationType = {
    country: string
    city: string
}
export type UserType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
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
    users: [
        {
            id: v1(),
            photoUrl: 'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg',
            followed: false,
            fullName: 'Igor',
            status: 'I am a boss',
            location:
                {country: 'Russia', city: 'Moscow'}
        },
        {
            id: v1(),
            photoUrl: 'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg',
            followed: true,
            fullName: 'Alexander',
            status: 'I am a friend',
            location:
                {country: 'Russia', city: 'Perm'}
        },
        {
            id: v1(),
            photoUrl: 'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg',
            followed: false,
            fullName: 'Ivan',
            status: 'I am friend',
            location:
                {country: 'Russia', city: 'Perm'}
        },
    ]
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