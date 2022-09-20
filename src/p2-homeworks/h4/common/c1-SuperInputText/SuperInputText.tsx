/** @jsxImportSource @emotion/react */


import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './SuperInputText.module.css'
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../h10/bll/store';
import {ThemeTypes} from '../../../h10/bll/setThemeReducer';
import {css, SerializedStyles} from '@emotion/react';
import colors from '../../../assets/styles/colors';

// тип пропсов обычного инпута

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type DefaultInputPropsWithoutClassName = Omit<DefaultInputPropsType, 'className'>
// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsWithoutClassName & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    className?: SerializedStyles
}

const label = css`
  position: relative;
  box-sizing: border-box;
  min-width: 300px;
`
const superInput = css`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 10px 10px 20px;
  font-family: "Fredoka One", cursive;
  font-size: 20px;
  outline: none;
`
const errorMessage = css`
  position: absolute;
  right: 50%;
  bottom: 0;
  font-family: "Fredoka One", cursive;
  color: red;
  transform: translateX(50%);
`

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme);

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }

    const superInputTheme = css`
      color: ${colors[themeFromState].secondary};
      background-color: ${colors[themeFromState].bubbleBackground};
    `;

    const superInputError = css`
      border: 2px solid ${error ? 'red' : 'transparent'};
      caret-color: ${error ? 'red' : 'auto'};
    `;


    return (
        <label css={label}>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyDown={onKeyPressCallback}
                css={[superInput, superInputTheme, superInputError, className]}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            {error && <span css={errorMessage}>{error}</span>}
        </label>
    )
}

export default SuperInputText
