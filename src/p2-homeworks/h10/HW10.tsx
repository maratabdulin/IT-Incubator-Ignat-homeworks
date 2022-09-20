/** @jsxImportSource @emotion/react */

import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import Title from '../components/title/Title';
import styles from './HW10.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC, LoadingStateType} from './bll/loadingReducer';
import loaderImage from './assets/loaderImage.svg'

function HW10() {

    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, LoadingStateType>(state => state.loading);
    const dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>{
            dispatch(loadingAC(false))
        }, 5000)
        console.log('loading...')
    };

    return (
        <div className={styles.container}>
            <Title text={'homeworks 10'} titleLevel={2}/>

            {/*should work (должно работать)*/}
            {loading.isLoading
                ? (
                    <div className={`${styles.loadingWrapper} ${styles.loader}`}>
                        <img src={loaderImage} alt="Loader"/>
                    </div>
                ) : (
                    <div className={styles.loadingWrapper}>
                        <SuperButton onClick={setLoading}
                                     // className={styles.buttonLoading}
                        >set loading...</SuperButton>
                    </div>
                )
            }

            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
        </div>
    )
}

export default HW10
