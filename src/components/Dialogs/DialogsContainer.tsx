import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/DialogsReducer";
import {StoreType} from "../../redux/store";

type DialogsContainerPropsType = {
    store: StoreType

}

const DialogsContainer: React.FC<DialogsContainerPropsType> = ({
                                                                   store,
                                                               }) => {
    const updateTextArea = (text: string) => store.dispatch(updateNewMessageTextAC(text))
    const sendMessage = () => store.dispatch(sendMessageAC())

        return (
            <Dialogs
                updateTextArea={updateTextArea}
                sendMessage={sendMessage}
                dialogsPage={store.getState().dialogsPage}
            />
        );
    };

    export default DialogsContainer;