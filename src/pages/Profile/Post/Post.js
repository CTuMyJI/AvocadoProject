import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {

    return (
        <div>
            <div>
                <img className={styles.avatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLOSI1mCpxzU6FVIs0FsQ9Oa0m50HroB7rVJk1FGh8aZYNszY&s' alt='...' />
            </div>
            <div>
                <ul>{props.post}</ul>
            </div>
            <div>
                <ul>
                    <img src='https://pngicon.ru/file/uploads/like.png' alt='...' className={styles.likeCount}/>
                    {props.likeCount} </ul>
            </div>
        </div>
    )
}

export default Post;