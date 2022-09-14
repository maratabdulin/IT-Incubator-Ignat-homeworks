/** @jsxImportSource @emotion/react */

import React from 'react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../h10/bll/store';
import {css} from '@emotion/react';
import {ThemeTypes} from '../../h10/bll/setThemeReducer';
import colors from '../../assets/styles/colors';

type TitlePropsType = {
    text: string
    titleLevel: 1 | 2 | 3 | 4 | 5 | 6
}

// emotion static style
const title = css`
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
    const themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme)

    // emotion dynamic style
    let titleTheme = css`
      color: ${colors[themeFromState].secondary};
      text-shadow: 0 0 2px ${colors[themeFromState].secondary},
      0 0 5px ${colors[themeFromState].secondary},
      0 0 32px ${colors[themeFromState].main},
      0 0 36px ${colors[themeFromState].main},
      0 0 40px ${colors[themeFromState].main};
      filter: drop-shadow(0 0 10px ${colors[themeFromState].main}) contrast(3) brightness(2);

      &:after {
        background-color: ${colors[themeFromState].secondary};
        box-shadow: 0 0 2px ${colors[themeFromState].secondary},
        0 0 5px ${colors[themeFromState].secondary},
        0 0 15px ${colors[themeFromState].main},
        0 0 28px ${colors[themeFromState].main},
        0 0 32px ${colors[themeFromState].main},
        0 0 36px ${colors[themeFromState].main},
        0 0 40px ${colors[themeFromState].main};
        filter: drop-shadow(0 0 5px ${colors[themeFromState].main}) contrast(3) brightness(2);
      }
    `

    return (
        <>
            {titleLevel === 1 && <h1 css={[title, titleTheme]}>{splitText}</h1>}
            {titleLevel === 2 && <h2 css={[title, titleTheme]}>{splitText}</h2>}
            {titleLevel === 3 && <h3 css={[title, titleTheme]}>{splitText}</h3>}
            {titleLevel === 4 && <h4 css={[title, titleTheme]}>{splitText}</h4>}
            {titleLevel === 5 && <h5 css={[title, titleTheme]}>{splitText}</h5>}
            {titleLevel === 6 && <h6 css={[title, titleTheme]}>{splitText}</h6>}
        </>

    );
};

export default Title;
