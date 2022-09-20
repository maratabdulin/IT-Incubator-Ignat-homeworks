/** @jsxImportSource @emotion/react */

import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../h10/bll/store';
import {ThemeTypes} from '../../../h10/bll/setThemeReducer';
import {css} from '@emotion/react';
import colors from '../../../assets/styles/colors';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const radio = css`
  width: 30px;
  height: 30px;
  outline: none;
`

const label = css`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
  width: fit-content;
  min-height: 30px;
  padding: 10px;
  font-family: "Fredoka One", cursive;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: .5s;
  background-color: white;
`


const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value);
    }

    let themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme);

    const labelChecked = css`
      border: 2px solid ${colors[themeFromState].main};
      filter: drop-shadow(0 0 5px ${colors[themeFromState].secondary}) drop-shadow(0 0 20px ${colors[themeFromState].secondary}) contrast(2) brightness(2);
    `
    const labelNotChecked = css`
      border: 2px solid ${colors[themeFromState].secondary};
      filter: drop-shadow(0 0 5px ${colors[themeFromState].main}) drop-shadow(0 0 20px ${colors[themeFromState].main}) contrast(2) brightness(2);
    `

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label
            key={name + '-' + i}
            css={[label, o === value ? labelChecked : labelNotChecked]}
        >
            <input
                type={'radio'}
                name={name}
                value={o}
                checked={o === value}
                onChange={onChangeCallback}
                css={radio}
            />
            {o}
        </label>
    )) : []

    return (

        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
