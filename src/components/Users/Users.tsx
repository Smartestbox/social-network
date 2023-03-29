import React from 'react';
import styles from './Users.module.css'
import {UsersType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/default-avatar.png'

const Users: React.FC<UsersType> = ({
                                        users,
                                        follow,
                                        unfollow,
                                        setUsers
                                    }) => {
        const getUsers = () => {
            if (users.length === 0) {
                axios
                    .get('https://social-network.samuraijs.com/api/1.0/users')
                    .then(response => {
                        setUsers(response.data.items)
                    })
            }
        }


        const mappedUsers = users.map(user => {
            const onUnfollowClick = () => {
                unfollow(user.id)
            }
            const onFollowClick = () => {
                follow(user.id)
            }

            return (<div key={user.id}>
                <div>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.photo} alt='user-avatar'/>
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
            </div>)
        })

        return (
            <div className={styles.container}>
                <button onClick={getUsers}>Get Users</button>
                {mappedUsers}
            </div>
        );
    }
;

export default Users;

// setUsers([
//     {
//         id: v1(),
//         photoUrl: 'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg',
//         followed: false,
//         fullName: 'Igor',
//         status: 'I am a boss',
//         location:
//             {country: 'Russia', city: 'Moscow'}
//     },
//     {
//         id: v1(),
//         photoUrl: 'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg',
//         followed: true,
//         fullName: 'Alexander',
//         status: 'I am a friend',
//         location:
//             {country: 'Russia', city: 'Perm'}
//     },
//     {
//         id: v1(),
//         photoUrl: 'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg',
//         followed: false,
//         fullName: 'Ivan',
//         status: 'I am friend',
//         location:
//             {country: 'Russia', city: 'Perm'}
//     },
// ])