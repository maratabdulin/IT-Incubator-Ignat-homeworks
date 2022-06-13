import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import Button from "../components/button/Button";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
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
            <div className={s.affairsList}>
                {affairsList}
            </div>
            <div className={s.buttonList}>
                <Button title={'All'}
                        callback={() => setFilter('all')}
                />
                <Button title={'High'}
                        callback={() => setFilter('high')}
                        className={props.filter === 'high' && 'affairButtonHigh'}
                />
                <Button title={'Middle'}
                        callback={() => setFilter('middle')}
                        className={props.filter === 'middle' && 'affairButtonMiddle'}
                />
                <Button title={'Low'}
                        callback={() => setFilter('low')}
                        className={props.filter === 'low' && 'affairButtonLow'}
                />
            </div>
        </div>
    )
}

export default Affairs
