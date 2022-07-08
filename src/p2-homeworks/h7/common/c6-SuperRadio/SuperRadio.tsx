import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.name);
    }

    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label
            key={name + '-' + i}
            className={o === value
                ? [s.label, s.labelChecked].join(' ')
                : [s.label, s.labelNotChecked].join(' ')}>
            <input
                type={'radio'}
                name={o}
                value={value}
                checked={o === value}
                onChange={onChangeCallback}
                className={s.radio}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
