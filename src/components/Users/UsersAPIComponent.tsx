import React from 'react';
import {MapDispatchToPropsType} from "./UsersContainer";
import axios from "axios";
import {UsersPageType} from "../../redux/users-reducer";
import Users from "./Users";

export type UsersAPIPropsType = UsersPageType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersAPIPropsType, any> {

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

export default UsersAPIComponent;
