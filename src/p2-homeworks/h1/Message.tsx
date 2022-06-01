import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>
            <img
                src={props.avatar}
                alt='avatar'
                className={s.image}
            />
            <div className={s.bubble}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.text}>
                    {props.message}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
