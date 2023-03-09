import React from 'react';
import styles from './Post.module.css'
import DefaultAvatar from "../../../../images/default-avatar.png";

type PostPropsType = {
    message: string
    likes: string
}

const Post: React.FC<PostPropsType> = ({
                                           message,
                                           likes,
                                       }) => {
    return (
        <div className={styles.item}>
            <img src={DefaultAvatar} alt="avatar"/>
            {message}
            <div>
                <span>like </span>
                <span>{likes}</span>
            </div>
        </div>
    );
};

export default Post;