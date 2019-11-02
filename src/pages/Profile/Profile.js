import React from 'react'
import Post from './Post/Post'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <Post />
        </div>
    )
}

export default Profile;