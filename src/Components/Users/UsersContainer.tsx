import React from 'react'
import { useSelector } from 'react-redux'
import { getIsFetching } from '../../redux/users-selectors'
import { Users } from './Users'
import styles from "./Users.module.scss";
import Preloader from "../common/Preloader/Preloader";

type UsersPagePropsType = {
    pageTitle: string
}

export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)
    return (<div className={styles.usersContainer}>
        <>
            <div className={styles.users}>
                {isFetching
                    ? <Preloader />
                    : null}
                <Users />
            </div>

        </>
    </div>

    )


}