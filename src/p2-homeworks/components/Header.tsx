/** @jsxImportSource @emotion/react */

import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {setThemeAC, ThemeTypes} from '../h10/bll/setThemeReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {css} from '@emotion/react';
import colors from '../assets/styles/colors';

const arr: Array<ThemeTypes> = ['neon', 'dark', 'light']

// emotion static style
const headerWrapper = css`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 90px;
  padding: 20px 50px;
`;
const navLinkWrapper = css`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: start;
  padding: 20px 50px;
  transition-duration: 500ms;
  transform: translate(-420px);

  &:after {
    width: fit-content;
    height: 30px;
    margin-left: 20px;
    padding: 10px;
    font-family: "Fredoka One", cursive;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    border-radius: 5px;
    content: "chapters";
  }
  &:hover {
    transition-duration: 500ms;
    transform: translate(0);
  } 
`;
const headerTitle = css`
  font-family: "Fredoka One", cursive;
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  text-decoration: none; 
`;
const select = css`
  height: 50px;
`

const Header = () => {

    const dispatch = useDispatch();
    const onChangeCallback = (value: ThemeTypes) => dispatch(setThemeAC(value))
    const themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme)

    // emotion dynamic style
    const navLinkWrapperTheme = css`
        &:after {
        color: ${colors[themeFromState].main};
        background-color: ${colors[themeFromState].secondary};
        filter: drop-shadow(0 0 10px ${colors[themeFromState].main}) contrast(3) brightness(2);
      }
      &:after:hover {
        color: ${colors[themeFromState].secondary};
        background-color: ${colors[themeFromState].secondary};
        text-shadow: 0 0 2px ${colors[themeFromState].secondary},
        0 0 5px ${colors[themeFromState].secondary},
        0 0 32px ${colors[themeFromState].main},
        0 0 36px ${colors[themeFromState].main},
        0 0 40px ${colors[themeFromState].main};
      }      
    `;
    const headerTitleTheme = css`
      color: ${colors[themeFromState].secondary};
      filter: drop-shadow(0 0 10px ${colors[themeFromState].main}) contrast(3) brightness(2);
      &:hover {
        text-shadow: 0 0 2px ${colors[themeFromState].secondary},
        0 0 5px ${colors[themeFromState].secondary},
        0 0 32px ${colors[themeFromState].main},
        0 0 36px ${colors[themeFromState].main},
        0 0 40px ${colors[themeFromState].main};
      }
    `;

    return (
        <div css={headerWrapper}>
            <div css={[navLinkWrapper, navLinkWrapperTheme]}>
                <NavLink to={PATH.PRE_JUNIOR} css={[headerTitle, headerTitleTheme]}>Pre Junior</NavLink>
                <NavLink to={PATH.JUNIOR} css={[headerTitle, headerTitleTheme]}>Junior</NavLink>
                <NavLink to={PATH.PLUS_JUNIOR} css={[headerTitle, headerTitleTheme]}>Pre Junior</NavLink>
            </div>
            <SuperSelect
                css={select}
                options={arr}
                value={themeFromState}
                onChangeOption={onChangeCallback}
            />
        </div>
    )
};

export default Header
