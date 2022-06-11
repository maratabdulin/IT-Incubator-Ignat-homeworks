import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from './Greeting.module.css'
import Title from "../components/title/Title";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const newUser = {name: name, _id: v1()};
        setUsers([newUser, ...users]) // need to fix
    }

    return (
        <div className={s.wrapper}>
            <Title text={'homework 3'} titleLevel={2}/>

            {/*should work (должно работать)*/}
            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}
            />

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    )
}

export default HW3
