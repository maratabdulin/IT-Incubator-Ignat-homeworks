import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment from "moment";
import style from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<any>(moment().format('k:mm:ss'))
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        window.clearTimeout(timerId);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(moment().format('k:mm:ss'));
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setShow(true)
    }
    const onMouseLeave = (e: React.MouseEvent<HTMLSpanElement, MouseEvent> ) => {
        setShow(false)// close
    }

    const stringTime = date // fix with date
    const stringDate = moment().format('MMMM Do YYYY') // fix with date

    return (
        <div className={style.clockWrapper}>
            <div
                className={style.clockTablo}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
                {show && (
                    <div className={style.clockDate}>
                        {stringDate}
                    </div>
                )}
            </div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
        </div>
    )
}

export default Clock
