import React, {useRef} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({
                                                 posts,
                                                 addPost,
                                             }) => {
    const postsElements = posts.map(post => <Post message={post.message} likes={post.likesCount}/>)

    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const onAddPostClick = () => {
        if(textAreaRef.current) {
            addPost(textAreaRef.current.value)
            textAreaRef.current.value = '';
        }
    }

    return (
        <div className={styles.container}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={textAreaRef}></textarea></div>
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