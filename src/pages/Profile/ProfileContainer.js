import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile, updateNewPostText, addPost} from '../../redux/Reducers/profileReducer'

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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
    profileList: state.profilePage.profileList
});

export default connect(mapStateToProps, {setUserProfile, updateNewPostText, addPost})(ProfileContainer);