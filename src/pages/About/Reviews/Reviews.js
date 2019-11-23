import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Reviews.module.css'

const Reviews = (props) => {
    return (
        <div className={s.reviews}>
            <h5 className={s.reviewAuthor}>
                sent by <NavLink to='/'>{props.name}</NavLink>
            </h5>
            <li className={s.review}>{props.review}</li>
        </div>
    )
}

export default Reviews