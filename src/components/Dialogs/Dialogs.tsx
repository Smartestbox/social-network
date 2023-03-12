import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPage} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPage
}

const Dialogs: React.FC<DialogsPropsType> = ({
                                                 state,
                                             }) => {
    const dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messagesElements = state.messages.map(message => <Message message={message.message}/>)
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;