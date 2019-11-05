import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {updateNewPostText, addPost, getUserProfile} from '../../redux/Reducers/profileReducer'
import {withRouter, Redirect} from 'react-router-dom'

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }
    
    render() {
        if (!this.props.isAuth) return <Redirect to='/login' />;

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
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {updateNewPostText, addPost, getUserProfile})(WithUrlDataContainerComponent);