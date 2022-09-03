import React, {useCallback, useEffect, useRef} from 'react'
import styles from './AlternativeSuperDoubleRange.module.css'

export type OnChangeType = {
    value1: number;
    value2: number;
};

type RangeType = {
    min: number;
    max: number;
    onChange: ({value1, value2}: OnChangeType) => void;
    value1: number;
    value2: number;
};

export const AlternativeSuperDoubleRange: React.FC<RangeType> = (
    {min, max, value1, value2, onChange}) => {

    const range = useRef<HTMLInputElement>(null)

    // Convert to %
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    )

    const minPercent = getPercent(value1)
    const maxPercent = getPercent(value2)

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (range.current) {
            range.current.style.left = `${minPercent}%`
            range.current.style.width = `${maxPercent - minPercent}%`
        }
    }, [value1, getPercent])

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`
        }
    }, [value2, getPercent])

    useEffect(() => {
        value1 > value2 && onChange({value1: value2, value2: value2})
    }, [value1])

    return (
        <div className={`${styles.container}`}>
            <input
                type="range"
                min={min}
                max={max}
                value={value1}
                onChange={(event) => {
                    onChange({
                        value1: Math.min(event.currentTarget.valueAsNumber, value2),
                        value2: value2
                    })
                }}
                className={`${styles.thumb} ${styles.thumb__left}`}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={value2}
                onChange={(event) => {
                    onChange({
                        value1: value1,
                        value2: Math.max(event.currentTarget.valueAsNumber, value1)
                    })
                }}
                className={`${styles.thumb} ${styles.thumb__right}`}
            />
            <div className={`${styles.slider}`}>
                <div className={`${styles.slider__track}`}/>
                <div ref={range} className={`${styles.slider__range}`}/>
            </div>
        </div>
    )
}
