import React, {CSSProperties} from 'react';
import './ButtonStyle.css'

type ButtonPropsType = {
    title: string
    callback: () => void
    style?: CSSProperties | undefined
    className?: false | string
}

const Button:React.FC<ButtonPropsType> = (props) => {

    return (
        <button
            className={`button ${props.className}`}
            onClick={props.callback}
            style={props.style}
        >
            {props.title}
        </button>
    );
};

export default Button;
