import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {
    getUsers,
    follow,
    unfollow,
    pageChange
} from '../../redux/Reducers/usersReducer'
import Users from './Users'
import Preloader from '../../components/common/Preloader'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.pageChange(pageNumber, this.props.pageSize);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login' />;

        return <>
            {this.props.isLoading ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,
    {getUsers, pageChange, follow, unfollow})(UsersContainer);