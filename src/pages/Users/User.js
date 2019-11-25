import React from 'react'
import s from './Users.module.css'
import userAvatar from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'

let User = ({ user, followingInProgress, unfollow, follow }) => {
    debugger
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.image} src={user.photos.small != null ? user.photos.small : userAvatar} alt='...' />
                    </NavLink>
                </div>
                <span>
                    <span>
                        <div>name:<b> {user.name}</b></div>
                        <div>{user.status}</div>
                    </span>
                </span>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} className="btn btn-danger btn-lg"
                            onClick={() => { unfollow(user.id) }}
                        >Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)} className="btn btn-success btn-lg"
                            onClick={() => { follow(user.id) }}
                        >Follow</button>}
                </div>
            </span>
        </div>
    )
}

export default User;