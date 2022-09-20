/** @jsxImportSource @emotion/react */

import React, {ChangeEvent, KeyboardEvent} from 'react'
import Button from '../components/button/Button';
import {css} from '@emotion/react';
import {ThemeTypes} from '../h10/bll/setThemeReducer';
import colors from '../assets/styles/colors';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';

const greeting = css`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto 50px auto;
  padding: 30px 0;
  background-color: transparent;
`;
const counter = css`
  width: 30px;
  padding: 10px 30px;
  font-family: "Fredoka One", cursive;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px 0 0 5px;
  outline: none;
  transition: .5s;
  text-align: center;
`;
const input = css`
  box-sizing: border-box;
  min-width: calc(50% - 206px);
  padding: 10px 10px 10px 20px;
  font-family: "Fredoka One", cursive;
  font-size: 20px;
  color: white;
  outline: none;
  background-color: black;
`;
const errorMessage = css`
  position: absolute;
  right: 50%;
  bottom: 0;
  font-family: "Fredoka One", cursive;
  color: red;
  transform: translateX(50%);
`


type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: (name: string) => void
    error: string
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    theme: ThemeTypes
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({
                                                   name,
                                                   setNameCallback,
                                                   addUser,
                                                   error,
                                                   totalUsers,
                                                   onEnter,
                                                   theme
                                               }) => {
    const themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme);

    const buttonCustom = css`
        border-radius: 0 5px 5px 0;
    `;
    const inputError = css`
      border: 2px solid ${error ? 'red' : 'black'};
    `;
    const counterTheme = css`
      color: ${colors[theme].main};
      background-color: ${colors[theme].secondary};
      border: 2px solid ${colors[theme].secondary};
      filter: drop-shadow(0 0 15px ${colors[theme].main}) drop-shadow(0 0 30px ${colors[theme].main}) contrast(2) brightness(2);
    `;

    const inputTheme = css`
      color: ${colors[themeFromState].secondary};
      background-color: ${colors[themeFromState].bubbleBackground};
    `;

    return (
        <div css={greeting}>
            <div css={[counter, counterTheme]}>{totalUsers}</div>
            <input
                value={name}
                onChange={setNameCallback}
                css={[input, inputTheme, inputError]}
                onKeyDown={onEnter}
            />
            <Button
                title={'ADD'}
                callback={() => addUser(name)}
                className={buttonCustom}
                disabled={!name}
            />
            <span css={errorMessage}>{error}</span>
        </div>
    )
}

export default Greeting
