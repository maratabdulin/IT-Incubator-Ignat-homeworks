import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import Title from '../components/title/Title';
import styles from './HW11.module.css';

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const superRangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue1(+e.currentTarget.value);
    }

    const superRangeHandler2 = (valueMin: number, valueMax: number) => {
        setValue1(valueMin);
        setValue2(valueMax);
    }

    return (
        <div className={styles.container}>
            <Title text={'homeworks 11'} titleLevel={2}/>

            {/*should work (должно работать)*/}
            <div className={styles.rangeContainer}>
                <span className={styles.rangeValues}>{value1}</span>
                <SuperRange
                    onChange={superRangeHandler}
                    value={value1}
                />
            </div>

            <div className={styles.rangeContainer}>
                <span className={styles.rangeValues}>{value1}</span>
                <SuperDoubleRange
                    valueMin={value1}
                    onChange={superRangeHandler2}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span className={styles.rangeValues}>{value2}</span>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
        </div>
    )
}

export default HW11
