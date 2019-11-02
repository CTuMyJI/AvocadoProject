import React from 'react'
import Post from './Post/Post'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    let postsElements = props.posts.map(p => <Post post={p.post} id={p.id} likeCount={p.likeCount} key={p.id} />)

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                newPostText={props.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
            {postsElements}
        </div>
    )
}

export default Profile;