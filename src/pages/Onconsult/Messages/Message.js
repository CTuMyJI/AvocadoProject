import React from 'react'
import cx from 'classnames'
import s from './Message.module.css'

const Message = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={cx(s.message, props.currentUser ? s.alignRight : s.alignLeft)}>
                <div className={cx(props.currentUser ? s.mine : s.yours)}>
                {props.message}
            </div>
            </div>
        </div>
    )
}

export default Message