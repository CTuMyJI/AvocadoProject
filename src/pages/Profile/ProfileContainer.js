import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {updateNewPostText, addPost, getUserProfile, getStatus, updateStatus} from '../../redux/Reducers/profileReducer'
import {withRouter} from 'react-router-dom'
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5049;
        }
        this.props.getUserProfile(userId);
        
        this.props.getStatus(userId);
        }
    
    render() {
        return (
            <Profile {...this.props} 
                profile={this.props.profile}
                profileList={this.props.profileList}
                posts={this.props.posts}
                newPostText={this.props.newPostText}
                addPost={this.props.addPost}
                updateNewPostText={this.props.updateNewPostText}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profileList: state.profilePage.profileList,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {updateNewPostText, addPost, getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);