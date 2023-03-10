import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
}

const MyPosts: React.FC<MyPostsPropsType> = ({
                                                 posts,
                                             }) => {

    return (
        <div className={styles.container}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {
                    posts.map(post => <Post message={post.message} likes={post.likesCount}/>)
                }
            </div>
        </div>
    );
};

export default MyPosts;