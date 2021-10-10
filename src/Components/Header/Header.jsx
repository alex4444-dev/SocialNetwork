import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>
        <img
            src='https://static.vecteezy.com/system/resources/previews/002/214/392/original/flat-design-concept-social-network-peoples-connecting-around-the-world-with-line-and-avatar-icon-illustrate-free-vector.jpg'/>

        <div className={s.loginBlock}>
            {props.isAuth
                 ? <div> {props.login} - <button onClick={props.logout}>LogOut</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;