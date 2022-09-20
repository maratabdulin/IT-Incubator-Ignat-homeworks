/** @jsxImportSource @emotion/react */

import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import Title from '../components/title/Title';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {setThemeAC, setThemeReducer, ThemeTypes} from '../h10/bll/setThemeReducer';

export const arr:Array<ThemeTypes> = ['neon', 'dark', 'light']

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)

    const dispatch = useDispatch();
    // useDispatch, onChangeCallback

    const onChangeCallback = (value: ThemeTypes) => {
        dispatch(setThemeAC(value))
    }

    return (
        <div className={s.container}>
            <Title text={'homework 12'} titleLevel={2}/>
            {/*<span className={s[theme + '-text']}>*/}
            {/*    homeworks 12*/}
            {/*</span>*/}

            {/*should work (должно работать)*/}
            <div className={s.themesContainer}>
                <SuperRadio
                    name={'Default Theme'}
                    options={arr}
                    value={theme}
                    onChangeOption={onChangeCallback}
                    title={'Default Theme'}/>
            </div>
        </div>
    );
}

export default HW12;
