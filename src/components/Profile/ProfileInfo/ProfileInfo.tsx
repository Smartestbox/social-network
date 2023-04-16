import React from 'react';
import ContentImg from "../../../assets/images/content-img.jpg";
import styles from './ProfileInfo.module.css'
import {ProfileType} from "../Profile";
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile}) => {
    if(!profile) {
        return <Preloader />
    }

    return (
        <div className={styles.container}>
            <img src={ContentImg} alt="content"/>
            <img src={profile.photos.large} />
            <div className={styles.userDescription}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;