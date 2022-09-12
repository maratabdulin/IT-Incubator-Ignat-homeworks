import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from 'redux';
import {setThemeReducer} from './setThemeReducer';

const reducers = combineReducers({
    loading: loadingReducer,
    theme: setThemeReducer
})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
