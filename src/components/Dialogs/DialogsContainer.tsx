import React from 'react';
import Dialogs from "./Dialogs";
import {DialogsPageType, sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    updateTextArea: (text: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({dialogsPage: state.dialogsPage})
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
        updateTextArea: (text: string) => dispatch(updateNewMessageTextAC(text)),
        sendMessage: () => dispatch(sendMessageAC())
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer