import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePage} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePage
    newPostText: string
    dispatch: (action: ActionType) => void
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 profilePage,
                                                 newPostText,
                                                 dispatch,
                                             }) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={profilePage.posts}
                dispatch={dispatch}
                newPostText={newPostText}
            />
        </div>
    );
};

export default Profile;