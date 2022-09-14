/** @jsxImportSource @emotion/react */

import React from 'react'
import Message from "./Message";
import Title from "../components/title/Title";
import sectionWrapper from '../assets/styles/sectionWrapper';

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div css={sectionWrapper}>
            <Title text={'homework 1'} titleLevel={2}/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1
