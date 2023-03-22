import {AllActionTypes, PostType, ProfilePage} from "./store";

const initialState = {
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
    state: ProfilePage = initialState,
    action: AllActionTypes
): ProfilePage => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: '5',
                message: state.newPostText,
                likesCount: '0'
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}

export const addPostAC = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextAC = (newText: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newPostText: newText}) as const

export default profileReducer