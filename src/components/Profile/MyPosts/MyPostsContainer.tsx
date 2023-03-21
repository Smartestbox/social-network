import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/ProfileReducer";
import StoreContext from "../../../StoreContext";

type MyPostsContainerPropsType = {}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = () => {
    // let state = store.getState()
    // const addPost = () => {
    //     store.dispatch(addPostAC())
    // }
    // const onPostChange = (text: string) => {
    //     store.dispatch(updateNewPostTextAC(text))
    // }

    return (
        <StoreContext.Consumer>
            {
                store => {
                    if(store) {
                        let state = store.getState()
                        const addPost = () => {
                            store.dispatch(addPostAC())
                        }
                        const onPostChange = (text: string) => {
                            store.dispatch(updateNewPostTextAC(text))
                        }
                        return <MyPosts updateNewPostText={onPostChange}
                                        addPost={addPost}
                                        posts={state.profilePage.posts}
                                        newPostText={state.profilePage.newPostText}
                        />
                    }
                }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;