import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPage} from "../../redux/store";

type DialogsPropsType = {
    updateTextArea: (text: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPage
}

const Dialogs: React.FC<DialogsPropsType> = ({
                                                 updateTextArea,
                                                 sendMessage,
                                                 dialogsPage,
                                             }) => {
    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // dispatch(updateNewMessageTextAC(e.currentTarget.value))
        updateTextArea(e.currentTarget.value)
    }
    const onSendMessageClick = () => {
        // if (newMessageText) {
        //     dispatch(sendMessageAC())
        // }
        sendMessage()
    }

    const dialogsElements = dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messagesElements = dialogsPage.messages.map(message => <Message message={message.message}/>)
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder={'Enter your message'} value={dialogsPage.newMessageText}
                                   onChange={onTextareaChange}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;