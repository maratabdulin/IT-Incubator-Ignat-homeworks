/** @jsxImportSource @emotion/react */

import React from 'react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../h10/bll/store';
import {ThemeTypes} from '../../h10/bll/setThemeReducer';
import {css, SerializedStyles} from '@emotion/react';
import colors from '../../assets/styles/colors';
import {FilterType} from '../../h2/HW2';
import {affairsColorOption} from '../../h2/Affairs';

type ButtonPropsType = {
    disabled: any;
    title: string
    callback: () => void
    filter?: FilterType
    className?: SerializedStyles
}

// emotion static style
const button = css`
  padding: 10px 30px;
  font-family: "Fredoka One", cursive;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  transition: .5s;
`;

const Button: React.FC<ButtonPropsType> = ({disabled = false, filter = 'all', title, callback, className}) => {

    const themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme);

    // emotion dynamic style
    const buttonTheme = css`
      color: ${colors[themeFromState].main};
      border: 2px solid ${colors[themeFromState].secondary};
      background-color: ${colors[themeFromState].secondary};
      filter: drop-shadow(0 0 10px ${colors[themeFromState].buttonBackground}) drop-shadow(0 0 30px ${colors[themeFromState].buttonBackground}) contrast(2) brightness(2);

      &:hover {
        color: ${colors[themeFromState].secondary};
        background-color: ${colors[themeFromState].main};
        filter: drop-shadow(0 0 15px ${colors[themeFromState].buttonBackground}) drop-shadow(0 0 50px ${colors[themeFromState].buttonBackground}) contrast(2) brightness(2);

      }
    `
    let buttonFilterTheme = css``;
    if (filter !== 'all') {
        buttonFilterTheme = css`
          color: black;
          background-color: ${affairsColorOption[filter].color};

          &:hover {
            color: black;
            background-color: ${affairsColorOption[filter].color};
          }
        `
    }


    return (
        <button
            css={[button, buttonTheme, buttonFilterTheme, className]}
            onClick={callback}
            disabled={disabled}
        >
            {title}
        </button>
    );
};

export default Button;
