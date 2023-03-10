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


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {
                    state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
                }
            </div>
            <div className={styles.messages}>
                {
                    state.messages.map(message => <Message message={message.message}/>)
                }
            </div>
        </div>
    )
};

export default Dialogs;