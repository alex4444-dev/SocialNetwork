import React from 'react';
import s from './Post.module.scss';


type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.itemBlock}>
            <div className={s.item}>
                <div className={s.userInfoContainer}>
                    <img src='https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg' />
                </div>
                <div className={s.messageContainer}>
                    {props.message}
                </div>
                <div className={s.LikesContainer}>
                    <div>
                        <span>like</span> { props.likesCount }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post;