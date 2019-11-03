import React from 'react'
import s from './Users.module.css'
import userAvatar from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'

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
                            ? <button className="btn btn-danger btn-lg" onClick={() => {
                                
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {"API-KEY": "4817f0c6-4f07-4668-912f-eb49d2bd675b"}
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                });
                            }}>Відписатися</button>
                                
                            : <button className="btn btn-success btn-lg" onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {"API-KEY": "4817f0c6-4f07-4668-912f-eb49d2bd675b"}
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
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