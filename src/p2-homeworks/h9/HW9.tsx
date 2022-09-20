/** @jsxImportSource @emotion/react */

import React from 'react'
import Clock from './Clock'
import Title from "../components/title/Title";
import style from './HW9.module.css'

function HW9() {
    return (
        <div className={style.container}>
            <Title text={'homeworks 9'} titleLevel={2}/>

            {/*should work (должно работать)*/}
            <Clock/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
        </div>
    )
}

export default HW9
