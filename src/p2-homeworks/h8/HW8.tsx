/** @jsxImportSource @emotion/react */

import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import Title from '../components/title/Title';
import sectionWrapper from '../assets/styles/sectionWrapper';
import {css} from '@emotion/react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeTypes} from '../h10/bll/setThemeReducer';
import colors from '../assets/styles/colors';

export type UserType = {
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

const buttonWrapper = css`
  display: flex;
  gap: 30px;
  justify-content: start;
  width: 50%;
  margin: 0 auto;
`

const userInfo = css`
  display: flex;
  justify-content: space-between;
  font-family: "Fredoka One", cursive;
  font-size: 20px;
  font-weight: 700;
  color: white;
`

const userWrapper = css`
  display: flex;
  gap: 10px;
  flex-direction: column;
  box-sizing: border-box;
  width: 50%;
  margin: 20px auto 0;
  padding: 20px;
  border-radius: 5px;
  transition: .5s;
`

const HW8 = () => {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    let themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme);

    const userInfoTheme = css`
      color: ${colors[themeFromState].main}
    `

    const userWrapperTheme = css`
      background-color: ${colors[themeFromState].bubbleBackground};
      filter: drop-shadow(0 0 15px ${colors[themeFromState].main}) drop-shadow(0 0 50px ${colors[themeFromState].main}) contrast(2) brightness(2);
    `
    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} css={[userInfo, userInfoTheme]}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortAC('UP')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortAC('DOWN')))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, checkAC(18)))

    return (
        <div css={sectionWrapper}>
            <Title text={'homeworks 8'} titleLevel={2}/>
            {/*should work (должно работать)*/}
            <div css={[userWrapper, userWrapperTheme]}>
                {finalPeople}
            </div>
            <div css={buttonWrapper}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={check18}>check 18</SuperButton>
            </div>

        </div>
    )
};

export default HW8
