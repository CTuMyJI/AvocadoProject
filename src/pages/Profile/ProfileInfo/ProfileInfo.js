import React from 'react'
import Preloader from '../../../components/common/Preloader'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    let addPosts = () => {
        props.addPost();
    }

    let onPostsChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let newPostElement = React.createRef();

    let newPostTextBody = props.newPostText

    return (
        <div>
            <div>
                <img src={props.profile.photos.large} alt='...' />
            </div>
            <ul>
                <h6>
                    Статус: {props.profile.aboutMe}
                </h6>
            </ul>
            <ul>Сторінка Facebook: <h6>{props.profile.contacts.facebook}</h6></ul>
            <ul>Github: <h6>{props.profile.contacts.github}</h6></ul>
            <div>
                <h3>Мої пости</h3>
            </div>
            <div>
                <textarea
                    placeholder='Введіть ваше повідомлення'
                    onChange={onPostsChange}
                    ref={newPostElement}
                    value={newPostTextBody}
                    className="form-control mr-sm-2"
                ></textarea>
            </div>
            <div>
                <button type="button" className="btn btn-success btn-lg" onClick={addPosts}>Додати пост</button>
            </div>
        </div>
    )
}

export default ProfileInfo;