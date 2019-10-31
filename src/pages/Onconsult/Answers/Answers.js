import React from 'react'
import s from './Answers.module.css'

const Answers = (props) => {
    return (
        <div className={s.yours}>
            <div className={s.message}>{props.answer}</div>
        </div>
    )
}

export default Answers