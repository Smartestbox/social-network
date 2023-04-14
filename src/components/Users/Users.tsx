import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/default-avatar.png";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    totalUsers: number
    pageSize: number
    currentPage: number
    onCurrentPageClick: (page: number) => void
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

const Users: React.FC<UsersPropsType> = ({
                               totalUsers,
                               pageSize,
                               currentPage,
                               onCurrentPageClick,
                               users,
                               follow,
                               unfollow
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

                {/*{this.props.users.length}*/}
            </div>
            <div className={styles.container}>
                {
                    users.map(user => {
                        const onUnfollowClick = () => {
                            unfollow(user.id)
                        }
                        const onFollowClick = () => {
                            follow(user.id)
                        }

                        return (
                            <div key={user.id}>
                                <div>
                                    <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                         className={styles.photo}
                                         alt='user-avatar'/>
                                </div>
                                <div>
                                    {user.followed ? <button onClick={onUnfollowClick}>Unollow</button> :
                                        <button onClick={onFollowClick}>Follow</button>
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