/** @jsxImportSource @emotion/react */

import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import Title from "../components/title/Title";
import sectionWrapper from '../assets/styles/sectionWrapper';
import {css} from '@emotion/react';

const inputsWrapper = css`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  margin-bottom: 50px;
  padding: 30px;
`;


const HW6 = () => {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        const newValue =  restoreState<string>('editable-span-value', '')
        setValue(newValue)
    }

    return (
        <div css={sectionWrapper}>
            <Title text={'homeworks 6'} titleLevel={2}/>

            {/*should work (должно работать)*/}

            <div css={inputsWrapper}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
        </div>
    )
};

export default HW6
