import React from 'react';
import styles from './Users.module.css'
import {MapDispatchToPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/default-avatar.png'
import {setCurrentPageAC, UsersPageType} from "../../redux/users-reducer";

// const Users: React.FC<UsersType> = ({
//                                         users,
//                                         follow,
//                                         unfollow,
//                                         setUsers
//                                     }) => {
//
//             if (users.length === 0) {
//                 axios
//                     .get('https://social-network.samuraijs.com/api/1.0/users')
//                     .then(response => {
//                         setUsers(response.data.items)
//                     })
//             }
//
//
//
//         const mappedUsers = users.map(user => {
//             const onUnfollowClick = () => {
//                 unfollow(user.id)
//             }
//             const onFollowClick = () => {
//                 follow(user.id)
//             }
//
//             return (
//                 <div key={user.id}>
//                     <div>
//                         <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.photo}
//                              alt='user-avatar'/>
//                     </div>
//                     <div>
//                         {user.followed ? <button onClick={onUnfollowClick}>Unollow</button> :
//                             <button onClick={onFollowClick}>Follow</button>
//                         }
//                     </div>
//                     <div>{user.name}</div>
//                     <div>{user.status}</div>
//                     <div>{'user.location.country'}</div>
//                     <div>{'user.location.city'}</div>
//                 </div>
//             )
//         })
//
//         return (
//             <div className={styles.container}>
//                 {mappedUsers}
//             </div>
//         );
//     }
// ;

type UsersPropsType = UsersPageType & MapDispatchToPropsType

class Users extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsers(Number(response.data.totalCount))
                })
        }
    }

    onCurrentPageClick(currentPage: number) {
        this.props.setCurrentPage((currentPage))
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize)
        let pages = []
        for(let i = 1; i <= 10; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className={styles.pages}>
                    {
                        pages.map(page =>
                            <span
                                className={page === this.props.currentPage ? styles.selectedPage : ''}
                                onClick={() => { this.onCurrentPageClick(page) }}
                            >
                                {page}
                            </span>)
                    }

                    {/*{this.props.users.length}*/}
                </div>
                <div className={styles.container}>
                    {
                        this.props.users.map(user => {
                            const onUnfollowClick = () => {
                                this.props.unfollow(user.id)
                            }
                            const onFollowClick = () => {
                                this.props.follow(user.id)
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
    }
}

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