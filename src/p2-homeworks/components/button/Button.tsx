import React, {CSSProperties} from 'react';
import style from './ButtonStyle.module.css'

type ButtonPropsType = {
    title: string
    callback: () => void
    style?: CSSProperties | undefined
}

const Button:React.FC<ButtonPropsType> = (props) => {
    return (
        <button
            className={style.button}
            onClick={props.callback}
            style={props.style}
        >
            {props.title}
        </button>
    );
};

export default Button;
