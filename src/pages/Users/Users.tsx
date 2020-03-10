import React from 'react'
import Paginator from '../../components/common/Paginator/Paginator'
import User from './User'
import { UserType } from '../../types/types'

type PropsType = {
    currentPage: number 
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (id: number) => void
    follow: (id: number) => void
}

let Users: React.FC<PropsType> = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
            pageSize={pageSize}
        />
        <div>
            {
                users.map(u => <User key={u.id} user={u}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}

                />)
            }
        </div>
    </div>
}

export default Users;