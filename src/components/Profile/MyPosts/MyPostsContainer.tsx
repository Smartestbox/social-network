import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/ProfileReducer";
import {StoreType} from "../../../redux/store";

type MyPostsContainerPropsType = {
    store: StoreType
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({
                                                                   store,
                                                               }) => {
    let state = store.getState()
    const addPost = () => {
        store.dispatch(addPostAC())
    }
    const onPostChange = (text: string) => {
        store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;