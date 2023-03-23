
type DialogType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
type AllActionTypes = ReturnType<typeof updateNewMessageTextAC> | ReturnType<typeof sendMessageAC>

const initialState: DialogsPageType = {
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: AllActionTypes): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText
            return state
        case 'SEND-MESSAGE':
            const newMessage = {
                id: '7',
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        default:
            return state
    }
}

export const updateNewMessageTextAC = (newText: string) =>
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: newText}) as const

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'}) as const

export default dialogsReducer