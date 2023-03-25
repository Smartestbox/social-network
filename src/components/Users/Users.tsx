import React from 'react';
import styles from './Users.module.css'
import {UsersType} from "./UsersContainer";

const Users: React.FC<UsersType> = ({
                                        users,
                                        follow,
                                        unfollow,
                                        setUsers
                                    }) => {

    const mappedUsers = users.map(user => {
        const onUnfollowClick = () => {
            unfollow(user.id)
        }
        const onFollowClick = () => {
            follow(user.id)
        }
        return (<div key={user.id}>
            <div>
                <img src={user.photoUrl} className={styles.photo} alt='user-avatar'/>
            </div>
            <div>
                {user.followed ? <button onClick={onUnfollowClick}>Unollow</button> :
                    <button onClick={onFollowClick}>Follow</button>
                }
            </div>
            <div>{user.fullName}</div>
            <div>{user.status}</div>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
        </div>)
    })

    return (
        <div className={styles.container}>
            {mappedUsers}
        </div>
    );
};

export default Users;