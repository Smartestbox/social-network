import React from 'react';
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string
    name: string
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

export default DialogItem;