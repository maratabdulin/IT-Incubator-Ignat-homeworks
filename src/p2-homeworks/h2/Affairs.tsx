/** @jsxImportSource @emotion/react */

import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import Button from "../components/button/Button";
import {css} from '@emotion/react';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter?: FilterType
}

type AffairColorOptionType = {
    [key in FilterType]: {
        color: string;
    };
};
export const affairsColorOption: AffairColorOptionType = {
    'high' : {
        color: 'red'
    },
    'middle' : {
        color: 'yellow'
    },
    'low': {
        color: 'green'
    },
    'all': {
        color: ''
    }
}

// emotion static style
const affairList = css`
  display: flex;
  gap: 15px;
  flex-direction: column;
  width: 50%;
  margin: 30px auto;
  padding: 0 30px;
`;
const buttonList = css`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
  padding: 0 30px;
`;

const Affairs = (props: AffairsPropsType) => {
    const affairsList = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setFilter = (filterName: FilterType) => props.setFilter(filterName);

    return (
        <div>
            <div css={affairList}>
                {affairsList}
            </div>
            <div css={buttonList}>
                <Button title={'All'}
                        callback={() => setFilter('all')}
                        disabled={false}
                />
                <Button title={'High'}
                        callback={() => setFilter('high')}
                        filter={props.filter === 'high' ? 'high' : undefined}
                        disabled={false}
                />
                <Button title={'Middle'}
                        callback={() => setFilter('middle')}
                        filter={props.filter === 'middle' ? 'middle' : undefined}
                        disabled={false}
                />
                <Button title={'Low'}
                        callback={() => setFilter('low')}
                        filter={props.filter === 'low' ? 'low' : undefined}
                        disabled={false}
                />
            </div>
        </div>
    )
};

export default Affairs
