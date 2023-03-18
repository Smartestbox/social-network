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
    dispatch: (action: AllActionTypes) => void
}

export type AllActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendMessageAC>


const store: StoreType = {
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
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                const newPost: PostType = {
                    id: '5',
                    message: this._state.profilePage.newPostText,
                    likesCount: '0'
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber()
                return
            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newPostText
                this._callSubscriber()
                return
            case 'UPDATE-NEW-MESSAGE-TEXT':
                this._state.dialogsPage.newMessageText = action.newMessageText
                this._callSubscriber()
                return
            case 'SEND-MESSAGE':
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
export const addPostAC = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextAC = (newText: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newPostText: newText}) as const


export const updateNewMessageTextAC = (newText: string) =>
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: newText}) as const

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'}) as const

export default store;

