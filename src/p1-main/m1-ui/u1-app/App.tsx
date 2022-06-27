import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import Title from "../../../p2-homeworks/components/title/Title";
import HW4 from "../../../p2-homeworks/h4/HW4";

function App() {
    return (
        <div className={s.App}>
            <Title text={'REACT HOMEWORKS'} titleLevel={1}/>
            <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>
            <HW5/>

        </div>
    )
}

export default App
