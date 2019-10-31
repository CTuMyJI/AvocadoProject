import React from 'react'
import s from './Users.module.css'
import userAvatar from '../../assets/images/user.jpg'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={() => { props.onPageChanged(p) }}
                >{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.image} src={u.photos.small != null ? u.photos.small : userAvatar} alt='...' />
                    </div>
                    <div>
                        {u.followed
                            ? <button className="btn btn-danger btn-lg"
                                onClick={() => { props.unfollow(u.id) }}>Відписатися</button>
                            : <button className="btn btn-success btn-lg"
                                onClick={() => { props.follow(u.id) }}>Підписатися</button>}
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