import React from 'react';
import styles from "./Profile.module.css";
import ContentImg from "../images/content-img.jpg";

const Profile = () => {
    return (
        <div className={styles.content}>
            <div><img src={ContentImg} alt="content"/></div>
            <div>ava + description</div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>post1</div>
                <div>post2</div>
                <div>post3</div>
            </div>
        </div>
    );
};

export default Profile;