import {AllActionTypes, DialogsPage} from "./store";

const dialogsReducer = (
    state: DialogsPage,
    action: AllActionTypes
): DialogsPage => {
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