export type ThemeTypes = 'neon' | 'dark' | 'light' | 'red'

const initState = {
    theme: 'neon'
}

export type SetThemeStateType = {
    theme: ThemeTypes
}

type SetThemeActionType = ReturnType<typeof setThemeAC>

export const setThemeReducer = (state = initState, action: SetThemeActionType): SetThemeStateType => { // fix any
    switch (action.type) {
        case 'SET-THEME': {
            return {...state, theme: action.payload.theme}
        }
        default:
            return <SetThemeStateType>state
    }
}

export const setThemeAC = (theme: ThemeTypes) => {
    return {
        type: 'SET-THEME',
        payload: {
            theme
        }
    } as const
}
