import {UserType} from "../HW8";

type PayloadSortActionType = 'UP' | 'DOWN'

type SortActionType = {
    type: 'SORT'
    payload: PayloadSortActionType
}

type CheckActionType = {
    type: 'CHECK'
    payload: number
}

type ActionType = SortActionType | CheckActionType

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            let sortState = [...state].sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    else return 0
                }
            )
            return (action.payload === 'UP' ? sortState : sortState.reverse())
        }
        case
        'CHECK'
        : {
            return state.filter(el => el.age > 18)
        }
        default:
            return state
    }
}

export const sortAC = (payload: PayloadSortActionType): SortActionType => {
    return {type: 'SORT', payload} as const
}

export const checkAC = (payload: number): CheckActionType => {
    return {type: "CHECK", payload} as const
}
