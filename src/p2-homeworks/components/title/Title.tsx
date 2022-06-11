import React from 'react';
import style from './TitleStyle.module.css'

type TitlePropsType = {
    text: string
    titleLevel: 1 | 2 | 3 | 4 | 5 | 6
}

const Title:React.FC<TitlePropsType> = ({titleLevel, text}) => {

    const splitText = text.split("").join(" ")

    return (
        <>
            {titleLevel === 1 && <h1 className={style.title}>{splitText}</h1>}
            {titleLevel === 2 && <h2 className={style.title}>{splitText}</h2>}
            {titleLevel === 3 && <h3 className={style.title}>{splitText}</h3>}
            {titleLevel === 4 && <h4 className={style.title}>{splitText}</h4>}
            {titleLevel === 5 && <h5 className={style.title}>{splitText}</h5>}
            {titleLevel === 6 && <h6 className={style.title}>{splitText}</h6>}
        </>

    );
};

export default Title;
