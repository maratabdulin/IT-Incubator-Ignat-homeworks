import React, {CSSProperties, useState} from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const [style, setStyle] = useState<CSSProperties | undefined>(undefined);

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }// need to fix

    const buttonDeleteOverHandler =
        () => setStyle({color: 'white', backgroundColor: 'black'});
    const buttonDeleteLeaveHandler =
        () => setStyle({color: 'black', backgroundColor: 'white'});

    return (
        <div className={`
        ${s.affairItem}
        ${props.affair.priority === 'high' ? s.high : null} 
        ${props.affair.priority === 'middle' ? s.middle : null} 
        ${props.affair.priority === 'low' ? s.low : null} 
        `}>
            <div className={s.itemName}>{props.affair.name.toUpperCase()}</div>
            <div className={s.itemPriority}>{props.affair.priority}</div>
            <button className={s.buttonDelete}
                    onClick={deleteCallback}
                    onMouseOver={buttonDeleteOverHandler}
                    onMouseLeave={buttonDeleteLeaveHandler}
                    style={style}
            >X</button>
        </div>
    )
}

export default Affair
