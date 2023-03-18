import {AllActionTypes, PostType, ProfilePage} from "./store";

const profileReducer = (
    state: ProfilePage,
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