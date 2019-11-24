import React, { useState } from 'react'
import Preloader from '../../../components/common/Preloader'
import userAvatar from '../../../assets/images/user.jpg'
import styles from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileSatusWithHooks'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const showPhotoEditor = () => {
        const x = document.getElementById("changePhotoToggle");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    return (
        <div>
            <div>
                <img src={profile.photos.large || userAvatar} alt='...' className={styles.image} onClick={showPhotoEditor} />
                <div id="changePhotoToggle" style={{ display: 'none' }}>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                </div>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

            {editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div className={styles.profileData}>
                <h3>{profile.fullName}</h3>
                <div>
                    <b>Loking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
                </div>
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
                <div>
                    <b>About Me</b>: {profile.aboutMe}
                </div>
                <div>
                    <b>Contacts</b>:
                <div className={styles.description}>
                        {Object.keys(profile.contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;