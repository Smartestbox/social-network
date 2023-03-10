import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../App";

type ProfilePropsType = {
    posts: PostType[]
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 posts,
                                             }) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};

export default Profile;