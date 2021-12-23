import React from 'react';
import s from './Post.module.css';


type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg' />
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;