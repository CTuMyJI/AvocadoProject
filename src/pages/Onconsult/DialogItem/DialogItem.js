import React from 'react'
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {

    let path = "/onconsult/" + props.id;

    return (
        <div className={s.dialogsItems + ' ' + s.active}> 
            <div className={s.active}>ONLINE</div>
            <img className={s.dialogImage} src={props.avatar} alt='*' />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem