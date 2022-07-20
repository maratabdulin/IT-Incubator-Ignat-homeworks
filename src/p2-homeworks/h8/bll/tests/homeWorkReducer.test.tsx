import React from 'react'
import {checkAC, homeWorkReducer, sortAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: Array<UserType> // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Kot', age: 3},
        {_id: 1, name: 'Alex', age: 66},
        {_id: 2, name: 'Nikolay', age: 16},
        {_id: 3, name: 'Viktor', age: 44},
        {_id: 4, name: 'Dmitry', age: 40},
        {_id: 5, name: 'Irina', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortAC('UP'))
    expect(newState[0].name).toBe('Alex');
    expect(newState[5].name).toBe('Viktor');
})

test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortAC('DOWN'))
    expect(newState[0].name).toBe('Viktor');
    expect(newState[5].name).toBe('Alex');
})

test('check age 18', () => {
    const newState = homeWorkReducer(initialState, checkAC(18))
    expect(newState.length).toBe(4);
})
