/** @jsxImportSource @emotion/react */

import React from 'react'
import {css} from '@emotion/react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeTypes} from '../h10/bll/setThemeReducer';
import colors from '../assets/styles/colors';

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

// emotion static style
const message = css`
  display: flex;
  align-items: end;
  gap: 20px;
  max-width: fit-content;
  margin: 0 auto;
  padding-top: 30px;
  font-size: 20px;
  line-height: 25px;
`;
const image = css`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`
const bubble = css`
  position: relative;
  z-index: 2;
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding: 20px 80px 20px 20px;
  font-family: 'Fredoka One', cursive;
  border-radius: 10px;
  transition: .5s;

  &:after {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: -20px;
    width: 36px;
    height: 19px;
    content: "";
    transition: .5s;
  }
`;
const text = css`
  z-index: 2;
  margin: 0;
`;
const name = css`
  z-index: 2;
  margin: 0;
`;
const time = css`
  position: absolute;
  right: 10px;
  bottom: 5px;
  margin: 0;
`;

const Message: React.FC<MessageType> = (props) => {

    const themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme);

    // emotion dynamic style
    const imageTheme = css`
      background-color: ${colors[themeFromState].secondary};
      box-shadow: 0 0 20px ${colors[themeFromState].main};
    `;
    const bubbleTheme = css`
      background-color: ${colors[themeFromState].bubbleBackground};
      filter: drop-shadow(0 0 20px ${colors[themeFromState].secondary}) contrast(2) brightness(2);
      &:after {
        background: radial-gradient(circle at top left, transparent 50%, ${colors[themeFromState].bubbleBackground} 50%);
        filter: drop-shadow(0 0 20px ${colors[themeFromState].main}) contrast(2) brightness(2);
      }
    `;
    const textAndTimeTheme = css`
        color: ${colors[themeFromState].secondary};
    `;
    const nameTheme = css`
      color: ${colors[themeFromState].main};
    `

    return (
        <div css={message}>
            <img
                src={props.avatar}
                alt="avatar"
                css={[image, imageTheme]}
            />
            <div css={[bubble, bubbleTheme]}>
                <div css={[name, nameTheme]}>
                    {props.name}
                </div>
                <div css={[text, textAndTimeTheme]}>
                    {props.message}
                </div>
                <div css={[time, textAndTimeTheme]}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
