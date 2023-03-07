import React from 'react';
import styles from "../Profile.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message={'Hi, how are you?'} likes={'30'}/>
                <Post message={'It\'s my first post'} likes={'23'}/>
            </div>
        </div>
    );
};

export default MyPosts;