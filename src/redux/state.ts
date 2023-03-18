export type ProfilePage = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPage = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
export type PostType = {
    id: string
    message: string
    likesCount: string
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type StateType = {
    profilePage: ProfilePage
    dialogsPage: DialogsPage
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    newMessageText: string
}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type ActionType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType
    | SendMessageActionType

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store: StoreType = {
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
    subscribe (observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {
        switch (action.type) {
            case ADD_POST:
                const newPost: PostType = {
                    id: '5',
                    message: this._state.profilePage.newPostText,
                    likesCount: '0'
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber()
                return
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newPostText
                this._callSubscriber()
                return
            case UPDATE_NEW_MESSAGE_BODY:
                this._state.dialogsPage.newMessageText = action.newMessageText
                this._callSubscriber()
                return
            case SEND_MESSAGE:
                const newMessage = {
                    id: '7',
                    message: this._state.dialogsPage.newMessageText
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newMessageText = ''
                this._callSubscriber()
                return
        }
    },
}
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: newText})
export const updateNewMessageTextActionCreator = (newText: string): UpdateNewMessageTextActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newMessageText: newText})
export const sendMessageActionCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})

export default store;
