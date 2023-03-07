import React from 'react';
import styles from "./Profile.module.css";
import ContentImg from "../../images/content-img.jpg";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.content}>
            <img src={ContentImg} alt="content"/>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
};

export default Profile;