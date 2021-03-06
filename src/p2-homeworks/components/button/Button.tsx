import React, {CSSProperties, MouseEventHandler} from 'react';
import './ButtonStyle.css'

type ButtonPropsType = {
    title: string
    callback: () => void
    style?: CSSProperties | undefined
    className?: false | string
    disabled?: boolean
}

const Button:React.FC<ButtonPropsType> = (props) => {

    return (
        <button
            className={`button ${props.className}`}
            onClick={props.callback}
            style={props.style}
            disabled={props.disabled}
        >
            {props.title}
        </button>
    );
};

export default Button;
