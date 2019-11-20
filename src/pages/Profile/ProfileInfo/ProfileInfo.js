import React from 'react'
import Preloader from '../../../components/common/Preloader'
import userAvatar from '../../../assets/images/user.jpg'
import styles from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileSatusWithHooks'

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src={profile.photos.large || userAvatar} alt='...' className={styles.image} />
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            <ul>Про мене: <h6>{profile.aboutMe}</h6></ul>
            <ul>Сторінка Facebook: <h6>{profile.contacts.facebook}</h6></ul>
            <ul>Github: <h6>{profile.contacts.github}</h6></ul>
        </div>
    )
}

export default ProfileInfo;