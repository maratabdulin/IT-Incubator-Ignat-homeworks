/** @jsxImportSource @emotion/react */
import React from 'react'
import Header from '../../../p2-homeworks/components/Header';
import Pages from '../../../p2-homeworks/components/Pages';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../p2-homeworks/h10/bll/store';
import {css, Global} from '@emotion/react';

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
const neon = css`
  background: black url("https://images.unsplash.com/photo-1604147495798-57beb5d6af73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80");
  background-size: contain;
`
const light = css`
  background: white url("https://media.istockphoto.com/vectors/abstract-flat-water-bubbles-seamless-pattern-isolated-on-the-white-vector-id1016990964?k=20&m=1016990964&s=612x612&w=0&h=4pUy0FaZHnxuWFDMD7Sz_3xMR0F_cySzNbLr7qn9XZI=");
`
const dark = css`
  background: black url("https://r1.ilikewallpaper.net/iphone-11-pro-wallpapers/download/10449/Matrix-iphone-wallpaper-ilikewallpaper_com.jpg");
`

function App() {

    let themeFromState = useSelector<AppStoreType, string>(state => state.theme.theme)

    let themeClass;
    switch (themeFromState) {
        case 'dark':
            themeClass = dark
            break;
        case 'light':
            themeClass = light
            break;
        default:
            themeClass = neon
    }

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
