import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePage} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePage
    addPost: (postMessage: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 state,
                                                 addPost,
                                             }) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts} addPost={addPost}/>
        </div>
    );
};

export default Profile;