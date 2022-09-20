import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeTypes} from '../h10/bll/setThemeReducer';

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов

    const themeFromState = useSelector<AppStoreType, ThemeTypes>(state => state.theme.theme);
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimmedName = e.currentTarget.value.trim()

        if (trimmedName) {
            setName(trimmedName);
            error && setError('')
        } else {
            name && setName('')
            setError('Type your name please!')
        }
    }

    const addUser = () => {
        addUserCallback(name);
        alert(`Hello ${name}`);
        setName('');
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
        }
    }

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
            theme={themeFromState}
        />
    )
}

export default GreetingContainer
