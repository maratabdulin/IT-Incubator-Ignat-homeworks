import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.css';


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    PLUS_JUNIOR: '/plus-junior'
}

function Header() {
    return (
        <div className='headerWrapper'>
            <NavLink to={PATH.PRE_JUNIOR} className='headerTitle'>Pre Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className='headerTitle'>Junior</NavLink>
            <NavLink to={PATH.PLUS_JUNIOR} className='headerTitle'>Pre Junior</NavLink>
        </div>
    )
}

export default Header
