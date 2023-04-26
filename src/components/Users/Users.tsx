import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/default-avatar.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUsers: number
    pageSize: number
    currentPage: number
    onCurrentPageClick: (page: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleIsFollowingInProgress: (isFetching: boolean, userId: number) => void
    isFollowingInProgress: number[]
}

const Users: React.FC<UsersPropsType> = ({
                                             totalUsers,
                                             pageSize,
                                             currentPage,
                                             onCurrentPageClick,
                                             users,
                                             follow,
                                             unfollow,
                                             toggleIsFollowingInProgress,
                                             isFollowingInProgress
                                         }) => {
    let pagesCount = Math.ceil(totalUsers / pageSize)
    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={styles.pages}>
                {
                    pages.map((page, index) =>
                        <span
                            key={index}
                            className={page === currentPage ? styles.selectedPage : ''}
                            onClick={() => onCurrentPageClick(page)}
                        >
                            {page}
                        </span>)
                }

            </div>
            <div className={styles.container}>
                {
                    users.map(user => {
                        const onUnfollowClick = () => {
                            toggleIsFollowingInProgress(true, user.id)
                            axios
                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'e44a0f09-9794-4667-8724-422b0a5e4dc7'
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        unfollow(user.id)
                                    }
                                    toggleIsFollowingInProgress(false, user.id)
                                })
                        }
                        const onFollowClick = () => {
                            toggleIsFollowingInProgress(true, user.id)
                            axios
                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'e44a0f09-9794-4667-8724-422b0a5e4dc7'
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        follow(user.id)
                                    }
                                    toggleIsFollowingInProgress(false, user.id)
                                })
                        }

                        return (
                            <div key={user.id}>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                             className={styles.photo}
                                             alt='user-avatar'
                                        />
                                    </NavLink>
                                </div>
                                <div>
                                    {user.followed
                                        ? <button
                                            disabled={isFollowingInProgress.some(id => id === user.id)}
                                            onClick={onUnfollowClick}
                                        >
                                            Unfollow
                                        </button>
                                        :
                                        <button
                                            disabled={isFollowingInProgress.some(id => id === user.id)}
                                            onClick={onFollowClick}
                                        >
                                            Follow
                                        </button>
                                    }
                                </div>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Users;