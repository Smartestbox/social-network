import {DialogsPageType} from "./store";
import dialogsReducer, {sendMessageAC, updateNewMessageTextAC} from "./dialogsReducer";

test('newMessageText should be updated', () => {
    const startState: DialogsPageType = {
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

    const action = updateNewMessageTextAC('text test for message text')

    const endState = dialogsReducer(startState, action)

    expect(endState.newMessageText).toBe('text test for message text')
})

test('send new message', () => {
    const startState: DialogsPageType = {
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
        newMessageText: 'new message text for test'
    }

    const action = sendMessageAC()

    const endState = dialogsReducer(startState, action)

    expect(endState.messages.length).toBe(7)
    expect(endState.messages[endState.messages.length - 1].message).toBe('new message text for test')
    expect(endState.newMessageText).toBe('')
})
