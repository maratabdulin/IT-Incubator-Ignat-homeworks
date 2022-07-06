import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css';
import {PATH} from "./Pages";

function Header() {
    return (
        <div className={s.headerWrapper}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.headerTitle}>Pre Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.headerTitle}>Junior</NavLink>
            <NavLink to={PATH.PLUS_JUNIOR} className={s.headerTitle}>Pre Junior</NavLink>
        </div>
    )
}

export default Header
