/** @jsxImportSource @emotion/react */

import React from 'react'
import {AffairType} from './HW2';
import {css} from '@emotion/react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeTypes} from '../h10/bll/setThemeReducer';
import colors from '../assets/styles/colors';
import {affairsColorOption} from './Affairs';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

// emotion static style
const affairItem = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  padding: 10px 10px 10px 20px;
  font-family: 'Fredoka One', cursive;
  font-size: 20px;
  line-height: 30px;
  border-radius: 5px;
`;
const buttonDelete = css`
  justify-self: right;
  width: 30px;
  height: 30px;
  padding: 0;
  font-family: 'Fredoka One', cursive;
  font-size: 20px;
  border-radius: 50%;
  box-shadow: none;
`;
const itemPriority = css`
  justify-self: center;
`;


function Affair(props: AffairPropsType) {

    const themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme);

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }

    // emotion dynamic styles
    const affairItemTheme = css`
      color: ${colors[themeFromState].secondary};
      background-color: ${colors[themeFromState].bubbleBackground};
      filter: drop-shadow(0 0 5px ${colors[themeFromState].main}) contrast(2) brightness(2);
    `
    const buttonDeleteTheme = css`
      color: ${colors[themeFromState].bubbleBackground};
      background-color: ${colors[themeFromState].secondary};
      border: 2px solid ${colors[themeFromState].secondary};

      &:hover {
        color: ${colors[themeFromState].secondary};
        background-color: ${colors[themeFromState].bubbleBackground};
      }
    `
    let affairItemFilter = css``;
    if (props.affair.priority) {
        affairItemFilter = css`
          &:hover {
            font-weight: 700;
            color: black;
            filter: drop-shadow(0 0 20px ${affairsColorOption[props.affair.priority].color}) contrast(2) brightness(2);
            background-color: ${affairsColorOption[props.affair.priority].color};
          }
        `
    }

    return (
        <div css={[affairItem, affairItemTheme, affairItemFilter]}>
            <div>{props.affair.name.toUpperCase()}</div>
            <div css={itemPriority}>{props.affair.priority}</div>
            <button
                css={[buttonDelete, buttonDeleteTheme]}
                onClick={deleteCallback}
            >X
            </button>
        </div>
    )
}

export default Affair
