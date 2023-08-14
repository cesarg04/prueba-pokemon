import { AppDispatch } from "../store"
import { AuthenticateSlice } from "./mainSlice"

// Esto es un Thunk, es utilizado para hacer un dispatch al state de redux
export const Authenticate = (val: 'yes' | 'no') => {
    return (dispatch:AppDispatch) => {
        dispatch(AuthenticateSlice(val))
    }
}   