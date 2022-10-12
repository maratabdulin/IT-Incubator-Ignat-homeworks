/** @jsxImportSource @emotion/react */

import React from 'react';
import Title from '../components/title/Title';
import sectionWrapper from '../assets/styles/sectionWrapper';
import Request from './Request';

const HW13 = () => {
    return (
        <div css={sectionWrapper}>
            <Title text={'homework 13'} titleLevel={2}/>
            <Request/>
        </div>
    );
};

export default HW13;
