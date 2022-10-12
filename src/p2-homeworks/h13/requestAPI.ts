import axios from 'axios'

// Types
type RequestType = {
    success: boolean
}

export type ResponseType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}

// Api
const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
})

export const requestAPI = {
    changeSuccess(value: boolean) {
        const payload = {success: value}
        return instance.post<ResponseType>('', payload);
    }
}
