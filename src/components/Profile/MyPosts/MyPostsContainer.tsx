import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
        posts: PostType[]
        newPostText: string
}
type MapDispatchToPropsType = {
        updateNewPostText: (text: string) => void
        addPost: () => void
}

export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
        updateNewPostText: (text: string) => dispatch(updateNewPostTextAC(text)),
        addPost: () => dispatch(addPostAC())
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;