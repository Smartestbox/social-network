import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, setCurrentPage, setIsFetching, setTotalUsers, setUsers, unfollow,
    UsersPageType,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

export type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsers: (totalUsers: number) => void
    setIsFetching: (isFetching: boolean) => void
}
// export type UsersType = UsersPageType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): UsersPageType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})


class UsersContainer extends React.Component<UsersPageType & MapDispatchToPropsType, any> {
    componentDidMount() {
        this.props.setIsFetching(true)
        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsers(Number(response.data.totalCount))
                })
        }
    }

    onCurrentPageClick = (currentPage: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
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
        setIsFetching
    })(UsersContainer)