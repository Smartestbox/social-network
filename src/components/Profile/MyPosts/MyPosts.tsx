import React, {ChangeEvent} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";


const MyPosts: React.FC<MyPostsType> = ({
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