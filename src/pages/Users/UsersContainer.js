import React from 'react'
import { connect } from 'react-redux'
import {
    requestUsers,
    pageChange,
    follow,
    unfollow,
} from '../../redux/Reducers/usersReducer'
import Users from './Users'
import Preloader from '../../components/common/Preloader'
//import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsLoading, getFollowingInProgress} from '../../redux/Selectors/usersSelectors'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.page, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.props.pageChange}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps,{requestUsers, pageChange, follow, unfollow}),
    //withAuthRedirect
)(UsersContainer);