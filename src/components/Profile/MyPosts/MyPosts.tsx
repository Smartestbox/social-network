import React, {ChangeEvent, useRef} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({
                                                 posts,
                                                 newPostText,
                                                 addPost,
                                                 updateNewPostText,
                                             }) => {
    const postsElements = posts.map(post => <Post message={post.message} likes={post.likesCount}/>)


    const onAddPostClick = () => {
            addPost()
    }
    const onUpdatePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
            updateNewPostText(e.currentTarget.value)
        }


    return (
        <div className={styles.container}>
            <h3>My posts</h3>
            <div>
                <div><textarea value={newPostText} onChange={onUpdatePostText}/></div>
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