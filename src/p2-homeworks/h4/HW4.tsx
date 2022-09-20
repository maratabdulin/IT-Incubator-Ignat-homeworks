/** @jsxImportSource @emotion/react */

import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import Title from '../components/title/Title';
import sectionWrapper from '../assets/styles/sectionWrapper';
import {css} from '@emotion/react';

// emotion static style
const inputsWrapper = css`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-direction: column;
  margin-bottom: 50px;
  padding-top: 30px;
`;
const transparentInput = css`
  color: #e1b0d9;
  border: 5px solid #ff0099;
  border-radius: 20px;
  background-color: transparent;
  filter: drop-shadow(0 0 15px #ff0099) drop-shadow(0 0 50px #ff0099) contrast(2) brightness(2);
  caret-color: #ff0099;
`;
const blueButton = css`
  color: #026077;
  border-color: transparent;
  background-color: #35b4ec;
  filter: drop-shadow(0 0 10px #35b4ec) drop-shadow(0 0 20px #35b4ec) contrast(2) brightness(2);
  &:hover{
    color: #35b4ec;
    border-color: #35b4ec;
    background-color: #026077;
    filter: drop-shadow(0 0 10px #35b4ec) drop-shadow(0 0 20px #35b4ec) contrast(2) brightness(2);
  }
`

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div css={sectionWrapper}>
            <Title text={'homeworks 4'} titleLevel={2}/>
            <div css={inputsWrapper}>
                <SuperInputText
                    className={transparentInput}
                />
                <SuperButton>
                    default
                </SuperButton>
                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>
                <SuperButton disabled>
                    disabled
                </SuperButton>
                <SuperButton className={blueButton}>
                    Blue button
                </SuperButton>
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>
                <SuperCheckbox
                    checked={checked}
                    onChange={testOnChange}
                />
            </div>

        </div>
    )
}

export default HW4
