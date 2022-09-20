/** @jsxImportSource @emotion/react */

import React, {DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, useState} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import {css} from '@emotion/react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../h10/bll/store';
import {ThemeTypes} from '../../../h10/bll/setThemeReducer';
import colors from '../../../assets/styles/colors';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type DefaultInputPropsWithoutClassName = Omit<DefaultInputPropsType, 'className'>

// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>


// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsWithoutClassName & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const superSpan = css`
  box-sizing: border-box;
  min-width: 300px;
  padding: 10px 10px 10px 20px;
  font-family: "Fredoka One", cursive;
  font-size: 20px;
  border: 2px solid transparent;
  outline: none;
`


const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme);

    const onEnterCallback = () => {
        // setEditMode() // выключить editMode при нажатии Enter
        setEditMode(false);
        onEnter && onEnter()
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        // setEditMode() // выключить editMode при нажатии за пределами инпута
        setEditMode(false);
        onBlur && onBlur(e)
    }
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        // setEditMode() // включить editMode при двойном клике
        setEditMode(true);
        onDoubleClick && onDoubleClick(e)
    }

    const superSpanTheme = css`
      color: ${colors[themeFromState].secondary};
      background-color: ${colors[themeFromState].bubbleBackground};
    `

    return (
        <>
            {editMode
                ? (
                    <SuperInputText
                        autoFocus
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />
                ) : (
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        css={[superSpan, superSpanTheme]}
                        {...restSpanProps}
                    >
                        {children || restProps.value}
                    </span>
                )
            }
        </>
    )
}

export default SuperEditableSpan
