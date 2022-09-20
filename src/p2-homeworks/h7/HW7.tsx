/** @jsxImportSource @emotion/react */

import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import Title from "../components/title/Title";
import sectionWrapper from '../assets/styles/sectionWrapper';
import {css} from '@emotion/react';

const arr = ['x', 'y', 'z']

const superSelect = css`
  margin: 0 auto 30px;
  padding: 10px;
`

const superRadio = css`
  display: flex;
  gap: 30px;
  margin: 0 auto 30px;
  padding: 10px;
`

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div css={sectionWrapper}>
            <Title text={'homeworks 7'} titleLevel={2}/>
            <div css={superSelect}>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div css={superRadio}>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
        </div>
    )
}

export default HW7
