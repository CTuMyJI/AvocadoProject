import React from 'react'
import styles from './Post.module.css'
import userAvatar from '../../../assets/images/user.jpg'
import Preloader from '../../../components/common/Preloader'

const Post = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <img className={styles.avatar} src={props.profile.photos.large || userAvatar} alt='...' />
            </div>
            <div>
                <ul>{props.post}</ul>
            </div>
            <div>
                <ul>
                    Like: {props.likeCount}
                </ul>
            </div>
        </div>
    )
}

export default Post;