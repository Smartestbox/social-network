import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: ProfileType
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
} | null
type ContactsType = {
    facebook: string
    website: string | null
    vk: string
    twitter: string
    instagram: string
    youtube: string | null
    github: string
    mainLink: string | null
}
type PhotosType = {
    small: string
    large: string
}

const Profile: React.FC<ProfilePropsType> = ({profile}) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;