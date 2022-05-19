import React from 'react'
import styles from './User.module.scss'
import userPhoto from '../../../assets/images/no_avatar.png'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../../types/types'

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}



const User: React.FC<PropsType> = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={styles.user}>
            <div className={styles.userInfo}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                </NavLink>
            </div>
            <>
                {user.followed
                    ? <button className={styles.unFollowBtn} disabled={followingInProgress
                        .some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id)
                        }}>
                        Unfollow</button>
                    : <button className={styles.followBtn} disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id)
                        }}>
                        Follow</button>}

            </>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
        </div>)
}

export default User