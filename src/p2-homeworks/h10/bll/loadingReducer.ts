const initState = {
    isLoading: false
}

export type LoadingStateType = {
    isLoading: boolean
}

type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.payload.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'LOADING',
        payload: {
            isLoading
        }
    } as const
}
