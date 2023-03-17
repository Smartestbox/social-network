export type ProfilePage = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPage = {
    dialogs: DialogType[]
    messages: MessageType[]
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
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
}

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
            ]
        },
    },
    _callSubscriber () {
        console.log('state changed')
    },
    getState () {
      return this._state
    },
    addPost () {
        const newPost: PostType = {
            id: '5',
            message: this._state.profilePage.newPostText,
            likesCount: '0'
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe (observer: () => void) {
        this._callSubscriber = observer
    },
}

export default store;