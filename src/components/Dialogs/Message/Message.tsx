import React from 'react';
import styles from "../Dialogs.module.css";

type MessagePropsType = {
    message: string
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

export default Message;