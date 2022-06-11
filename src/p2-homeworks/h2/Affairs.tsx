import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import Button from "../components/button/Button";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const affairsList = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    // const setAll = () => {
    //     props.setFilter('all')
    // } // need to fix
    // const setHigh = () => {
    //     props.setFilter('high')
    // }
    // const setMiddle = () => {
    //     props.setFilter('middle')
    // }
    // const setLow = () => {
    //     props.setFilter('low')
    // }

    const setFilter = (filterName: FilterType) => props.setFilter(filterName);

    const styleHigh = {
        backgroundColor: 'red',
        color: 'black'
    }
    const styleMiddle = {
        backgroundColor: 'yellow',
        color: 'black'
    }
    const styleLow = {
        backgroundColor: 'green',
        color: 'black'
    }

    return (
        <div>
            <div className={s.affairsList}>
                {affairsList}
            </div>
            <div className={s.buttonList}>
                <Button title={'All'} callback={() => setFilter('all')}/>
                <Button title={'High'} callback={() => setFilter('high')} style={styleHigh}/>
                <Button title={'Middle'} callback={() => setFilter('middle')} style={styleMiddle}/>
                <Button title={'Low'} callback={() => setFilter('low')} style={styleLow}/>
            </div>
        </div>
    )
}

export default Affairs
