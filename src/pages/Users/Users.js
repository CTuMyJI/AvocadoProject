import React from 'react'
import s from './Users.module.css'
import userAvatar from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={s.page}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={() => { props.onPageChanged(p) }}
                >{p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.image} src={u.photos.small != null ? u.photos.small : userAvatar} alt='...' />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} className="btn btn-danger btn-lg" onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                usersAPI.follow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });
                            }}>Відписатися</button>
                                
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} className="btn btn-success btn-lg" onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                usersAPI.unfollow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });
                            }}>Підписатися</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>

            </div>)
        }
    </div>
}

export default Users;