import React from 'react'
import Preloader from '../../../components/common/Preloader'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div>
            <div>
                <img src={props.profile.photos.large} alt='...' />
            </div>
            <li>{props.profile.aboutMe}, {props.profile.contacts.facebook}</li>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
    )
}

export default ProfileInfo;