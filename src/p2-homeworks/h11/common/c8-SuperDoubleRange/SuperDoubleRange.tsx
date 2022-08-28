import React, {useCallback, useEffect, useState, useRef, FC} from 'react';
import PropTypes from "prop-types";
import "./SuperDoubleRange.css";

type RangePropsType ={
    onChange: (valueMin: number, valueMax: number) => void
    valueMin: number
}

const MultiRangeSlider:FC<RangePropsType> =({ onChange, valueMin }) => {
    let min = 0;
    let max = 100;

    const [minVal, setMinVal] = useState<number>(min);
    const [maxVal, setMaxVal] = useState<number>(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLInputElement>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [minVal, maxVal]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;

        }

    }, [minVal, getPercent]);
    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        setMinVal(valueMin)
    }, [valueMin]);

    return (
        <div className="container">
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    setMinVal(value);
                    onChange(minVal, maxVal);
                    minValRef.current = value;
                }}
                className="thumb thumb--left"
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    setMaxVal(value);
                    onChange(minVal, maxVal);
                    maxValRef.current = value;
                }}
                className="thumb thumb--right"
            />

            <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />
            </div>
        </div>
    );
};

export default MultiRangeSlider;
