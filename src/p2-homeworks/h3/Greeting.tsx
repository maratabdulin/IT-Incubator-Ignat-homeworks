import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import Button from "../components/button/Button";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.noError  // need to fix with (?:)

    const style = {
        borderRadius: '0 5px 5px 0',
    }

    return (
        <div className={s.greeting}>
            <div className={s.counter}>{totalUsers}</div>
            <input value={name} onChange={setNameCallback} className={`${s.input} ${inputClass}`}/>
            <Button title={'ADD'} callback={()=>addUser(name) } style={style}/>
            <span className={s.errorMessage}>{error}</span>
        </div>
    )
}

export default Greeting
