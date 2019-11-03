import React from 'react'
import { connect } from 'react-redux'
import {
    setUsers,
    unfollow,
    follow,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsLoading
} from '../../redux/Reducers/usersReducer'
import Users from './Users'
import Preloader from '../../components/common/Preloader'
import { usersAPI } from '../../api/api'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoading(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsLoading(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsLoading(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsLoading(false);
            this.props.setUsers(data.items);
        });
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
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
        isLoading: state.usersPage.isLoading
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsLoading
    })(UsersContainer);