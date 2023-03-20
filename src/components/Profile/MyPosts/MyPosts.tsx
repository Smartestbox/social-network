import React, {ChangeEvent, useRef} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AllActionTypes, PostType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/ProfileReducer";

type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: PostType[]
    newPostText: string
}


const MyPosts: React.FC<MyPostsPropsType> = ({
                                                 updateNewPostText,
                                                 addPost,
                                                 posts,
                                                 newPostText,
                                             }) => {
    const postsElements = posts.map(post => <Post message={post.message} likes={post.likesCount}/>)


    const onAddPostClick = () => {
        // if (newPostText) {
        //     dispatch(addPostAC())
        // }
        addPost()
    }
    const onUpdatePostTextClick = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // dispatch(updateNewPostTextAC(e.currentTarget.value))
        updateNewPostText(e.currentTarget.value)
    }


    return (
        <div className={styles.container}>
            <h3>My posts</h3>
            <div>
                <div><textarea value={newPostText} onChange={onUpdatePostTextClick}/></div>
                <div>
                    <button onClick={onAddPostClick}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;