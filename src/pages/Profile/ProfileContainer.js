import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {updateNewPostText, addPost, getUserProfile} from '../../redux/Reducers/profileReducer'
import {withRouter} from 'react-router-dom'
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }
    
    render() {
        return (
            <Profile {...this.props} 
                profile={this.props.profile}
                profileList={this.props.profileList}
                posts={this.props.posts}
                newPostText={this.props.newPostText}
                addPost={this.props.addPost}
                updateNewPostText={this.props.updateNewPostText}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profileList: state.profilePage.profileList,
});

export default compose(
    connect(mapStateToProps, {updateNewPostText, addPost, getUserProfile}),
    withRouter
)(ProfileContainer);