import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import Title from "../components/title/Title";
import style from './HW8.module.css'

export type UserType ={
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Kot', age: 3},
    {_id: 1, name: 'Alex', age: 66},
    {_id: 2, name: 'Nikolay', age: 16},
    {_id: 3, name: 'Victor', age: 44},
    {_id: 4, name: 'Dmitry', age: 40},
    {_id: 5, name: 'Irina', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={style.userInfo}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortAC('UP')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortAC('DOWN')))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, checkAC(18)))

    return (
        <div className={style.container}>
            <Title text={'homeworks 8'} titleLevel={2}/>
            {/*should work (должно работать)*/}
            <div className={style.usersWrapper}>
                {finalPeople}
            </div>
            <div className={style.buttonsWrapper}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={check18}>check 18</SuperButton>
            </div>

        </div>
    )
}

export default HW8
