import React from 'react';
import ContentImg from "../../../images/content-img.jpg";
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={styles.container}>
            <img src={ContentImg} alt="content"/>
            <div className={styles.userDescription}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;