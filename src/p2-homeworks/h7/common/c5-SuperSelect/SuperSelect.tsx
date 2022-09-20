/** @jsxImportSource @emotion/react */

import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react'
import {css} from '@emotion/react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../h10/bll/store';
import {ThemeTypes} from '../../../h10/bll/setThemeReducer';
import colors from '../../../assets/styles/colors';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const select = css`
  padding: 10px 30px;
  font-family: "Fredoka One", cursive;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: .5s;
`


const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] | undefined = options ? options.map((el, key) => (
        <option id={key.toString()}>
            {el}
        </option>)) : [];

    let themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme);

    const selectTheme = css`
      color: ${colors[themeFromState].main};
      border: 2px solid ${colors[themeFromState].secondary};
      filter: drop-shadow(0 0 5px ${colors[themeFromState].main}) drop-shadow(0 0 20px ${colors[themeFromState].main}) contrast(2) brightness(2);
    `

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value);
    }

    return (
        <select onChange={onChangeCallback} {...restProps} css={[select, selectTheme]}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
