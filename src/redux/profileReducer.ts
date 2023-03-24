import {v1} from "uuid";

export type PostType = {
    id: string
    message: string
    likesCount: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
type AllActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>


const initialState: ProfilePageType = {
    posts: [
        {id: '1', message: 'My first post', likesCount: '23'},
        {id: '2', message: 'Post about my life', likesCount: '11'},
        {id: '3', message: 'Some famous quote', likesCount: '4'},
        {id: '4', message: 'How i spend my yesterday', likesCount: '15'},
        {id: '5', message: 'Nothing happen', likesCount: '0'},
        {id: '6', message: 'Boring post', likesCount: '2'},
    ],
    newPostText: ''
}

const profileReducer = (
    state: ProfilePageType = initialState,
    action: AllActionTypes
): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const postText = state.newPostText
            return {
                ...state,
                posts: [...state.posts, {
                    id: v1(),
                    message: postText,
                    likesCount: '0'
                }],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        default:
            return state
    }
}

export const addPostAC = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextAC = (newPostText: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newPostText}) as const

export default profileReducer