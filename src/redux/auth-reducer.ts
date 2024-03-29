import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

type ActionsType = ReturnType<typeof setAuthUserData>

export type InitStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) =>
    ({type: SET_USER_DATA, data: {userId, email, login}} as const)
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}