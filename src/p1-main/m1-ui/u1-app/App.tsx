/** @jsxImportSource @emotion/react */
import React from 'react'
import Header from '../../../p2-homeworks/components/Header';
import Pages from '../../../p2-homeworks/components/Pages';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../p2-homeworks/h10/bll/store';
import {css, Global} from '@emotion/react';
import colors from '../../../p2-homeworks/assets/styles/colors';
import {ThemeTypes} from '../../../p2-homeworks/h10/bll/setThemeReducer';

const appStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");

  html {
    height: 100%;
    margin: 0 auto;
    font-family: "Fredoka One", cursive;
    background-color: white;
    background-size: contain;
  }
`;

function App() {

    let themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme)

    let themeClass = css`
      background: black url(${colors[themeFromState].backgroundImage});
      background-size: ${colors[themeFromState].backgroundSize};
    `

    return (
        <>
            <Global styles={appStyles}/>
            <div css={themeClass}>
                <Header/>
                <Pages/>
            </div>
        </>
    )
}

export default App
