/** @jsxImportSource @emotion/react */

import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import Title from "../components/title/Title";
import sectionWrapper from '../assets/styles/sectionWrapper';

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
const HW3 = () => {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        const newUser = {name: name, _id: v1()};
        setUsers([...users, newUser])
    }

    return (
        <div css={sectionWrapper}>
            <Title text={'homework 3'} titleLevel={2}/>
            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}
            />
        </div>
    )
};

export default HW3
