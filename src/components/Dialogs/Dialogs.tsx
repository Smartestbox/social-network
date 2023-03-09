import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string
    name: string
}

type MessagePropsType = {
    message: string
}

const DialogItem: React.FC<DialogItemPropsType> = ({
                                                       id,
                                                       name,
                                                   }) => {
    const path = `/dialogs/${id}`

    return (
        <div className={`${styles.dialogItem} ${styles.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessagePropsType> = ({
                                                 message,
                                             }) => {
    return (
        <div className={styles.message}>
            {message}
        </div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Viktor'},
        {id: '6', name: 'Valera'},
    ]

    let messagesData = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your day?'},
        {id: '3', message: 'Yo!'},
        {id: '4', message: 'Some text'},
        {id: '5', message: 'Bye'},
        {id: '6', message: 'I don\'t know what to say'},
    ]

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {
                    dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
                }
            </div>
            <div className={styles.messages}>
                {
                    messagesData.map(message => <Message message={message.message} />)
                }
            </div>
        </div>
    )
};

export default Dialogs;