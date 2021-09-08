import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://otdyh-foros.ru/userfiles/carousel/1/media_cUaU6QszyusPyjoBpR9blon7c.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>)
}

export default ProfileInfo;