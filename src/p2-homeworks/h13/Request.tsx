/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {css} from '@emotion/react';
import {requestAPI, ResponseType} from './requestAPI';

const container = css`
  display: flex;
  gap: 30px;
  padding: 50px;
`

const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)

    const sendRequest = () => {
        requestAPI.changeSuccess(checked)
            .then((res) => {
                setChecked(res.data.yourBody.success)
            }).catch((err) => {
            console.log({...err});
            console.log(err.response ? err.response.data.errorText : err.message);
        })
    };

    return (
        <div css={container}>
            <SuperButton onClick={sendRequest}>Send request to Server</SuperButton>
            <SuperCheckbox
                checked={checked}
                onChangeChecked={setChecked}
            />
        </div>
    );
};

export default Request;
