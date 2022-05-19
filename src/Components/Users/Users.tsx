import React, { FC, useEffect } from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User/User'
import { UsersSearchForm } from './UserSearchForm/UsersSearchForm'
import { FilterType, follow, requestUsers, unfollow } from '../../redux/users-reducer'
import { useDispatch, useSelector } from 'react-redux'
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from '../../redux/users-selectors'
import { useHistory } from 'react-router-dom'
import styles from "./Users.module.scss";
import * as queryString from 'querystring'

type PropsType = {}

type QueryParamsType = { term?: string; page?: string; friend?: string }
export const Users: FC<PropsType> = (props) => {
    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)

        if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term }

        switch (parsed.friend) {
            case "null":
                actualFilter = { ...actualFilter, friend: null }
                break;
            case "true":
                actualFilter = { ...actualFilter, friend: true }
                break;
            case "false":
                actualFilter = { ...actualFilter, friend: false }
                break;
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}
        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/developers',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])


    const parsed: {
        term?: string
        friend?: 'true' | 'false' | 'null'
        page?: string
    } = queryString.parse(history.location.search)
    const actualFilter = { ...filter }
    let actualPage = currentPage

    if (parsed.term) {
        actualFilter.term = parsed.term
    }
    if (parsed.friend) {
        actualFilter.friend = parsed.friend === 'true' ? true : parsed.friend === 'false' ? false : null
    }
    if (parsed.page && parsed.page !== '1') {
        actualPage = +parsed.page
    }


    const onPageChanged = (pageNumber: number) => {
        history.push({
            pathname: '/developers',
            search: `?term=${filter.term}&friend=${filter.friend}&page=${pageNumber}`
        })
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        history.push({
            pathname: '/developers',
            search: `?term=${filter.term}&friend=${filter.friend}&page=${actualPage}`
        })
        dispatch(requestUsers(1, pageSize, filter))
    }

    const FollowCallback = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowCallback = (userId: number) => {
        dispatch(unfollow(userId))
    }



    return <div className={styles.usersPage}>

        <UsersSearchForm onFilterChanged={onFilterChanged} initialValue={actualFilter} />

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                users.map(u => <User user={u}
                    followingInProgress={followingInProgress}
                    key={u.id}
                    unfollow={unfollowCallback}
                    follow={FollowCallback}
                />
                )
            }
        </div>
    </div>
}