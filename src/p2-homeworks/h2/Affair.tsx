import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={`
        ${s.affairItem}
        ${props.affair.priority === 'high' ? s.high : null} 
        ${props.affair.priority === 'middle' ? s.middle : null} 
        ${props.affair.priority === 'low' ? s.low : null} 
        `}>
            <div className={s.itemName}>{props.affair.name.toUpperCase()}</div>
            <div className={s.itemPriority}>{props.affair.priority}</div>
            <button className={`${s.button} ${s.buttonDelete}`} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
