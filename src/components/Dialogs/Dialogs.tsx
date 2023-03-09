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
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem id={'1'} name={'Dimych'}/>
                <DialogItem id={'2'} name={'Andrey'}/>
                <DialogItem id={'3'} name={'Sveta'}/>
                <DialogItem id={'4'} name={'Sasha'}/>
                <DialogItem id={'5'} name={'Viktor'}/>
                <DialogItem id={'6'} name={'Valera'}/>
            </div>
            <div className={styles.messages}>
                <Message message={'Hi'} />
                <Message message={'How is your day?'} />
                <Message message={'YO!'} />
                <Message message={'Some text'} />
                <Message message={'Bye'} />
                <Message message={'I don\'t know what to say'} />
            </div>
        </div>
    )
};

export default Dialogs;