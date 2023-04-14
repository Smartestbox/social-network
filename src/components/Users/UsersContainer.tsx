import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersAC,
    setUsersAC,
    unfollowAC,
    UsersPageType,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component<UsersPageType & MapDispatchToPropsType, any> {
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
    onCurrentPageClick = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <Users
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onCurrentPageClick={this.onCurrentPageClick}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        );
    }
}

export type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsers: (totalUsers: number) => void
}
// export type UsersType = UsersPageType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): UsersPageType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    follow: (userId: string) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId: string) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users: UserType[]) => {
        dispatch(setUsersAC(users))
    },
    setCurrentPage: (page: number) => {
        dispatch(setCurrentPageAC(page))
    },
    setTotalUsers: (totalUsers: number) => {
        dispatch(setTotalUsersAC(totalUsers))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)