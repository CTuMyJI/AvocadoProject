import React from 'react'
import Preloader from '../../../components/common/Preloader'
import userAvatar from '../../../assets/images/user.jpg'
import styles from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileSatusWithHooks'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large || userAvatar} alt='...' className={styles.image} />
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            <ul>Про мене: <h6>{props.profile.aboutMe}</h6></ul>
            <ul>Сторінка Facebook: <h6>{props.profile.contacts.facebook}</h6></ul>
            <ul>Github: <h6>{props.profile.contacts.github}</h6></ul>
        </div>
    )
}

export default ProfileInfo;