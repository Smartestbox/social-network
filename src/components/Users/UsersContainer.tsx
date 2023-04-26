import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, setCurrentPage, setIsFetching, setTotalUsers, setUsers, toggleIsFollowingInProgress, unfollow,
    UsersPageType,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsers: (totalUsers: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleIsFollowingInProgress: (isFetching: boolean, userId: number) => void
}

const mapStateToProps = (state: AppStateType): UsersPageType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingInProgress: state.usersPage.isFollowingInProgress
})


class UsersContainer extends React.Component<UsersPageType & MapDispatchToPropsType, any> {
    componentDidMount() {
        this.props.setIsFetching(true)
        if (this.props.users.length === 0) {
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.setIsFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setTotalUsers(Number(data.totalCount))
                })
        }
    }

    onCurrentPageClick = (currentPage: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(currentPage)
        usersAPI.getUsers(currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsers={this.props.totalUsers}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onCurrentPageClick={this.onCurrentPageClick}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                />
            </>

        );
    }
}

export default connect(
    mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsers,
        setIsFetching,
        toggleIsFollowingInProgress
    })(UsersContainer)