import React from 'react'
import s from './App.module.css'
import Header from "../../../p2-homeworks/components/Header";
import Pages from "../../../p2-homeworks/components/Pages";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Pages/>
        </div>
    )
}

export default App
