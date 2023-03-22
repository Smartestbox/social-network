import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";

type DialogsContainerPropsType = {}

const DialogsContainer: React.FC<DialogsContainerPropsType> = ({}) => {
    // const updateTextArea = (text: string) => store.dispatch(updateNewMessageTextAC(text))
    // const sendMessage = () => store.dispatch(sendMessageAC())

    return <StoreContext.Consumer>
        {
            store => {
                if(store) {
                    const updateTextArea = (text: string) => store.dispatch(updateNewMessageTextAC(text))
                    const sendMessage = () => store.dispatch(sendMessageAC())
                    return <Dialogs
                        updateTextArea={updateTextArea}
                        sendMessage={sendMessage}
                        dialogsPage={store.getState().dialogsPage}
                    />
                }

            }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;