import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionType,
    DialogsPage,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
    updateNewPostTextActionCreator
} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPage
    dispatch: (action: ActionType) => void
    newMessageText: string
}

const Dialogs: React.FC<DialogsPropsType> = ({
                                                 state,
                                                 dispatch,
                                                 newMessageText,
                                             }) => {
    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
    }
    const onSendMessageClick = () => {
        if(newMessageText) {
            dispatch(sendMessageActionCreator())
        }
    }

    const dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messagesElements = state.messages.map(message => <Message message={message.message}/>)
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder={'Enter your message'} value={newMessageText} onChange={onTextareaChange}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;