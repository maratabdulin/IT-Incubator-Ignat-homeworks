import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {PATH} from './Pages';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {setThemeAC, ThemeTypes} from '../h10/bll/setThemeReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';

const arr: Array<ThemeTypes> = ['neon', 'dark', 'light']

function Header() {

    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const dispatch = useDispatch();
    const onChangeCallback = (value: ThemeTypes) => dispatch(setThemeAC(value))


    return (
        <div className={s.headerWrapper}>
            <div className={s.navLinkWrapper}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.headerTitle}>Pre Junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.headerTitle}>Junior</NavLink>
                <NavLink to={PATH.PLUS_JUNIOR} className={s.headerTitle}>Pre Junior</NavLink>
            </div>
            <SuperSelect
                className={s.themeSelect}
                options={arr}
                value={theme}
                onChangeOption={onChangeCallback}
            />
        </div>

    )
}

export default Header
