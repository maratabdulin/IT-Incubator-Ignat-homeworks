/** @jsxImportSource @emotion/react */

import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../h10/bll/store';
import {ThemeTypes} from '../../../h10/bll/setThemeReducer';
import {css, SerializedStyles} from '@emotion/react';
import colors from '../../../assets/styles/colors';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type DefaultButtonPropsTypeWithoutClassName = Omit<DefaultButtonPropsType, 'className'>
type SuperButtonPropsType = DefaultButtonPropsTypeWithoutClassName & {
    red?: boolean
    className?: SerializedStyles
}

const button = css`
  padding: 10px 30px;
  font-family: "Fredoka One", cursive;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  transition: .5s;

  &:disabled, &:disabled:hover {
    color: rgba(239, 239, 239, 0.7);
    border: transparent;
    background-color: rgba(239, 239, 239, 0.3);
    filter: drop-shadow(0 0 15px #EFEFEF4C) drop-shadow(0 0 50px rgba(124, 123, 123, 0.3)) contrast(2) brightness(2);
  }
`

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    let themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme);

    if (red) {
        themeFromState = 'red'
    }

    const buttonTheme = css`
      color: ${colors[themeFromState].main};
      border: 2px solid ${red ? 'transparent' : colors[themeFromState].secondary};
      background-color: ${colors[themeFromState].secondary};
      filter: drop-shadow(0 0 10px ${red ? 'red' : colors[themeFromState].buttonBackground}) drop-shadow(0 0 30px ${red ? 'red' : colors[themeFromState].buttonBackground}) contrast(2) brightness(2);

      &:hover {
        color: ${colors[themeFromState].secondary};
        border-color: ${colors[themeFromState].secondary};
        background-color: ${colors[themeFromState].main};
        filter: drop-shadow(0 0 15px ${red ? 'red' : colors[themeFromState].buttonBackground}) drop-shadow(0 0 50px ${red ? 'red' : colors[themeFromState].buttonBackground}) contrast(2) brightness(2);
      }
    `;

    return (
        <button
            css={[button, buttonTheme, className]}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
