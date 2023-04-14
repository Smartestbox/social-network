import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
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

export type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsers: (totalUsers: number) => void
}
export type UsersType = UsersPageType & MapDispatchToPropsType

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer