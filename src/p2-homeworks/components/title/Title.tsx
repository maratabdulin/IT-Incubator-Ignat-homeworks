/** @jsxImportSource @emotion/react */

import React from 'react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../h10/bll/store';
import {css} from '@emotion/react';
import {dark} from '../../assets/styles/darkTheme';
import {light} from '../../assets/styles/lightTheme';
import {neon} from '../../assets/styles/neonTheme';

type TitlePropsType = {
    text: string
    titleLevel: 1 | 2 | 3 | 4 | 5 | 6
}

const titleStyle = css`
  position: relative;
  margin: 0 0 30px 0;
  font-family: 'Fredoka One', cursive;
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  text-align: center;

  &:after {
    position: absolute;
    right: 50px;
    bottom: -15px;
    left: 50px;
    height: 1px;
    content: "";
  }
`

const Title: React.FC<TitlePropsType> = ({titleLevel, text}) => {

    const splitText = text.split('').join(' ')

    const themeFromState = useSelector<AppStoreType, string>(state => state.theme.theme)

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
            {titleLevel === 1 && <h1 css={[titleStyle, themeClass]}>{splitText}</h1>}
            {titleLevel === 2 && <h2 css={[titleStyle, themeClass]}>{splitText}</h2>}
            {titleLevel === 3 && <h3 css={[titleStyle, themeClass]}>{splitText}</h3>}
            {titleLevel === 4 && <h4 css={[titleStyle, themeClass]}>{splitText}</h4>}
            {titleLevel === 5 && <h5 css={[titleStyle, themeClass]}>{splitText}</h5>}
            {titleLevel === 6 && <h6 css={[titleStyle, themeClass]}>{splitText}</h6>}
        </>

    );
};

export default Title;
