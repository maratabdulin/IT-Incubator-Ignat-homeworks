/** @jsxImportSource @emotion/react */

import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {css, SerializedStyles} from '@emotion/react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../h10/bll/store';
import {ThemeTypes} from '../../../h10/bll/setThemeReducer';
import colors from '../../../assets/styles/colors';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type DefaultInputPropsTypeWithoutClassName = Omit<DefaultInputPropsType, 'className'>

type SuperCheckboxPropsType = DefaultInputPropsTypeWithoutClassName & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
    className?: SerializedStyles
}

const checkbox = css`
  width: 30px;
  height: 30px;
  border-radius: 5px;
`

const checkboxSpan = css`
  font-family: "Fredoka One", cursive;
  font-size: 20px;
`

const checkboxLabel = css`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  min-height: 30px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: .5s;
`

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    let themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme);

    const checkboxTheme = css`
      background-color: ${colors[themeFromState].secondary};
    `

    const checkboxLabelTheme = css`
      color: ${colors[themeFromState].main};
      border: 2px solid ${colors[themeFromState].secondary};
      background-color: ${colors[themeFromState].secondary};
      filter: drop-shadow(0 0 15px ${colors[themeFromState].main}) drop-shadow(0 0 50px ${colors[themeFromState].main}) contrast(2) brightness(2);

    `

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeChecked && onChangeChecked(e.currentTarget.checked);
        onChange && onChange(e);
        // сделайте так чтоб работал onChange и onChangeChecked
    }

    return (
        <label css={[checkboxLabel, checkboxLabelTheme]}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                css={[checkbox, checkboxTheme, className]}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
            />
            {children && <span css={checkboxSpan}>{children}</span>}
        </label> // благодаря label нажатие на спан передастся в инпут
    )
}

export default SuperCheckbox
