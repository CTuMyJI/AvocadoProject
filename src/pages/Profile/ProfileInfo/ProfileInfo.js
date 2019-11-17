import React from 'react'
import Preloader from '../../../components/common/Preloader'
import userAvatar from '../../../assets/images/user.jpg'
import styles from './ProfileInfo.module.css'
import { reduxForm, Field } from 'redux-form'
import {required, maxLengthCreator} from '../../../utils/validators/validators'
import { Textarea } from '../../../components/common/FormsControls/FormsControls'
import ProfileStatusWithHooks from './ProfileSatusWithHooks'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    let addNewPosts = (values) => {
        props.addPost(values.newPostText)
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
            <div>
                <h3>Мої пости</h3>
            </div>
            <ProfileReduxForm onSubmit={addNewPosts} />
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

const ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='Введіть ваше повідомлення'
                    className="form-control mr-sm-2"
                    component={Textarea}
                    name={"newPostText"}
                    validate={[required, maxLength10]}
                ></Field>
            </div>
            <div>
                <button className="btn btn-success btn-lg">
                    Додати пост
                </button>
            </div>
        </form>
    )
}

const ProfileReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(ProfileForm)

export default ProfileInfo;