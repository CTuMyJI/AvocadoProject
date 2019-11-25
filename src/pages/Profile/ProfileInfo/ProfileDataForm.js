import React from 'react'
import { reduxForm } from 'redux-form'
import { createField, Input, Textarea } from '../../../components/common/FormsControls/FormsControls'
import styles from './ProfileInfo.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button className="btn btn-danger btn-sm">
                    SAVE
                </button>
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <div>
                    <b>Full name</b>: {createField("Full name", Input, "fullName", [])}
                </div>
                <div>
                    <b>Loking for a job</b>: {createField("", Input, "lookingForAJob", [], { type: "checkbox" })}
                </div>
                <div>
                    <b>My professional skills</b>: {createField("My professional skills", Textarea, "lookingForAJobDescription", [])}
                </div>
                <div>
                    <b>About Me</b>: {createField("About Me", Textarea, "aboutMe", [])}
                </div>
                <div>
                    <b>Contacts</b>:
                <div className={styles.description}>
                        {Object.keys(profile.contacts).map(key => {
                            return <div key={key} className={styles.description}>
                                <b>{key}</b>: {createField(key, Input, "contacts." + key, [])}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataFormReduxForm;