import profileReducer, {addPostAC, updateNewPostTextAC} from "./profileReducer";
import dialogsReducer, {sendMessageAC, updateNewMessageTextAC} from "./dialogsReducer";

type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
type PostType = {
    id: string
    message: string
    likesCount: string
}
type DialogType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: string
}
type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: AllActionTypes) => void
}

export type AllActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendMessageAC>


const store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'My first post', likesCount: '23'},
                {id: '2', message: 'Post about my life', likesCount: '11'},
                {id: '3', message: 'Some famous quote', likesCount: '4'},
                {id: '4', message: 'How i spend my yesterday', likesCount: '15'},
                {id: '5', message: 'Nothing happen', likesCount: '0'},
                {id: '6', message: 'Boring post', likesCount: '2'},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Dimych'},
                {id: '2', name: 'Andrey'},
                {id: '3', name: 'Sveta'},
                {id: '4', name: 'Sasha'},
                {id: '5', name: 'Viktor'},
                {id: '6', name: 'Valera'},
            ],
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'How is your day?'},
                {id: '3', message: 'Yo!'},
                {id: '4', message: 'Some text'},
                {id: '5', message: 'Bye'},
                {id: '6', message: 'I don\'t know what to say'},
            ],
            newMessageText: ''
        },
    },
    _callSubscriber () {
        console.log('state changed')
    },

    getState () {
      return this._state
    },
    subscribe (observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    },
}

export default store;

