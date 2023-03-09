import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: '1', message: 'My first post', likesCount: '23'},
        {id: '2', message: 'Post about my life', likesCount: '11'},
        {id: '3', message: 'Some famous quote', likesCount: '4'},
        {id: '4', message: 'How i spend my yesterday', likesCount: '15'},
        {id: '5', message: 'Nothing happen', likesCount: '0'},
        {id: '6', message: 'Boring post', likesCount: '2'},
    ]
    return (
        <div className={styles.container}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={styles.posts}>
                {
                    postsData.map(post => <Post message={post.message} likes={post.likesCount}/>)
                }
            </div>
        </div>
    );
};

export default MyPosts;