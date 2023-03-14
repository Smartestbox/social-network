import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePage} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePage
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 profilePage,
                                                 addPost,
                                                 updateNewPostText,
                                             }) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </div>
    );
};

export default Profile;